'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ContactModal from './ContactModal';

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const year = new Date().getFullYear();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const socialLinks = [
    { 
      id: 'github', 
      href: 'https://github.com/jacobsmxth', 
      icon: <Github className="w-5 h-5" />,
      label: 'GitHub'
    },
    { 
      id: 'linkedin', 
      href: 'https://www.linkedin.com/in/jacobsmxth/', 
      icon: <Linkedin className="w-5 h-5" />,
      label: 'LinkedIn'
    },
    { 
      id: 'mail', 
      href: '#', 
      icon: <Mail className="w-5 h-5" />,
      label: 'Contact',
      onClick: openModal
    }
  ];

  return (
    <footer className="w-full py-10 bg-gradient-to-b from-black/70 to-neutral-900/90 border-t border-gray-800/20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Top border with gradient */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Left section */}
          <div className="flex flex-col">
            <Link href="/" className="text-xl font-bold gradient-text mb-3">
              Jacob Smith
            </Link>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-400 max-w-xs"
            >
              Front-end developer specializing in React, Next.js, and modern web technologies.
            </motion.p>
          </div>
          
          {/* Right section */}
          <div className="flex flex-col items-end space-y-6">
            {/* Social links */}
            <div className="flex items-center gap-6">
              {socialLinks.map((link) => (
                <motion.div
                  key={link.id}
                  className="relative"
                  onHoverStart={() => setHovered(link.id)}
                  onHoverEnd={() => setHovered(null)}
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  {link.onClick ? (
                    <button 
                      onClick={link.onClick}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                      title={link.label}
                    >
                      {link.icon}
                    </button>
                  ) : (
                    <Link 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center"
                    >
                      {link.icon}
                    </Link>
                  )}
                  
                  {/* Tooltip */}
                  <AnimatedTooltip isVisible={hovered === link.id} text={link.label} />
                </motion.div>
              ))}
            </div>
            
            {/* Copyright */}
            <div className="text-center sm:text-right">
              <p className="text-gray-500 text-sm">
                &copy; {year} All rights reserved.
              </p>
              <button 
                onClick={openModal} 
                className="text-gray-400 hover:text-white text-sm mt-1 group inline-flex items-center gap-1"
              >
                Let&apos;s work together 
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </footer>
  );
}

type TooltipProps = {
  isVisible: boolean;
  text: string;
};

const AnimatedTooltip = ({ isVisible, text }: TooltipProps) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
    transition={{ duration: 0.2 }}
    className="absolute -top-8 left-1/2 -translate-x-1/2 glass px-2 py-1 text-xs rounded pointer-events-none"
  >
    {text}
  </motion.div>
); 