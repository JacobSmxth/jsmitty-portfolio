'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectModal from '@/components/ProjectModal'
import { featuredProjects, archivedProjects } from '@/data/projects'
import { FaExternalLinkAlt, FaArchive } from 'react-icons/fa'
import { Rocket } from 'lucide-react'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null)

  useEffect(() => {
    if (selectedProject) {
      document.body.setAttribute('data-modal-open', 'true')
    } else {
      document.body.removeAttribute('data-modal-open')
    }
  }, [selectedProject])

  const getApproachBadgeColor = (approach: string) => {
    switch (approach) {
      case 'From Scratch': return 'bg-emerald-100 text-emerald-700 border-emerald-200'
      case 'Documentation-First': return 'bg-blue-100 text-blue-700 border-blue-200'
      case 'Rapid Prototyped': return 'bg-purple-100 text-purple-700 border-purple-200'
      default: return 'bg-gray-100 text-gray-700 border-gray-200'
    }
  }

  const ProjectCard = ({ project, index }: { project: any, index: number }) => (
    <motion.div
      key={project.name}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.3) }}
      onClick={() => setSelectedProject(project)}
      className="group cursor-pointer"
    >
      <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200 h-full flex flex-col">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
              {project.name}
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
          </div>
          <FaExternalLinkAlt className="text-slate-400 group-hover:text-blue-500 transition-colors" />
        </div>

        {project.developmentApproach && (
          <div className="mb-4 flex flex-wrap gap-2 items-center">
            <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded text-xs font-bold border ${getApproachBadgeColor(project.developmentApproach)}`}>
              {project.developmentApproach}
            </span>
            {project.inProgress && (
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                🚧 Currently Building
              </span>
            )}
            {project.technicalDepth?.testCoverage && project.technicalDepth.testCoverage >= 70 && (
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                ✓ {project.technicalDepth.testCoverage}% tested
              </span>
            )}
            {project.technicalDepth?.performanceMetrics?.responseTime && project.technicalDepth.performanceMetrics.responseTime < 50 && (
              <span className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                ⚡ {project.technicalDepth.performanceMetrics.responseTime}ms
              </span>
            )}
          </div>
        )}

        <p className="text-slate-600 mb-6 leading-relaxed flex-1">
          {project.summary}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded text-sm font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 rounded text-sm font-medium border border-blue-100">
              +{project.techStack.length - 4} more
            </span>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100 text-center">
          <span className="text-sm text-slate-400 group-hover:text-blue-500 transition-colors">
            Click to learn more →
          </span>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="projects" className="py-32 px-6 relative overflow-hidden bg-white shadow-2xl">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl"></div>
        
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        <svg className="absolute top-20 right-10 w-64 h-64 opacity-5 pointer-events-none" viewBox="0 0 200 200" aria-hidden="true">
          <path d="M10 80 Q 52.5 10, 95 80 T 180 80" stroke="#3b82f6" strokeWidth="2" fill="none"/>
          <circle cx="95" cy="40" r="30" stroke="#8b5cf6" strokeWidth="2" fill="none"/>
          <path d="M40 120 L 160 120 L 100 180 Z" stroke="#3b82f6" strokeWidth="2" fill="none"/>
        </svg>

        <svg className="absolute bottom-20 left-10 w-48 h-48 opacity-5 pointer-events-none" viewBox="0 0 200 200" aria-hidden="true">
          <rect x="20" y="20" width="160" height="160" stroke="#8b5cf6" strokeWidth="2" fill="none" rx="20"/>
          <circle cx="100" cy="100" r="60" stroke="#3b82f6" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Highlighting my best work in backend development, security, and full-stack applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-32">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <FaArchive className="text-slate-500 text-3xl" />
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-slate-600 to-slate-500 bg-clip-text text-transparent">
                Archived Projects
              </span>
            </h2>
          </div>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto">
            Some projects that contributed to my learning journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {archivedProjects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}