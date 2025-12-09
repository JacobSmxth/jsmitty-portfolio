'use client'

import { useState } from 'react'
import Link from 'next/link'
import { GitHubRepo, GitHubCommit } from '@/lib/types/github'
import { RepoModal } from './RepoModal'
import { Github, Star, GitFork, ArrowLeft, FileText, GitCommit, BarChart3 } from 'lucide-react'
import { GradientHeading } from '@/components/ui'
import { Button } from '@/components/ui'

interface RepoDetailClientProps {
  repo: GitHubRepo
  readmeContent: string
  commits: GitHubCommit[]
  languages: Record<string, number>
}

export function RepoDetailClient({ repo, readmeContent, commits, languages }: RepoDetailClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<'readme' | 'commits' | 'languages'>('readme')

  const openModal = (tab: 'readme' | 'commits' | 'languages') => {
    setActiveTab(tab)
    setIsModalOpen(true)
    document.body.setAttribute('data-modal-open', 'true')
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.removeAttribute('data-modal-open')
  }

  return (
    <>
      <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/repos"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm sm:text-base">Back to Repositories</span>
          </Link>

          <div className="bg-white rounded-xl p-6 sm:p-8 md:p-10 shadow-lg border border-gray-100">
            <div className="mb-6 sm:mb-8">
              <GradientHeading as="h1" className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                {repo.name}
              </GradientHeading>

              {repo.description && (
                <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-6">
                  {repo.description}
                </p>
              )}

              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
                {repo.language && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    {repo.language}
                  </div>
                )}
                <div className="flex items-center gap-1.5 text-sm sm:text-base text-slate-700">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
                  <span className="font-medium">{repo.stargazers_count}</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm sm:text-base text-slate-700">
                  <GitFork className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                  <span className="font-medium">{repo.forks_count}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-6">
                <Button
                  variant="gradient"
                  icon={FileText}
                  onClick={() => openModal('readme')}
                  className="w-full sm:w-auto justify-center"
                >
                  README
                </Button>
                <Button
                  variant="outline"
                  icon={GitCommit}
                  onClick={() => openModal('commits')}
                  className="w-full sm:w-auto justify-center"
                >
                  Commits
                </Button>
                <Button
                  variant="outline"
                  icon={BarChart3}
                  onClick={() => openModal('languages')}
                  className="w-full sm:w-auto justify-center"
                >
                  Languages
                </Button>
              </div>

              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <RepoModal
          repo={repo}
          readmeContent={readmeContent}
          commits={commits}
          languages={languages}
          activeTab={activeTab}
          onClose={closeModal}
        />
      )}
    </>
  )
}
