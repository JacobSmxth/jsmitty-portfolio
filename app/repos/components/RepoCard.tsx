'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { GitHubRepo } from '@/lib/types/github'
import { FaCode, FaStar, FaCodeBranch, FaCalendar, FaLanguage } from 'react-icons/fa'

interface RepoCardProps {
  repo: GitHubRepo
  index: number
}

export function RepoCard({ repo, index }: RepoCardProps) {
  const updatedDate = new Date(repo.updated_at).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.3) }}
    >
      <Link
        href={`/repos/${repo.name}`}
        className="group block h-full"
      >
        <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <FaCode className="text-blue-500 text-xl" />
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {repo.name}
                </h3>
              </div>
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-600 mb-6 leading-relaxed flex-1">
            {repo.description || 'No description available'}
          </p>

          {/* Tech Stack / Language */}
          {repo.language && (
            <div className="mb-4 flex items-center gap-2 text-slate-700">
              <FaLanguage className="text-lg" />
              <span className="text-sm font-medium">{repo.language}</span>
            </div>
          )}

          {/* Stats */}
          <div className="flex items-center gap-4 mb-4 text-sm text-slate-600">
            <div className="flex items-center gap-1">
              <FaStar className="text-yellow-500" />
              <span className="font-medium">{repo.stargazers_count}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaCodeBranch className="text-blue-500" />
              <span className="font-medium">{repo.forks_count}</span>
            </div>
          </div>

          {/* Updated Date */}
          <div className="flex items-center gap-2 text-xs text-slate-400 pt-4 border-t border-gray-100">
            <FaCalendar />
            <span>Updated {updatedDate}</span>
          </div>

          {/* Hover CTA */}
          <div className="mt-4 pt-4 border-t border-gray-100 text-center">
            <span className="text-sm text-slate-400 group-hover:text-blue-500 transition-colors">
              View details →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

