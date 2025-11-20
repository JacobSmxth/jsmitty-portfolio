'use client'

import { ReadmeViewer } from '../../components/ReadmeViewer'
import { CommitList } from '../../components/CommitList'
import { GitHubRepo, GitHubCommit } from '@/lib/types/github'
import ModalContainer from '@/components/ModalContainer'
import { ModalHeader } from '@/components/ui'

interface RepoModalProps {
  repo: GitHubRepo
  readmeContent: string
  commits: GitHubCommit[]
  languages: Record<string, number>
  activeTab: 'readme' | 'commits' | 'languages'
  onClose: () => void
}

export function RepoModal({ repo, readmeContent, commits, languages, activeTab, onClose }: RepoModalProps) {
  const totalBytes = Object.values(languages).reduce((sum, bytes) => sum + bytes, 0)
  const languageEntries = Object.entries(languages)
    .map(([lang, bytes]) => ({ lang, bytes, percent: (bytes / totalBytes) * 100 }))
    .sort((a, b) => b.percent - a.percent)

  return (
    <ModalContainer onClose={onClose} maxWidthClassName="max-w-4xl">
      <ModalHeader title={repo.name} onClose={onClose} />

        <div className="mt-6 sm:mt-8">
          {activeTab === 'readme' && (
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">README</h3>
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
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Recent Commits</h3>
              <CommitList commits={commits} />
            </div>
          )}

          {activeTab === 'languages' && (
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 sm:mb-6">Languages & Stats</h3>
              {languageEntries.length > 0 ? (
                <div className="space-y-4 sm:space-y-6">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 sm:p-6 border border-blue-100">
                    <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-3 sm:mb-4">Languages</h4>
                    <div className="space-y-2.5 sm:space-y-3">
                      {languageEntries.map(({ lang, percent }) => (
                        <div key={lang}>
                          <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                            <span className="text-sm sm:text-base font-medium text-slate-900">{lang}</span>
                            <span className="text-xs sm:text-sm font-semibold text-slate-600">{percent.toFixed(1)}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500"
                              style={{ width: `${percent}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 sm:gap-4">
                    <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">{languageEntries.length}</div>
                      <div className="text-xs sm:text-sm text-slate-600">Languages</div>
                    </div>
                    <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">{totalBytes.toLocaleString()}</div>
                      <div className="text-xs sm:text-sm text-slate-600">Bytes</div>
                    </div>
                    <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 text-center">
                      <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 sm:mb-2">{repo.stargazers_count}</div>
                      <div className="text-xs sm:text-sm text-slate-600">Stars</div>
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
    </ModalContainer>
  )
}
