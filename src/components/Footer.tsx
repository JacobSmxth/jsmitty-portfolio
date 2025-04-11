'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-6 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-center mt-8 space-y-1">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Jacob Smith. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Have a project idea? <a href="mailto:jacob.d.smith@live.com" className="text-red-400 hover:text-red-500 hover:underline transition-colors duration-300">Let&apos;s connect!</a>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link 
              href="https://github.com/yourusername" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors duration-300"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link 
              href="https://linkedin.com/in/yourusername" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-red-500 transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link 
              href="mailto:jacob.d.smith@live.com"
              className="text-gray-400 hover:text-red-500 transition-colors duration-300"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 