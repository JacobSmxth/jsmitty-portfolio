'use client'

import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { footerQuickLinks, footerServices, socialLinks } from '@/config/navigation'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = footerQuickLinks
  const services = footerServices

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white relative">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Jacob Smith
            </h3>
            <p className="text-slate-100 mb-6 leading-relaxed max-w-md">
              Cybersecurity + CS student and aspiring backend developer.
              Passionate about security, clean architecture, and learning modern technologies.
            </p>
            
            <div className="flex gap-4 mb-6">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-200 hover:scale-105"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-200 hover:scale-105"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-200 hover:scale-105"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
            </div>

          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-blue-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-slate-100 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
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
                    className="text-slate-100 hover:text-white transition-colors duration-200 flex items-center gap-2 group"
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
            <div className="flex items-center gap-2 text-slate-200 text-sm">
              <span>© {currentYear} Jacob Smith. All rights reserved.</span>
            </div>

            <div className="flex items-center gap-2 text-slate-100 text-sm">
              <p className="italic">
                &ldquo;Commit thy works unto the Lord, and thy thoughts shall be established&rdquo; - Proverbs 16:3 KJV
              </p>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-slate-300 font-mono">
              Built with Next.js • Running on Arch Linux • Crafted in Neovim
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
