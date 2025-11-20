'use client'

import ModalContainer from './ModalContainer'
import { ModalHeader } from '@/components/ui'
import { Experience } from '@/data/experiences'

interface ExperienceModalProps {
  experience: Experience
  onClose: () => void
}

export default function ExperienceModal({ experience, onClose }: ExperienceModalProps) {
  return (
    <ModalContainer onClose={onClose}>
      <ModalHeader title={experience.title} onClose={onClose} />

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
          <div className="mb-8 p-6 bg-slate-50 rounded-md">
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
        <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-md">
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
    </ModalContainer>
  )
}
