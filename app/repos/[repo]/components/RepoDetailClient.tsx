'use client'

import { useState } from 'react'
import Link from 'next/link'
import { AnimatePresence } from 'framer-motion'
import { GitHubRepo, GitHubCommit } from '@/lib/types/github'
import { RepoModal } from './RepoModal'
import { NotFound } from './NotFound'
import { FaGithub, FaCode, FaStar, FaCodeBranch, FaLanguage, FaFileCode, FaGitAlt, FaChartBar } from 'react-icons/fa'

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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
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

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => openModal('readme')}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                    >
                      <FaFileCode />
                      View README
                    </button>
                    <button
                      onClick={() => openModal('commits')}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 rounded-xl font-medium border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
                    >
                      <FaGitAlt />
                      Recent Commits
                    </button>
                    <button
                      onClick={() => openModal('languages')}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 rounded-xl font-medium border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300"
                    >
                      <FaChartBar />
                      Languages & Stats
                    </button>
                  </div>

                  <div className="mt-4">
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      <FaGithub />
                      View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
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
      </AnimatePresence>
    </>
  )
}

