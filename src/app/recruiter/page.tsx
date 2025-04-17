'use client';

import Link from 'next/link';
import { ArrowLeft, Briefcase, CheckCircle2, MessageCircle, User, GraduationCap, Github, Linkedin } from 'lucide-react';
import projectData from '@/data/projectData';
import testimonials from '@/data/testimonials';
import { workExperience } from '@/data/workExperience';
import { education } from '@/data/education';

/**
 * Recruiter Page Component (/recruiter)
 * 
 * Provides a dedicated view for recruiters, highlighting relevant professional 
 * information such as work experience, education, key projects (with code links), 
 * testimonials, and direct links to resume/LinkedIn.
 */

export default function RecruiterPage() {
  // Define IDs of projects to exclude
  const excludedProjectIds = ['7', '8', '1']; // IDs for Fr0st.gg, FuhrerGoatTV, Kayla Fitness

  // Filter projects to show only those with GitHub links AND exclude specific ones
  const projectsWithCode = projectData.filter(project => 
    project.github && 
    !excludedProjectIds.includes(project.id)
  );

  return (
    <main className="text-white p-4 sm:p-6 md:p-8 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <Link 
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-red-500 transition-colors duration-300 text-lg sm:text-xl cursor-pointer"
          >
            <ArrowLeft className="mr-2" />
            Back to Selection
          </Link>

          <Link 
            href="/about?from=recruiter"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 bg-gray-800/50 text-red-400 rounded-xl hover:bg-red-500/10 transition-all duration-300 text-base sm:text-lg font-medium cursor-pointer"
          >
            <User size={20} />
            About Me
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Hero and Work Experience */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <section className="space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
                Jacob Smith
              </h1>
              <div className="space-y-4">
                <p className="text-xl font-medium text-red-400 mb-2">
                  Front End Web Developer 
                </p>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                  A results-oriented developer with a strong foundation in modern web technologies and cybersecurity principles, currently enhancing skills at the University of North Georgia (3.4 GPA).
                </p>
              </div>
            </section>

            {/* Work Experience */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <Briefcase className="text-red-500" size={28} />
                <h2 className="text-3xl sm:text-4xl font-bold text-white">Work Experience</h2>
              </div>
              <div className="space-y-6">
                {workExperience.map((job) => (
                  <div key={job.id} className="bg-gray-800/50 p-6 rounded-xl space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h3 className="text-2xl font-semibold text-red-400">{job.title}</h3>
                        <p className="text-gray-400">{job.company}</p>
                      </div>
                      <p className="text-gray-400">{job.period}</p>
                    </div>
                    <ul className="space-y-3">
                      {job.description.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="text-red-500 mt-1" size={20} />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <GraduationCap className="text-red-500" size={28} />
                <h2 className="text-3xl sm:text-4xl font-bold text-white">Education</h2>
              </div>
              <div className="space-y-6">
                {education.map((school, index) => (
                  <div key={index} className="bg-gray-800/50 p-6 rounded-xl space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h3 className="text-2xl font-semibold text-red-400">{school.school}</h3>
                        {school.degree && school.field && (
                          <p className="text-gray-400">
                            {school.degree} in {school.field}
                          </p>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="text-gray-400">{school.duration}</p>
                        <p className="text-gray-400">GPA: {school.gpa}</p>
                      </div>
                    </div>
                    
                    {school.focus && (
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-gray-300">Focus Areas:</h4>
                        <div className="flex flex-wrap gap-2">
                          {school.focus.map((area, i) => (
                            <span key={i} className="px-3 py-1 bg-red-500/10 text-red-400 rounded-full text-sm">
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {school.relevantCoursework && (
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-gray-300">Relevant Coursework:</h4>
                        <ul className="space-y-2">
                          {school.relevantCoursework.map((course, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="text-red-500 mt-1" size={20} />
                              <span className="text-gray-300">{course}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {school.achievements && (
                      <div className="space-y-2">
                        <h4 className="text-lg font-semibold text-gray-300">Achievements:</h4>
                        <ul className="space-y-2">
                          {school.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="text-red-500 mt-1" size={20} />
                              <span className="text-gray-300">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column - Projects */}
          <div className="lg:col-span-1 space-y-8">
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <Briefcase className="text-red-500" size={28} />
                <h2 className="text-3xl sm:text-4xl font-bold text-white">Projects</h2>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {projectsWithCode.map((project) => (
                  <div key={project.id} className="bg-gray-800/50 p-6 rounded-xl space-y-4">
                    <h3 className="text-2xl font-semibold text-red-400">{project.name}</h3>
                    <p className="text-gray-300">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-red-500/10 text-red-400 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {project.github && (
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors duration-300"
                        >
                          <Github size={20} />
                          View Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors duration-300"
                        >
                          View Live →
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Testimonials and CTA - Full Width */}
        <div className="mt-12 space-y-12">
          {/* Testimonials */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <MessageCircle className="text-red-500" size={28} />
              <h2 className="text-3xl sm:text-4xl font-bold text-white">Testimonials</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="bg-gray-800/50 p-6 rounded-xl space-y-4 border border-gray-700"
                >
                  <p className="text-gray-300 italic">{testimonial.text}</p>
                  <div className="flex flex-col">
                    <span className="text-red-400 font-semibold">{testimonial.author}</span>
                    <span className="text-gray-500">{testimonial.position}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA - Updated */}
          <section className="text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Interested in My Profile?</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
              View my full resume for more details or connect with me on LinkedIn.
            </p>
            <div className="flex justify-center items-center gap-4 flex-wrap">
              {/* Updated Resume Link */}
              <a 
                href="/jacobSmith-frontEndDeveloper-2yearsExperience-cybersecurityMajor.pdf" // Correct path
                className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300 text-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
              {/* LinkedIn Button */}
              <a 
                href="https://www.linkedin.com/in/jacobsmxth/" // Make sure this matches socialLinks data
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700/50 text-gray-300 rounded-xl hover:bg-gray-600/50 hover:text-white transition-colors duration-300 text-lg font-semibold"
                title="Connect on LinkedIn"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 