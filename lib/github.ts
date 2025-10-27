import { GitHubRepo, GitHubCommit, RepoDetailsData } from './types/github'

/**
 * Fetch all public repositories for a user
 * Uses ISR (Incremental Static Regeneration) with 1 hour revalidation
 */
export async function fetchUserRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?type=public&sort=updated&per_page=100`,
      { 
        next: { revalidate: 3600 }, // ISR: cache for 1 hour
        headers: {
          'Accept': 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28',
        }
      }
    )
    
    if (!res.ok) {
      throw new Error(`Failed to fetch repos: ${res.statusText}`)
    }
    
    const repos: GitHubRepo[] = await res.json()
    
    // Filter out forks and archived repos
    return repos.filter(repo => !repo.archived && !repo.fork)
  } catch (error) {
    console.error('Error fetching repos:', error)
    return []
  }
}

/**
 * Fetch detailed information about a specific repository
 * Includes: repo details, README content, and recent commits
 */
export async function fetchRepoDetails(
  username: string, 
  repoName: string
): Promise<RepoDetailsData | null> {
  try {
    const responses: Response[] = await Promise.all([
      fetch(
        `https://api.github.com/repos/${username}/${repoName}`,
        { 
          next: { revalidate: 3600 },
          headers: {
            'Accept': 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2022-11-28',
          }
        }
      ),
      fetch(
        `https://api.github.com/repos/${username}/${repoName}/readme`,
        { 
          next: { revalidate: 3600 },
          headers: {
            'Accept': 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2022-11-28',
          }
        }
      ),
      fetch(
        `https://api.github.com/repos/${username}/${repoName}/commits?per_page=20`,
        { 
          next: { revalidate: 3600 },
          headers: {
            'Accept': 'application/vnd.github+json',
            'X-GitHub-Api-Version': '2022-11-28',
          }
        }
      )
    ])
    
    const repoRes = responses[0]
    const readmeRes = responses[1]
    const commitsRes = responses[2]
    
    if (!repoRes.ok) {
      throw new Error(`Failed to fetch repo details: ${repoRes.statusText}`)
    }
    
    const repoData = await repoRes.json()
    
    let readmeContent = ''
    if (readmeRes.ok) {
      const readme = await readmeRes.json()
      readmeContent = Buffer.from(readme.content, 'base64').toString()
    }
    
    let commits: GitHubCommit[] = []
    if (commitsRes.ok) {
      commits = await commitsRes.json()
    }
    
    return {
      repo: repoData,
      readmeContent,
      commits
    }
  } catch (error) {
    console.error('Error fetching repo details:', error)
    return null
  }
}

/**
 * Get the GitHub username from environment or default
 */
export function getGitHubUsername(): string {
  return process.env.GITHUB_USERNAME || 'jacobsmxth'
}

