'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Header Component
 * 
 * Renders the main site navigation bar, including the site title/logo,
 * desktop navigation links, and a collapsible mobile menu.
 * Uses `usePathname` to highlight the active link.
 * This component is conditionally rendered by `AppStructure` (not shown on root '/').
 * Enhanced with animations and modern glass-morphism design.
 */

const navLinks = [
  { href: '/visitor', label: 'Portfolio' },
  { href: '/reader', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/recruiter', label: 'For Recruiters' },
];

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`sticky bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50 shadow-sm top-0 w-full z-50 transition-all duration-300 py-1 ${
        scrolled 
          ? 'glass shadow-lg py-0 rounded-b-lg' 
          : ''
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name with animation */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity">
              Jacob Smith
            </Link>
          </motion.div>

          {/* Right Aligned Container for Nav and Mobile Button */}
          <div className="flex items-center">
            {/* Desktop Navigation with animations */}
            <div className="hidden md:flex md:items-center md:space-x-4">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href || (link.href !== '/visitor' && pathname.startsWith(link.href));
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <Link 
                      href={link.href} 
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all relative hover:bg-white/5 ${
                        isActive 
                          ? 'text-white' 
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <motion.span 
                          layoutId="activeIndicator"
                          className="absolute inset-x-0 -bottom-1 h-0.5 gradient-animate rounded"
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center ml-4">
              <button
                onClick={toggleMobileMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700/30 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 transition-colors"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel with animation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            id="mobile-menu"
            className="md:hidden glass border border-white/10 mt-2 mx-4 rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href || (link.href !== '/visitor' && pathname.startsWith(link.href));
                return (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.05 * index }}
                  >
                    <Link 
                      href={link.href} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${ 
                        isActive 
                          ? 'bg-red-500/10 text-white' 
                          : 'text-gray-300 hover:bg-gray-700/30 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 