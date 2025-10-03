'use client'

import { motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import { useEffect } from 'react'

interface ProjectModalProps {
  project: any
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl p-10 max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl modal-scrollbar will-change-transform"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-3 hover:bg-gray-100 rounded-full transition-all hover:rotate-90 cursor-pointer"
        >
          <FaTimes size={24} className="text-slate-700" />
        </button>

        <h2 className="text-4xl font-bold text-slate-900 mb-3 pr-16">
          {project.name}
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"></div>

        <div className="flex gap-4 mb-6">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold hover:gap-3 transition-all"
            >
              Visit Site →
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-800 font-semibold hover:gap-3 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub →
            </a>
          )}
        </div>

        <div className="mb-8">
          <h3 className="font-bold text-slate-900 mb-4 text-lg">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech: string) => (
              <span
                key={tech}
                className="px-4 py-2 bg-blue-50 text-blue-700 rounded-xl text-sm font-semibold border border-blue-100"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.aiUsage && (
          <div className="mb-8 p-6 bg-slate-50 rounded-2xl">
            <h3 className="font-bold text-slate-900 mb-3 text-lg">AI Usage</h3>
            <span className={`inline-block px-4 py-2 rounded-xl text-sm font-bold border ${
              project.aiUsage === 'None' 
                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                : project.aiUsage === 'Low'
                ? 'bg-blue-50 text-blue-700 border-blue-200'
                : project.aiUsage === 'Medium'
                ? 'bg-amber-50 text-amber-700 border-amber-200'
                : 'bg-rose-50 text-rose-700 border-rose-200'
            }`}>
              {project.aiUsage}
            </span>
            {project.aiDetails && (
              <p className="text-slate-600 mt-4 leading-relaxed">{project.aiDetails}</p>
            )}
          </div>
        )}

        <div className="mb-8">
          <h3 className="font-bold text-slate-900 mb-4 text-lg">Description</h3>
          <p className="text-slate-600 whitespace-pre-line leading-relaxed">
            {project.description}
          </p>
        </div>

        {project.learnings && project.learnings.length > 0 && (
          <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
            <h3 className="font-bold text-slate-900 mb-4 text-lg">Key Learnings</h3>
            <ul className="space-y-3">
              {project.learnings.map((learning: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  <span className="text-slate-700 leading-relaxed">{learning}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}
