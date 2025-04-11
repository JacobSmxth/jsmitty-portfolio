'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import ContactModal from './ContactModal';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <footer className="w-full py-6 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-center mt-8 space-y-1">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Jacob Smith. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              Have a project idea? <button onClick={openModal} className="text-red-400 hover:text-red-500 hover:underline transition-colors duration-300">Let&apos;s connect!</button>
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
            <button 
              onClick={openModal}
              className="text-gray-400 hover:text-red-500 transition-colors duration-300"
              title="Contact Me"
            >
              <Mail className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </footer>
  );
} 