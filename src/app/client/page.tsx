import Link from 'next/link';
import {
  ArrowLeft,
  CheckCircle2,
  User,
  Zap,
  LayoutDashboard,
  Target,
  Mail,
  Quote,
} from 'lucide-react';
import projectData from '@/data/projectData';
import testimonials from '@/data/testimonials';
import { contactInfo } from '@/data/contactInfo';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Services | Jacob Smith',
  description: 'Web development and design services offered by Jacob Smith. Let\'s build your vision.',
};

export default function ClientPage() {
  // Filter projects to show real client work
  const clientProjects = projectData.filter(
    (project) =>
      project.name === 'Fr0st.gg' ||
      project.name === 'Kayla Fitness' ||
      project.name === 'Vickery Burger Bar'
  );

  return (
    <main className="flex-grow text-white p-8 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        {/* Navigation Bar */}
        <nav className="flex items-center justify-between mb-16">
          <Link 
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-red-500 transition-colors duration-300 text-lg cursor-pointer"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Selection
          </Link>

          <Link 
            href="/about?from=client"
            className="inline-flex items-center gap-2 px-5 py-2 bg-gray-800/50 text-red-400 rounded-lg hover:bg-red-500/10 transition-all duration-300 text-base font-medium cursor-pointer"
          >
            <User size={18} />
            About Me
          </Link>
        </nav>

        <div className="space-y-24">
          {/* Hero Section */}
          <section className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Let&apos;s Build Your <span className="bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">Digital Vision</span>
            </h1>
            <p className="text-xl font-medium text-red-400 mt-2">
               Front End Web Developer & AI-Enhanced Engineer
            </p>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I craft high-performance, beautifully designed websites and applications that engage users and drive results for your business.
            </p>
            <div>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-2 px-8 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors duration-300 text-lg font-semibold shadow-lg hover:shadow-red-500/30"
              >
                <Mail size={20} />
                Start Your Project
              </a>
            </div>
          </section>

          {/* Key Benefits/Services Section */}
          <section className="space-y-12">
            <h2 className="text-center text-4xl font-bold text-white mb-12">How I Help You Succeed</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Benefit 1: Design */} 
              <div className="bg-gray-800/40 p-8 rounded-2xl border border-gray-700/50 space-y-4 text-center hover:border-red-500/50 transition-colors duration-300">
                <LayoutDashboard className="text-red-500 mx-auto" size={40} />
                <h3 className="text-2xl font-semibold text-white">Stunning & Intuitive Design</h3>
                <p className="text-gray-400 leading-relaxed">
                  Capture your audience with modern, user-friendly interfaces designed for engagement and ease of use.
                </p>
                <ul className="text-left space-y-2 pt-2">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className="text-red-400" size={18} /> Mobile-First Responsive Layouts
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className="text-red-400" size={18} /> User Experience (UX) Optimization
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className="text-red-400" size={18} /> Visually Appealing UI
                  </li>
                </ul>
              </div>
              {/* Benefit 2: Development */} 
              <div className="bg-gray-800/40 p-8 rounded-2xl border border-gray-700/50 space-y-4 text-center hover:border-red-500/50 transition-colors duration-300">
                <Zap className="text-red-500 mx-auto" size={40} />
                <h3 className="text-2xl font-semibold text-white">Robust & Scalable Development</h3>
                <p className="text-gray-400 leading-relaxed">
                  Build a reliable foundation with clean code, modern technologies, and performance optimization.
                </p>
                <ul className="text-left space-y-2 pt-2">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className="text-red-400" size={18} /> Fast Loading Speeds
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className="text-red-400" size={18} /> Secure & Maintainable Code
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className="text-red-400" size={18} /> Future-Proof Technologies
                  </li>
                </ul>
              </div>
              {/* Benefit 3: Results */} 
              <div className="bg-gray-800/40 p-8 rounded-2xl border border-gray-700/50 space-y-4 text-center hover:border-red-500/50 transition-colors duration-300">
                <Target className="text-red-500 mx-auto" size={40} />
                <h3 className="text-2xl font-semibold text-white">Focus on Your Goals</h3>
                <p className="text-gray-400 leading-relaxed">
                  Collaborate closely to ensure the final product aligns perfectly with your business objectives.
                </p>
                <ul className="text-left space-y-2 pt-2">
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className="text-red-400" size={18} /> Clear Communication
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className="text-red-400" size={18} /> Goal-Oriented Solutions
                  </li>
                  <li className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className="text-red-400" size={18} /> Measurable Results
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Combined Portfolio & Testimonials Section */}
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Portfolio Section */}
            <section className="lg:w-1/2 space-y-8">
              <h2 className="text-center text-4xl font-bold text-white">Recent Client Success Stories</h2>
              <div className="space-y-8">
                {clientProjects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700/50 space-y-4 transition-all duration-300 hover:shadow-lg hover:border-red-500/30 hover:scale-[1.01]"
                  >
                    <h3 className="text-2xl font-semibold text-red-400">
                      {project.name}
                    </h3>
                    <p className="text-gray-300">{project.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-red-500/10 text-red-400 rounded-full text-sm"
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
                        className="inline-block mt-4 text-red-400 font-medium hover:text-red-500 transition-colors duration-300 group"
                      >
                        View Live Site <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonials Section */}
            <section className="lg:w-1/2 space-y-8">
              <h2 className="text-center text-4xl font-bold text-white">What My Clients Say</h2>
              <div className="space-y-8">
                {testimonials
                  .filter((t) => t.author === 'Fr0st' || t.author === 'Kayla Smith')
                  .map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="relative bg-gray-800/60 p-8 rounded-2xl border border-gray-700/60 space-y-4 shadow-inner"
                    >
                      <Quote className="absolute top-4 left-4 w-12 h-12 text-red-500/20" strokeWidth={1.5} />
                      <p className="text-gray-300 italic text-lg leading-relaxed relative z-10">
                        {testimonial.text}
                      </p>
                      <div className="flex flex-col items-end pt-4 relative z-10">
                        <span className="text-red-400 font-semibold text-lg">
                          {testimonial.author}
                        </span>
                        <span className="text-gray-500 text-sm">
                          {testimonial.position}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </section>
          </div>

          {/* CTA Section */}
          <section className="text-center space-y-8 py-16 bg-gray-800/30 rounded-3xl">
            <h2 className="text-4xl font-bold text-white">Ready to Elevate Your Online Presence?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Let&apos;s discuss your project requirements and how I can help you achieve your goals.
            </p>
            <div>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-2 px-10 py-4 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors duration-300 text-xl font-semibold shadow-lg hover:shadow-red-500/30"
              >
                <Mail size={22} />
                Get a Free Consultation
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 