'use client';

import { Github, Twitter, Linkedin } from 'lucide-react';
import { socialLinks } from '@/data/socialLinks';

export default function Footer() {
  const iconMap = {
    github: Github,
    twitter: Twitter,
    linkedin: Linkedin
  };

  return (
    <footer className="mt-24 -mx-8 bg-gray-800/30">
      <div className="max-w-5xl mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-400">
            © {new Date().getFullYear()} Jacob Smith. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              return (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition-colors duration-300"
                  title={link.platform}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
} 