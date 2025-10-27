import { Suspense } from 'react'
import Link from 'next/link'
import { fetchRepoDetails, getGitHubUsername } from '@/lib/github'
import { ReadmeViewer } from '../components/ReadmeViewer'
import { CommitList } from '../components/CommitList'
import { FaGithub, FaCode, FaStar, FaCodeBranch, FaLanguage } from 'react-icons/fa'
import { NotFound } from './components/NotFound'

interface PageProps {
  params: Promise<{ repo: string }>
}

export default async function RepoDetailPage({ params }: PageProps) {
  const { repo: repoName } = await params
  const username = getGitHubUsername()
  const data = await fetchRepoDetails(username, repoName)

  if (!data) {
    return <NotFound repoName={repoName} />
  }

  const { repo, readmeContent, commits } = data

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 py-32 px-6">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto mb-8">
        <Link
          href="/repos"
          className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
        >
          <span className="text-2xl">←</span>
          <span>Back to Repositories</span>
        </Link>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 mb-8">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
                  <FaCode className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
                    {repo.name}
                  </h1>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
              </div>

              {repo.description && (
                <p className="text-xl text-slate-600 mb-6">
                  {repo.description}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-6 mb-6">
                {repo.language && (
                  <div className="flex items-center gap-2 text-slate-700">
                    <FaLanguage className="text-2xl" />
                    <span className="font-medium">{repo.language}</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <span className="font-medium">{repo.stargazers_count}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaCodeBranch className="text-blue-500" />
                  <span className="font-medium">{repo.forks_count}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <FaGithub className="text-xl" />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Content */}
        <TabsContent readmeContent={readmeContent} commits={commits} repoName={repo.name} />
      </div>
    </div>
  )
}

function TabsContent({ 
  readmeContent, 
  commits, 
  repoName 
}: { 
  readmeContent: string
  commits: any[]
  repoName: string
}) {
  return (
    <div className="space-y-6">
      {readmeContent && (
        <section className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <FaCode className="text-blue-500" />
            README
          </h2>
          <ReadmeViewer content={readmeContent} />
        </section>
      )}

      <section className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
          <FaCodeBranch className="text-purple-500" />
          Recent Commits
        </h2>
        <Suspense fallback={<CommitsSkeleton />}>
          <CommitList commits={commits} repoName={repoName} />
        </Suspense>
      </section>
    </div>
  )
}

function CommitsSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="bg-gray-100 rounded-xl p-6 animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  )
}

