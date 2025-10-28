import { Suspense } from 'react'
import { fetchUserRepos, getGitHubUsername } from '@/lib/github'
import { RepoCard } from './components/RepoCard'
import { FaGithub } from 'react-icons/fa'
import { Skeleton } from './components/RepoCardSkeleton'

export default async function ReposPage() {
  const username = getGitHubUsername()
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 py-32 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
        
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
              <FaGithub className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent">
              GitHub Repositories
            </h1>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            My open source projects and contributions
          </p>
        </div>

        {/* Repos Grid */}
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
        <p className="text-xl text-slate-500">No repositories found</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {repos.map((repo, index) => (
        <RepoCard key={repo.id} repo={repo} index={index} />
      ))}
    </div>
  )
}

function RepoGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <Skeleton key={i} />
      ))}
    </div>
  )
}


