import { useEffect, useMemo, useRef, useState } from 'react';

type Source = 'GitHub' | 'Codeberg';

export type ActivityItem = {
  id: string;
  source: Source;
  /** 'repo' items are synthesized from a repository's last push and are dropped when a real event covers the same day. */
  kind: 'event' | 'repo';
  date: string;
  action: string;
  repo: string;
  repoUrl: string;
  detail?: string;
};

type Profile = {
  source: Source;
  url: string;
  repos?: number;
  followers?: number;
};

type SourceState = { status: 'loading' | 'ok' | 'error'; message?: string };

type PageResult = { items: ActivityItem[]; hasMore: boolean };

const GITHUB_EVENTS_PER_PAGE = 30;
const GITHUB_REPOS_PER_PAGE = 10;

type FeedProps = {
  githubUser: string;
  codebergUser: string;
};

const CACHE_TTL_MS = 10 * 60 * 1000;

type Fetched<T> = { data: T; hasNext: boolean };

class HttpError extends Error {
  constructor(public status: number, message: string) {
    super(message);
  }
}

async function cachedFetch<T>(url: string): Promise<Fetched<T>> {
  const key = `activity-cache:${url}`;
  try {
    const raw = sessionStorage.getItem(key);
    if (raw) {
      const cached = JSON.parse(raw) as { at: number } & Fetched<T>;
      if (Date.now() - cached.at < CACHE_TTL_MS) return { data: cached.data, hasNext: cached.hasNext };
    }
  } catch {
    // Storage can be unavailable in private windows; fall through to the network.
  }

  const response = await fetch(url, { headers: { Accept: 'application/json' } });
  if (!response.ok) {
    if (response.status === 403 || response.status === 429) throw new HttpError(response.status, 'rate limited, try again later');
    throw new HttpError(response.status, `request failed (${response.status})`);
  }
  const data = (await response.json()) as T;
  // GitHub exposes RFC 5988 Link headers to browsers, so rel="next" tells us whether another page exists.
  const hasNext = /rel="next"/.test(response.headers.get('Link') ?? '');
  try {
    sessionStorage.setItem(key, JSON.stringify({ at: Date.now(), data, hasNext }));
  } catch {
    // Ignore quota or availability errors.
  }
  return { data, hasNext };
}

async function cachedJson<T>(url: string): Promise<T> {
  return (await cachedFetch<T>(url)).data;
}

function firstLine(message: string): string {
  return message.split('\n')[0].trim();
}

// ---------- GitHub ----------

type GitHubEvent = {
  id: string;
  type: string;
  created_at: string;
  repo: { name: string };
  payload: Record<string, any>;
};

type GitHubRepo = {
  name: string;
  full_name: string;
  html_url: string;
  pushed_at: string;
  fork: boolean;
  description: string | null;
  language: string | null;
};

type GitHubUser = { html_url: string; public_repos: number; followers: number };

function describeGitHubEvent(event: GitHubEvent): Pick<ActivityItem, 'action' | 'detail'> | null {
  const p = event.payload ?? {};
  switch (event.type) {
    case 'PushEvent': {
      const commits: { message: string }[] = Array.isArray(p.commits) ? p.commits : [];
      const branch = typeof p.ref === 'string' ? p.ref.replace('refs/heads/', '') : '';
      const count = commits.length || p.size || p.distinct_size || 0;
      return {
        action: count > 1 ? `Pushed ${count} commits` : 'Pushed',
        detail: commits.length ? firstLine(commits[commits.length - 1].message) : branch ? `to ${branch}` : undefined,
      };
    }
    case 'CreateEvent':
      if (p.ref_type === 'repository') return { action: 'Created repository', detail: p.description ?? undefined };
      return { action: `Created ${p.ref_type}`, detail: p.ref ?? undefined };
    case 'PullRequestEvent':
      return { action: `${p.action === 'closed' && p.pull_request?.merged ? 'Merged' : capitalize(p.action)} pull request`, detail: p.pull_request?.title };
    case 'IssuesEvent':
      return { action: `${capitalize(p.action)} issue`, detail: p.issue?.title };
    case 'ReleaseEvent':
      return { action: 'Published release', detail: p.release?.name || p.release?.tag_name };
    case 'WatchEvent':
      return { action: 'Starred' };
    case 'ForkEvent':
      return { action: 'Forked' };
    case 'PublicEvent':
      return { action: 'Made public' };
    default:
      return null;
  }
}

function capitalize(value: unknown): string {
  const text = typeof value === 'string' ? value : '';
  return text ? text[0].toUpperCase() + text.slice(1) : 'Updated';
}

async function loadGitHubProfile(user: string): Promise<Profile> {
  const profile = await cachedJson<GitHubUser>(`https://api.github.com/users/${user}`);
  return { source: 'GitHub', url: profile.html_url, repos: profile.public_repos, followers: profile.followers };
}

/** Pages already known to be exhausted are skipped so later pages only hit the endpoint that still has data. */
type GitHubCursor = { page: number; eventsDone: boolean; reposDone: boolean };

async function fetchGitHubEvents(user: string, page: number): Promise<Fetched<GitHubEvent[]>> {
  try {
    return await cachedFetch<GitHubEvent[]>(`https://api.github.com/users/${user}/events/public?per_page=${GITHUB_EVENTS_PER_PAGE}&page=${page}`);
  } catch (error) {
    // The events API stops at 300 events and answers 422 past that; treat it as the end of the list.
    if (error instanceof HttpError && error.status === 422) return { data: [], hasNext: false };
    throw error;
  }
}

async function loadGitHubPage(user: string, cursor: GitHubCursor): Promise<PageResult & { cursor: GitHubCursor }> {
  const empty: Fetched<never[]> = { data: [], hasNext: false };
  const [events, repos] = await Promise.all([
    cursor.eventsDone ? empty : fetchGitHubEvents(user, cursor.page),
    cursor.reposDone ? empty : cachedFetch<GitHubRepo[]>(`https://api.github.com/users/${user}/repos?sort=pushed&per_page=${GITHUB_REPOS_PER_PAGE}&page=${cursor.page}`),
  ]);

  const items: ActivityItem[] = [];
  for (const event of events.data) {
    const described = describeGitHubEvent(event);
    if (!described) continue;
    items.push({
      id: `gh-event-${event.id}`,
      source: 'GitHub',
      kind: 'event',
      date: event.created_at,
      repo: event.repo.name.split('/').pop() ?? event.repo.name,
      repoUrl: `https://github.com/${event.repo.name}`,
      ...described,
    });
  }

  // The public events API only covers ~90 days, so fill in with recently pushed repos.
  for (const repo of repos.data) {
    if (repo.fork) continue;
    items.push({
      id: `gh-repo-${repo.full_name}`,
      source: 'GitHub',
      kind: 'repo',
      date: repo.pushed_at,
      action: 'Updated repository',
      repo: repo.name,
      repoUrl: repo.html_url,
      detail: [repo.language, repo.description].filter(Boolean).join(' · ') || undefined,
    });
  }

  const eventsDone = cursor.eventsDone || !events.hasNext;
  const reposDone = cursor.reposDone || !repos.hasNext;
  return {
    items,
    hasMore: !(eventsDone && reposDone),
    cursor: { page: cursor.page + 1, eventsDone, reposDone },
  };
}

function dedupeKey(item: ActivityItem): string {
  return `${item.source}|${item.repo.toLowerCase()}|${item.date.slice(0, 10)}`;
}

// ---------- Codeberg (Forgejo) ----------

type CodebergActivity = {
  id: number;
  op_type: string;
  created: string;
  ref_name?: string;
  content?: string;
  repo?: { name: string; html_url: string };
};

type CodebergUser = { html_url: string; followers_count: number };

const CODEBERG_ACTIONS: Record<string, string> = {
  commit_repo: 'Pushed',
  create_repo: 'Created repository',
  rename_repo: 'Renamed repository',
  push_tag: 'Pushed tag',
  publish_release: 'Published release',
  create_issue: 'Opened issue',
  close_issue: 'Closed issue',
  create_pull_request: 'Opened pull request',
  merge_pull_request: 'Merged pull request',
  close_pull_request: 'Closed pull request',
  star_repo: 'Starred',
  fork_repo: 'Forked',
};

function describeCodeberg(entry: CodebergActivity): Pick<ActivityItem, 'action' | 'detail'> | null {
  const action = CODEBERG_ACTIONS[entry.op_type];
  if (!action) return null;

  if (entry.op_type === 'commit_repo' && entry.content) {
    try {
      // Only commit messages are shown; author metadata in the payload is ignored.
      const parsed = JSON.parse(entry.content) as { Commits?: { Message: string }[]; Len?: number };
      const commits = parsed.Commits ?? [];
      const count = parsed.Len ?? commits.length;
      return {
        action: count > 1 ? `Pushed ${count} commits` : 'Pushed',
        detail: commits[0] ? firstLine(commits[0].Message) : undefined,
      };
    } catch {
      return { action };
    }
  }

  if (entry.op_type === 'push_tag' && entry.ref_name) {
    return { action, detail: entry.ref_name.replace('refs/tags/', '') };
  }
  return { action };
}

async function loadCodeberg(user: string): Promise<{ items: ActivityItem[]; profile: Profile }> {
  const [profile, feed, repos] = await Promise.all([
    cachedJson<CodebergUser>(`https://codeberg.org/api/v1/users/${user}`),
    cachedJson<CodebergActivity[]>(`https://codeberg.org/api/v1/users/${user}/activities/feeds?limit=50`),
    cachedJson<unknown[]>(`https://codeberg.org/api/v1/users/${user}/repos?limit=50`),
  ]);

  const items: ActivityItem[] = [];
  for (const entry of feed) {
    if (!entry.repo) continue;
    const described = describeCodeberg(entry);
    if (!described) continue;
    items.push({
      id: `cb-${entry.id}`,
      source: 'Codeberg',
      kind: 'event',
      date: entry.created,
      repo: entry.repo.name,
      repoUrl: entry.repo.html_url,
      ...described,
    });
  }

  return { items, profile: { source: 'Codeberg', url: profile.html_url, repos: repos.length, followers: profile.followers_count } };
}

// ---------- UI ----------

const dateFormat = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
const monthFormat = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' });

function relativeTime(date: Date): string {
  const days = Math.floor((Date.now() - date.getTime()) / 86_400_000);
  if (days <= 0) return 'today';
  if (days === 1) return 'yesterday';
  if (days < 30) return `${days} days ago`;
  return dateFormat.format(date);
}

const INITIAL_CURSOR: GitHubCursor = { page: 1, eventsDone: false, reposDone: false };

export default function ActivityFeed({ githubUser, codebergUser }: FeedProps) {
  const [items, setItems] = useState<ActivityItem[]>([]);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [states, setStates] = useState<Record<Source, SourceState>>({
    GitHub: { status: 'loading' },
    Codeberg: { status: 'loading' },
  });
  const [filter, setFilter] = useState<'All' | Source>('All');
  const [githubCursor, setGithubCursor] = useState<GitHubCursor>(INITIAL_CURSOR);
  const [githubHasMore, setGithubHasMore] = useState(false);
  const [githubPagesLoaded, setGithubPagesLoaded] = useState(0);
  const [loadingMore, setLoadingMore] = useState(false);
  const [moreError, setMoreError] = useState<string | null>(null);
  const cancelled = useRef(false);

  const fail = (source: Source, error: unknown) => {
    if (cancelled.current) return;
    const message = error instanceof Error ? error.message : 'unavailable';
    setStates((current) => ({ ...current, [source]: { status: 'error', message } }));
  };

  const appendGitHubPage = (result: PageResult & { cursor: GitHubCursor }) => {
    setItems((current) => {
      const ids = new Set(current.map((item) => item.id));
      return [...current, ...result.items.filter((item) => !ids.has(item.id))];
    });
    setGithubCursor(result.cursor);
    setGithubHasMore(result.hasMore);
    setGithubPagesLoaded(result.cursor.page - 1);
  };

  useEffect(() => {
    cancelled.current = false;

    Promise.all([loadGitHubProfile(githubUser), loadGitHubPage(githubUser, INITIAL_CURSOR)])
      .then(([profile, page]) => {
        if (cancelled.current) return;
        setProfiles((current) => [...current.filter((p) => p.source !== 'GitHub'), profile]);
        appendGitHubPage(page);
        setStates((current) => ({ ...current, GitHub: { status: 'ok' } }));
      })
      .catch((error) => fail('GitHub', error));

    loadCodeberg(codebergUser)
      .then((result) => {
        if (cancelled.current) return;
        setItems((current) => [...current.filter((item) => item.source !== 'Codeberg'), ...result.items]);
        setProfiles((current) => [...current.filter((p) => p.source !== 'Codeberg'), result.profile]);
        setStates((current) => ({ ...current, Codeberg: { status: 'ok' } }));
      })
      .catch((error) => fail('Codeberg', error));

    return () => {
      cancelled.current = true;
    };
  }, [githubUser, codebergUser]);

  const loadMore = async () => {
    setLoadingMore(true);
    setMoreError(null);
    try {
      const page = await loadGitHubPage(githubUser, githubCursor);
      if (!cancelled.current) appendGitHubPage(page);
    } catch (error) {
      if (!cancelled.current) setMoreError(error instanceof Error ? error.message : 'request failed');
    } finally {
      if (!cancelled.current) setLoadingMore(false);
    }
  };

  // Drop repo-push placeholders when a real event already covers that repo on that day.
  const deduped = useMemo(() => {
    const eventKeys = new Set(items.filter((item) => item.kind === 'event').map(dedupeKey));
    return items.filter((item) => item.kind === 'event' || !eventKeys.has(dedupeKey(item)));
  }, [items]);

  // While GitHub still has unloaded pages, anything older than its oldest loaded item could be
  // out of order, so the merged timeline stops there until the next page arrives.
  const githubFrontier = useMemo(() => {
    if (!githubHasMore || filter === 'Codeberg') return null;
    const githubDates = deduped.filter((item) => item.source === 'GitHub').map((item) => Date.parse(item.date));
    return githubDates.length ? Math.min(...githubDates) : null;
  }, [deduped, githubHasMore, filter]);

  const visible = useMemo(
    () =>
      deduped
        .filter((item) => filter === 'All' || item.source === filter)
        .filter((item) => githubFrontier === null || Date.parse(item.date) >= githubFrontier)
        .sort((a, b) => Date.parse(b.date) - Date.parse(a.date)),
    [deduped, filter, githubFrontier]
  );

  const groups = useMemo(() => {
    const result: { label: string; items: ActivityItem[] }[] = [];
    for (const item of visible) {
      const label = monthFormat.format(new Date(item.date));
      const last = result[result.length - 1];
      if (last && last.label === label) last.items.push(item);
      else result.push({ label, items: [item] });
    }
    return result;
  }, [visible]);

  const loading = Object.values(states).some((state) => state.status === 'loading');
  const canLoadMore = githubHasMore && filter !== 'Codeberg' && states.GitHub.status === 'ok';

  return (
    <div className="activity-stream">
      <div className="activity-sources">
        {(['GitHub', 'Codeberg'] as Source[]).map((source) => {
          const profile = profiles.find((p) => p.source === source);
          const state = states[source];
          return (
            <div className="activity-source" key={source}>
              <div className="activity-source__head">
                <strong>{source}</strong>
                <span className={`activity-status activity-status--${state.status}`}>
                  {state.status === 'loading' ? 'Loading' : state.status === 'ok' ? 'Live' : 'Unavailable'}
                </span>
              </div>
              {profile ? (
                <dl>
                  <div><dt>Public repos</dt><dd>{profile.repos ?? '—'}</dd></div>
                  <div><dt>Followers</dt><dd>{profile.followers ?? '—'}</dd></div>
                  <div><dt>Loaded events</dt><dd>{deduped.filter((item) => item.source === source).length}</dd></div>
                </dl>
              ) : (
                <p className="activity-source__note">{state.status === 'error' ? `Couldn’t load: ${state.message}.` : 'Fetching from the public API…'}</p>
              )}
              <a href={profile?.url ?? (source === 'GitHub' ? `https://github.com/${githubUser}` : `https://codeberg.org/${codebergUser}`)} target="_blank" rel="noopener noreferrer">
                Open profile ↗
              </a>
            </div>
          );
        })}
      </div>

      <div className="activity-toolbar">
        <div className="activity-filter" role="group" aria-label="Filter activity by source">
          {(['All', 'GitHub', 'Codeberg'] as const).map((option) => (
            <button type="button" key={option} aria-pressed={filter === option} onClick={() => setFilter(option)}>
              {option}
            </button>
          ))}
        </div>
        <p aria-live="polite">
          {loading
            ? 'Loading activity…'
            : `${visible.length} events${githubPagesLoaded ? ` · GitHub page ${githubPagesLoaded}${githubHasMore ? '' : ' of ' + githubPagesLoaded}` : ''}`}
        </p>
      </div>

      <div className="activity-timeline">
        {groups.map((group) => (
          <section key={group.label} aria-label={group.label}>
            <h3>{group.label}</h3>
            <ol>
              {group.items.map((item) => {
                const date = new Date(item.date);
                return (
                  <li key={item.id}>
                    <time dateTime={item.date} title={date.toLocaleString()}>{relativeTime(date)}</time>
                    <span className="activity-source-tag">{item.source}</span>
                    <div>
                      <p>
                        {item.action}{' '}
                        <a href={item.repoUrl} target="_blank" rel="noopener noreferrer">{item.repo}</a>
                      </p>
                      {item.detail && <span>{item.detail}</span>}
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>
        ))}
        {!loading && visible.length === 0 && <p className="activity-empty">No public activity to show right now.</p>}
      </div>

      <div className="activity-pager">
        {canLoadMore ? (
          <button type="button" onClick={loadMore} disabled={loadingMore}>
            {loadingMore ? 'Loading…' : 'Load older activity'}
          </button>
        ) : (
          !loading && states.GitHub.status === 'ok' && filter !== 'Codeberg' && <p>You’ve reached the start of the public GitHub history.</p>
        )}
        {moreError && <p role="alert">Couldn’t load more: {moreError}.</p>}
      </div>
    </div>
  );
}
