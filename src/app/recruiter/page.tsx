'use client';

import Link from 'next/link';
import { ArrowLeft, Briefcase, CheckCircle2, MessageCircle, User } from 'lucide-react';
import projectData from '@/data/projectData';
import testimonials from '@/data/testimonials';
import Footer from '@/components/Footer';

export default function RecruiterPage() {
  // Filter projects for recruiters - only show specific projects
  const recruiterProjects = projectData.filter(project => 
    project.name === "Fr0st.gg" || 
    project.name === "Kayla Fitness" ||
    project.name === "Vickery Burger Bar" ||
    project.name === "Portfolio"
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <main className="text-white p-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <Link 
              href="/"
              className="inline-flex items-center text-gray-400 hover:text-red-500 transition-colors duration-300 text-xl cursor-pointer"
            >
              <ArrowLeft className="mr-2" />
              Back to Selection
            </Link>

            <Link 
              href="/about?from=recruiter"
              className="inline-flex items-center gap-2 px-6 py-2 bg-gray-800/50 text-red-400 rounded-xl hover:bg-red-500/10 transition-all duration-300 text-lg font-medium cursor-pointer"
            >
              <User size={20} />
              About Me
            </Link>
          </div>

          <div className="space-y-16">
            {/* Hero Section */}
            <section className="space-y-8">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
                Jacob Smith
              </h1>
              <div className="space-y-4">
                <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                I&apos;m a web developer studying Cybersecurity at the University of North Georgia with a 3.4 GPA, working on real-world projects to build secure applications.
                </p>
              </div>
            </section>

            {/* Work Experience */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <Briefcase className="text-red-500" size={28} />
                <h2 className="text-4xl font-bold text-white">Work Experience</h2>
              </div>
              <div className="grid grid-cols-1 gap-6 mt-6">
                <div className="bg-gray-800/50 p-6 rounded-xl space-y-4">
                  <h3 className="text-2xl font-semibold text-red-400">Freelance Web Developer</h3>
                  <p className="text-gray-400">2022 - Present</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-red-500 mt-1" size={20} />
                      <span className="text-gray-300">Developed and maintained client websites using modern web technologies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-red-500 mt-1" size={20} />
                      <span className="text-gray-300">Implemented responsive designs and optimized performance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-red-500 mt-1" size={20} />
                      <span className="text-gray-300">Collaborated with clients to understand requirements and deliver solutions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Portfolio */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <Briefcase className="text-red-500" size={28} />
                <h2 className="text-4xl font-bold text-white">Projects</h2>
              </div>
              <div className="grid grid-cols-1 gap-6 mt-6">
                {recruiterProjects.map((project) => (
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
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-gray-400 hover:text-red-500 transition-colors duration-300"
                      >
                        View Live →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonials */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <MessageCircle className="text-red-500" size={28} />
                <h2 className="text-4xl font-bold text-white">Testimonials</h2>
              </div>
              <div className="grid grid-cols-1 gap-6 mt-6">
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

            {/* CTA */}
            <section className="text-center space-y-6">
              <h2 className="text-4xl font-bold text-white">Let&apos;s Connect</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                I&apos;m always open to discussing new opportunities and collaborations.
              </p>
              <a 
                href="mailto:jacob.d.smith@live.com"
                className="inline-block px-8 py-4 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors duration-300 text-lg font-semibold"
              >
                Get in Touch
              </a>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 