'use client'

import { motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import { useEffect } from 'react'

interface ExperienceModalProps {
  experience: any
  onClose: () => void
}

export default function ExperienceModal({ experience, onClose }: ExperienceModalProps) {
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
      className="fixed inset-0 bg-black/60 z-[9999] flex items-center justify-center p-4"
      style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
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
          {experience.title}
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"></div>

        <p className="text-blue-600 font-semibold text-xl mb-2">
          {experience.company}
        </p>

        <p className="text-slate-500 font-semibold mb-8 bg-slate-50 inline-block px-4 py-2 rounded-xl">
          {experience.period}
        </p>

        <div className="mb-8">
          <h3 className="font-bold text-slate-900 mb-4 text-lg">Details</h3>
          <p className="text-slate-600 whitespace-pre-line leading-relaxed">
            {experience.description}
          </p>
        </div>

        {experience.responsibilities && experience.responsibilities.length > 0 && (
          <div className="mb-8 p-6 bg-slate-50 rounded-2xl">
            <h3 className="font-bold text-slate-900 mb-4 text-lg">Responsibilities</h3>
            <ul className="space-y-3">
              {experience.responsibilities.map((resp: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">•</span>
                  <span className="text-slate-700 leading-relaxed">{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {experience.learnings && experience.learnings.length > 0 && (
          <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl">
            <h3 className="font-bold text-slate-900 mb-4 text-lg">What I Learned</h3>
            <ul className="space-y-3">
              {experience.learnings.map((learning: string, index: number) => (
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
