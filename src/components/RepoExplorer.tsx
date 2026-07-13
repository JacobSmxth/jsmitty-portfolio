import { useMemo, useState } from 'react';

export type Repo = {
  name: string;
  description: string;
  language: string;
  source: 'GitHub' | 'Codeberg';
  url: string;
  featured?: boolean;
};

export default function RepoExplorer({ repos }: { repos: readonly Repo[] }) {
  const [query, setQuery] = useState('');
  const [language, setLanguage] = useState('All');
  const [source, setSource] = useState('All');

  const languages = useMemo(
    () => ['All', ...Array.from(new Set(repos.map((repo) => repo.language))).sort()],
    [repos]
  );

  const visibleRepos = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return repos.filter((repo) =>
      (language === 'All' || repo.language === language) &&
      (source === 'All' || repo.source === source) &&
      (!normalized || `${repo.name} ${repo.description} ${repo.language}`.toLowerCase().includes(normalized))
    );
  }, [language, query, repos, source]);

  return (
    <div className="repo-explorer">
      <div className="repo-controls" aria-label="Repository filters">
        <label className="repo-search">
          <span className="sr-only">Search repositories</span>
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search repositories…" />
        </label>
        <label>
          <span className="sr-only">Filter by language</span>
          <select value={language} onChange={(event) => setLanguage(event.target.value)}>
            {languages.map((item) => <option key={item}>{item}</option>)}
          </select>
        </label>
        <label>
          <span className="sr-only">Filter by source</span>
          <select value={source} onChange={(event) => setSource(event.target.value)}>
            <option>All</option><option>GitHub</option><option>Codeberg</option>
          </select>
        </label>
      </div>
      <div className="repo-table" role="region" aria-live="polite" aria-label={`${visibleRepos.length} repositories shown`}>
        <div className="repo-row repo-row--head" aria-hidden="true">
          <span>Repository</span><span>Language</span><span>Description</span><span>Source</span>
        </div>
        {visibleRepos.map((repo) => (
          <a className="repo-row" href={repo.url} target="_blank" rel="noopener noreferrer" key={`${repo.source}-${repo.name}`}>
            <strong>{repo.featured ? '★ ' : ''}{repo.name}</strong>
            <span>{repo.language}</span>
            <span>{repo.description}</span>
            <span>{repo.source} ↗</span>
          </a>
        ))}
        {visibleRepos.length === 0 && <p className="repo-empty">No repositories match those filters.</p>}
      </div>
      <p className="repo-count">Showing {visibleRepos.length} of {repos.length} selected public repositories across GitHub and Codeberg.</p>
    </div>
  );
}
