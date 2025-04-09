'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full py-6 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Jacob Smith. All rights reserved.
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
              href="mailto:your.email@example.com"
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