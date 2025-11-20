import { fetchRepoDetails, getGitHubUsername } from '@/lib/github'
import { NotFound } from './components/NotFound'
import { RepoDetailClient } from './components/RepoDetailClient'

interface PageProps {
  params: Promise<{ repo: string }>
}

export default async function RepoDetailPage({ params }: PageProps) {
  const { repo: repoName } = await params
  const decodedRepoName = decodeURIComponent(repoName)
  const username = getGitHubUsername()
  const data = await fetchRepoDetails(username, decodedRepoName)

  if (!data) {
    return <NotFound repoName={decodedRepoName} />
  }

  const { repo, readmeContent, commits, languages } = data

  return (
    <RepoDetailClient
      repo={repo}
      readmeContent={readmeContent}
      commits={commits}
      languages={languages}
    />
  )
}
