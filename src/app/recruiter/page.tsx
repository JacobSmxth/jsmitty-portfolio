'use client';

import Link from 'next/link';
import { ArrowLeft, Briefcase, CheckCircle2, MessageCircle, GraduationCap, User, FolderGit2, Code, ArrowUpRight } from 'lucide-react';
import Footer from '@/components/Footer';
import { education } from '@/data/education';
import projectData from '@/data/projectData';
import { workExperience } from '@/data/workExperience';
import testimonials from '@/data/testimonials';

export default function RecruiterPage() {
  // Filter projects for recruiters - only show specific projects
  const recruiterProjects = projectData.filter(project => 
    ['Kayla Fitness', 'SkyCast', 'Coffee Haven'].includes(project.name)
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
              <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
                Cybersecurity Student & Web Developer based in Alpharetta, GA. Passionate about creating beautiful, functional web experiences and solving complex problems.
              </p>
            </section>

            {/* About Me */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <User className="text-red-500" size={28} />
                <h2 className="text-4xl font-bold text-white">About Me</h2>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-xl space-y-4">
                <p className="text-gray-300">
                  I&apos;m a dedicated web developer with a strong foundation in modern web technologies and a passion for continuous learning. My approach combines traditional development skills with strategic use of AI tools to deliver high-quality solutions efficiently.
                </p>
                <p className="text-gray-300">
                  Currently pursuing a Bachelor of Science in Cybersecurity at the University of North Georgia, I maintain a 3.4 GPA while actively working on real-world projects. My education in cybersecurity enhances my development work by ensuring secure, robust applications.
                </p>
              </div>
            </section>

            {/* Work Experience */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <Briefcase className="text-red-500" size={28} />
                <h2 className="text-4xl font-bold text-white">Work Experience</h2>
              </div>
              <div className="space-y-8 mt-6">
                {workExperience.map((experience) => (
                  <div key={experience.id} className="space-y-4">
                    <h3 className="text-2xl font-semibold text-red-400">{experience.title}</h3>
                    <p className="text-gray-400">{experience.company} • {experience.period}</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {experience.description.map((item, index) => (
                        <li key={index}>{item}</li>
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
                <h2 className="text-4xl font-bold text-white">Education</h2>
              </div>
              <div className="grid grid-cols-1 gap-6 mt-6">
                {education.map((edu, index: number) => (
                  <div key={index} className="bg-gray-800/50 p-6 rounded-xl space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-semibold text-red-400">{edu.school}</h3>
                        {edu.degree && edu.field && (
                          <p className="text-gray-300">{edu.degree} in {edu.field}</p>
                        )}
                      </div>
                      <div className="text-right">
                        <span className="text-gray-400">{edu.duration}</span>
                        <p className="text-gray-300">GPA: {edu.gpa}</p>
                      </div>
                    </div>
                    
                    {edu.focus && edu.focus.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold text-gray-300 mb-2">Focus Areas</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.focus.map((focus: string, i: number) => (
                            <span 
                              key={i}
                              className="px-3 py-1 bg-gray-700/50 rounded-full text-gray-300 text-sm"
                            >
                              {focus}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {edu.relevantCoursework && edu.relevantCoursework.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold text-gray-300 mb-2">Relevant Coursework</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.relevantCoursework.map((course: string, i: number) => (
                            <span 
                              key={i}
                              className="px-3 py-1 bg-gray-700/50 rounded-full text-gray-300 text-sm"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {edu.achievements && edu.achievements.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold text-gray-300 mb-2">Achievements</h4>
                        <ul className="list-disc list-inside text-gray-300">
                          {edu.achievements.map((achievement: string, i: number) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Core Skills */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-red-500" size={28} />
                <h2 className="text-4xl font-bold text-white">Core Skills</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-gray-800/50 p-6 rounded-xl space-y-4">
                  <h3 className="text-2xl font-semibold text-red-400">Frontend Development</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-red-500 mt-1" size={20} />
                      <span className="text-gray-300">HTML5 & CSS3</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-red-500 mt-1" size={20} />
                      <span className="text-gray-300">JavaScript (ES6+)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-red-500 mt-1" size={20} />
                      <span className="text-gray-300">SCSS/SASS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-red-500 mt-1" size={20} />
                      <span className="text-gray-300">Tailwind CSS</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-800/50 p-6 rounded-xl space-y-4">
                  <h3 className="text-2xl font-semibold text-red-400">Development Tools</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-red-500 mt-1" size={20} />
                      <span className="text-gray-300">Vite</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-red-500 mt-1" size={20} />
                      <span className="text-gray-300">Git Version Control</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-red-500 mt-1" size={20} />
                      <span className="text-gray-300">Responsive Design</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="text-red-500 mt-1" size={20} />
                      <span className="text-gray-300">Performance Optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Recent Work */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <FolderGit2 className="text-red-500" size={28} />
                <h2 className="text-2xl sm:text-4xl font-bold text-white">Recent Work</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recruiterProjects.map((project) => (
                  <div key={project.id} className="bg-gray-800/30 rounded-xl p-6 border border-gray-800">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-red-400">{project.name}</h3>
                        {project.github && (
                          <a 
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                          >
                            <Code className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech} 
                            className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-red-400 hover:text-red-500 transition-colors duration-300"
                        >
                          View Project
                          <ArrowUpRight className="ml-1 h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonials */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <MessageCircle className="text-red-500" size={28} />
                <h2 className="text-4xl font-bold text-white">Client Testimonials</h2>
              </div>
              <div className="grid grid-cols-1 gap-6 mt-6">
                {testimonials.filter(t => t.author === "Fr0st" || t.author === "Kayla Smith").map((testimonial) => (
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
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 