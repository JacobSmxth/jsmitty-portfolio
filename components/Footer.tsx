'use client'

import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaCode } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/#projects' },
    { name: 'Experience', path: '/#timeline' },
  ]

  const services = [
    { name: 'Business Websites', path: '/services' },
    { name: 'Website Redesign', path: '/services' },
    { name: 'Web Applications', path: '/services' },
    { name: 'Maintenance & Hosting', path: '/services' },
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Jacob Smith
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
              Cybersecurity + CS student and aspiring backend developer. 
              Passionate about security, clean architecture, and learning modern technologies.
            </p>
            
            <div className="flex gap-4 mb-6">
              <a
                href="https://github.com/jacobsmxth"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/jacobsmxth"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:jacobsmith@jsmitty.com"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
            </div>

            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-sm italic text-slate-300">
                &ldquo;With great power comes great responsibility&rdquo;
              </p>
              <p className="text-xs text-slate-400 mt-1">- Uncle Ben</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-blue-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 transition-all duration-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-purple-400">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.path}
                    className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-purple-400 transition-all duration-200"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <span>© {currentYear} Jacob Smith. All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <span>Jesus Christ is King</span>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-400 italic">
              &ldquo;For God so loved the world that he gave his one and only Son&rdquo; - John 3:16
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

