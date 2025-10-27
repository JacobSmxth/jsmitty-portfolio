'use client'

import { useState } from 'react'
import { GitHubCommit } from '@/lib/types/github'
import { FaCodeBranch, FaUser, FaCalendar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface CommitListProps {
  commits: GitHubCommit[]
  repoName: string
}

const COMMITS_PER_PAGE = 10

export function CommitList({ commits, repoName }: CommitListProps) {
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
      <div className="space-y-4 mb-6">
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
            className="block bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 group"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <FaUser className="text-white text-sm" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                  {commit.commit.message.split('\n')[0]}
                </p>
                <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <FaUser className="text-xs" />
                    <span>{commit.commit.author.name}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaCalendar className="text-xs" />
                    <span>{commitDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaCodeBranch className="text-xs" />
                    <span className="font-mono text-xs">{commit.sha.substring(0, 7)}</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        )
      })}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between px-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
            className="flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-white border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 disabled:hover:bg-white disabled:hover:border-gray-200"
          >
            <FaChevronLeft />
            Previous
          </button>

          <span className="text-sm text-slate-600">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
            className="flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-white border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 disabled:hover:bg-white disabled:hover:border-gray-200"
          >
            Next
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  )
}

