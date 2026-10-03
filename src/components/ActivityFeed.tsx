import { useEffect, useMemo, useState } from 'react';

type Source = 'GitHub' | 'Codeberg';

export type ActivityItem = {
  id: string;
  source: Source;
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

type FeedProps = {
  githubUser: string;
  codebergUser: string;
  limit?: number;
};

const CACHE_TTL_MS = 10 * 60 * 1000;

async function cachedJson<T>(url: string): Promise<T> {
  const key = `activity-cache:${url}`;
  try {
    const raw = sessionStorage.getItem(key);
    if (raw) {
      const cached = JSON.parse(raw) as { at: number; data: T };
      if (Date.now() - cached.at < CACHE_TTL_MS) return cached.data;
    }
  } catch {
    // Storage can be unavailable in private windows; fall through to the network.
  }

  const response = await fetch(url, { headers: { Accept: 'application/json' } });
  if (!response.ok) {
    if (response.status === 403 || response.status === 429) throw new Error('rate limited, try again later');
    throw new Error(`request failed (${response.status})`);
  }
  const data = (await response.json()) as T;
  try {
    sessionStorage.setItem(key, JSON.stringify({ at: Date.now(), data }));
  } catch {
    // Ignore quota or availability errors.
  }
  return data;
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

async function loadGitHub(user: string): Promise<{ items: ActivityItem[]; profile: Profile }> {
  const [profile, events, repos] = await Promise.all([
    cachedJson<GitHubUser>(`https://api.github.com/users/${user}`),
    cachedJson<GitHubEvent[]>(`https://api.github.com/users/${user}/events/public?per_page=50`),
    cachedJson<GitHubRepo[]>(`https://api.github.com/users/${user}/repos?sort=pushed&per_page=20`),
  ]);

  const items: ActivityItem[] = [];
  for (const event of events) {
    const described = describeGitHubEvent(event);
    if (!described) continue;
    items.push({
      id: `gh-event-${event.id}`,
      source: 'GitHub',
      date: event.created_at,
      repo: event.repo.name.split('/').pop() ?? event.repo.name,
      repoUrl: `https://github.com/${event.repo.name}`,
      ...described,
    });
  }

  // The public events API only covers ~90 days, so fill in with recently pushed repos.
  const seen = new Set(items.map((item) => `${item.repo.toLowerCase()}|${item.date.slice(0, 10)}`));
  for (const repo of repos) {
    if (repo.fork) continue;
    if (seen.has(`${repo.name.toLowerCase()}|${repo.pushed_at.slice(0, 10)}`)) continue;
    items.push({
      id: `gh-repo-${repo.full_name}`,
      source: 'GitHub',
      date: repo.pushed_at,
      action: 'Updated repository',
      repo: repo.name,
      repoUrl: repo.html_url,
      detail: [repo.language, repo.description].filter(Boolean).join(' · ') || undefined,
    });
  }

  return { items, profile: { source: 'GitHub', url: profile.html_url, repos: profile.public_repos, followers: profile.followers } };
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

export default function ActivityFeed({ githubUser, codebergUser, limit = 40 }: FeedProps) {
  const [items, setItems] = useState<ActivityItem[]>([]);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [states, setStates] = useState<Record<Source, SourceState>>({
    GitHub: { status: 'loading' },
    Codeberg: { status: 'loading' },
  });
  const [filter, setFilter] = useState<'All' | Source>('All');

  useEffect(() => {
    let cancelled = false;
    const loaders: [Source, Promise<{ items: ActivityItem[]; profile: Profile }>][] = [
      ['GitHub', loadGitHub(githubUser)],
      ['Codeberg', loadCodeberg(codebergUser)],
    ];

    for (const [source, promise] of loaders) {
      promise
        .then((result) => {
          if (cancelled) return;
          setItems((current) => [...current.filter((item) => item.source !== source), ...result.items]);
          setProfiles((current) => [...current.filter((profile) => profile.source !== source), result.profile]);
          setStates((current) => ({ ...current, [source]: { status: 'ok' } }));
        })
        .catch((error: unknown) => {
          if (cancelled) return;
          const message = error instanceof Error ? error.message : 'unavailable';
          setStates((current) => ({ ...current, [source]: { status: 'error', message } }));
        });
    }

    return () => {
      cancelled = true;
    };
  }, [githubUser, codebergUser]);

  const visible = useMemo(
    () =>
      items
        .filter((item) => filter === 'All' || item.source === filter)
        .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
        .slice(0, limit),
    [items, filter, limit]
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
  const sortedProfiles = [...profiles].sort((a, b) => a.source.localeCompare(b.source));

  return (
    <div className="activity-stream">
      <div className="activity-sources">
        {(['GitHub', 'Codeberg'] as Source[]).map((source) => {
          const profile = sortedProfiles.find((p) => p.source === source);
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
                  <div><dt>Recent events</dt><dd>{items.filter((item) => item.source === source).length}</dd></div>
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
        <p aria-live="polite">{loading ? 'Loading activity…' : `${visible.length} most recent events`}</p>
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
    </div>
  );
}
