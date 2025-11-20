'use client'

import { useState } from 'react'
import { GitHubCommit } from '@/lib/types/github'
import { GitBranch, User, Calendar, ChevronLeft, ChevronRight } from 'lucide-react'

interface CommitListProps {
  commits: GitHubCommit[]
}

const COMMITS_PER_PAGE = 10

export function CommitList({ commits }: CommitListProps) {
  const [currentPage, setCurrentPage] = useState(1)

  if (commits.length === 0) {
    return (
      <div className="text-center py-10 text-slate-500">
        <p>No commits available</p>
      </div>
    )
  }

  const totalPages = Math.ceil(commits.length / COMMITS_PER_PAGE)
  const startIndex = (currentPage - 1) * COMMITS_PER_PAGE
  const endIndex = startIndex + COMMITS_PER_PAGE
  const currentCommits = commits.slice(startIndex, endIndex)

  return (
    <div>
      <div className="space-y-3 sm:space-y-4 mb-6">
        {currentCommits.map((commit) => {
          const commitDate = new Date(commit.commit.author.date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })

          return (
            <a
              key={commit.sha}
              href={commit.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 group"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                  <User className="text-white w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm sm:text-base text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 sm:line-clamp-1">
                    {commit.commit.message.split('\n')[0]}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 text-xs sm:text-sm text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <User className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span className="truncate max-w-[150px] sm:max-w-none">{commit.commit.author.name}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span className="text-xs sm:text-sm">{commitDate}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <GitBranch className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      <span className="font-mono text-xs">{commit.sha.substring(0, 7)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          )
        })}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-between gap-2 px-1 sm:px-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-white border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 disabled:hover:bg-white disabled:hover:border-gray-200 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Previous</span>
            <span className="sm:hidden">Prev</span>
          </button>

          <span className="text-xs sm:text-sm text-slate-600 whitespace-nowrap">
            {currentPage} / {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-lg sm:rounded-xl text-sm sm:text-base font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-white border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 disabled:hover:bg-white disabled:hover:border-gray-200 cursor-pointer"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  )
}
