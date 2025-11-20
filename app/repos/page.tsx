import { Suspense } from 'react'
import { fetchUserRepos, getGitHubUsername } from '@/lib/github'
import { RepoCard } from './components/RepoCard'
import { Skeleton } from './components/RepoCardSkeleton'
import { GradientHeading } from '@/components/ui'
import { Github } from 'lucide-react'

export default async function ReposPage() {
  const username = getGitHubUsername()

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
              <Github className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <GradientHeading as="h1" className="text-4xl sm:text-5xl md:text-6xl font-bold">
              Repositories
            </GradientHeading>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-4">
            My open source projects and contributions
          </p>
        </div>

        <Suspense fallback={<RepoGridSkeleton />}>
          <ReposGrid username={username} />
        </Suspense>
      </div>
    </div>
  )
}

async function ReposGrid({ username }: { username: string }) {
  const repos = await fetchUserRepos(username)

  if (repos.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-lg sm:text-xl text-slate-500">No repositories found</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {repos.map((repo, index) => (
        <RepoCard key={repo.id} repo={repo} index={index} />
      ))}
    </div>
  )
}

function RepoGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {[...Array(6)].map((_, i) => (
        <Skeleton key={i} />
      ))}
    </div>
  )
}
