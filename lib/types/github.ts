export interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
  created_at: string
  pushed_at: string
  private: boolean
  archived: boolean
  fork: boolean
  topics: string[]
  default_branch: string
}

export interface GitHubCommit {
  sha: string
  commit: {
    message: string
    author: {
      name: string
      email: string
      date: string
    }
  }
  author: {
    login: string
    avatar_url: string
  }
  html_url: string
}

export interface RepoDetailsData {
  repo: GitHubRepo
  readmeContent: string
  commits: GitHubCommit[]
  languages: Record<string, number>
}


