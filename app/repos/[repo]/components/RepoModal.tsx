'use client'

import { motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import { useEffect } from 'react'
import { ReadmeViewer } from '../../components/ReadmeViewer'
import { CommitList } from '../../components/CommitList'
import { GitHubRepo, GitHubCommit } from '@/lib/types/github'

interface RepoModalProps {
  repo: GitHubRepo
  readmeContent: string
  commits: GitHubCommit[]
  languages: Record<string, number>
  activeTab: 'readme' | 'commits' | 'languages'
  onClose: () => void
}

export function RepoModal({ repo, readmeContent, commits, languages, activeTab, onClose }: RepoModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const totalBytes = Object.values(languages).reduce((sum, bytes) => sum + bytes, 0)
  const languageEntries = Object.entries(languages)
    .map(([lang, bytes]) => ({ lang, bytes, percent: (bytes / totalBytes) * 100 }))
    .sort((a, b) => b.percent - a.percent)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/60 z-[9999] flex items-center justify-center p-4 overflow-y-auto"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg p-10 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl modal-scrollbar"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-3 hover:bg-gray-100 rounded-full transition-all hover:rotate-90 cursor-pointer z-10"
        >
          <FaTimes size={24} className="text-slate-700" />
        </button>

        <h2 className="text-4xl font-bold text-slate-900 mb-3 pr-16">
          {repo.name}
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"></div>

        {/* Tab Content */}
        <div className="mt-8">
          {activeTab === 'readme' && (
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">README</h3>
              {readmeContent ? (
                <ReadmeViewer content={readmeContent} />
              ) : (
                <div className="text-center py-10 text-slate-500">
                  <p>No README available</p>
                </div>
              )}
            </div>
          )}

          {activeTab === 'commits' && (
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Recent Commits</h3>
              <CommitList commits={commits} repoName={repo.name} />
            </div>
          )}

          {activeTab === 'languages' && (
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Languages & Code Statistics</h3>
              {languageEntries.length > 0 ? (
                <div className="space-y-6">
                  {/* Language Breakdown */}
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-md p-6 border border-blue-100">
                    <h4 className="text-lg font-bold text-slate-900 mb-4">Language Breakdown</h4>
                    <div className="space-y-3">
                      {languageEntries.map(({ lang, percent }) => (
                        <div key={lang}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-slate-900">{lang}</span>
                            <span className="text-sm font-semibold text-slate-600">{percent.toFixed(1)}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500"
                              style={{ width: `${percent}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Total Lines */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{languageEntries.length}</div>
                      <div className="text-sm text-slate-600">Languages</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">{totalBytes.toLocaleString()}</div>
                      <div className="text-sm text-slate-600">Lines of Code</div>
                    </div>
                    <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                      <div className="text-3xl font-bold text-slate-900 mb-2">{repo.stargazers_count}</div>
                      <div className="text-sm text-slate-600">Stars</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-10 text-slate-500">
                  <p>No language data available</p>
                </div>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

