'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { GitHubRepo } from '@/lib/types/github'
import { Star, GitFork, Calendar } from 'lucide-react'
import { Card } from '@/components/ui'

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
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.3) }}
    >
      <Link href={`/repos/${repo.name}`} className="block h-full">
        <Card variant="hover" className="h-full flex flex-col">
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
              {repo.name}
            </h3>

            <p className="text-sm sm:text-base text-slate-600 mb-4 line-clamp-3">
              {repo.description || 'No description available'}
            </p>

            {repo.language && (
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-4">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                {repo.language}
              </div>
            )}
          </div>

          <div className="pt-4 border-t border-slate-100 space-y-3">
            <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="font-medium">{repo.stargazers_count}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <GitFork className="w-4 h-4 text-blue-500" />
                <span className="font-medium">{repo.forks_count}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Calendar className="w-3.5 h-3.5" />
              <span>Updated {updatedDate}</span>
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}
