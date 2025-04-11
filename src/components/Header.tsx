'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

/**
 * Header Component
 * 
 * Renders the main site navigation bar, including the site title/logo,
 * desktop navigation links, and a collapsible mobile menu.
 * Uses `usePathname` to highlight the active link.
 * This component is conditionally rendered by `AppStructure` (not shown on root '/').
 */

const navLinks = [
  { href: '/visitor', label: 'Portfolio' },
  { href: '/reader', label: 'Blog' },
  { href: '/about', label: 'About' },
];

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-white hover:text-red-400 transition-colors">
              Jacob Smith
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/visitor' && pathname.startsWith(link.href));
              return (
                <Link 
                  key={link.label}
                  href={link.href} 
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${ 
                    isActive 
                      ? 'text-red-400' 
                      : 'text-gray-300 hover:text-red-400'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500"
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
      </nav>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== '/visitor' && pathname.startsWith(link.href));
              return (
                <Link 
                  key={link.label}
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${ 
                    isActive 
                      ? 'bg-red-500/10 text-red-400' 
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 