'use client';

import React, { Fragment } from 'react';
import { Transition } from '@headlessui/react';
import { X, Github, Linkedin, Twitter } from 'lucide-react'; // Removed Mail
import { contactInfo } from '@/data/contactInfo';
import { socialLinks } from '@/data/socialLinks';

/**
 * ContactModal Component
 * 
 * A reusable modal dialog that displays primary contact information (email) 
 * and links to social media profiles.
 * Uses Headless UI for transitions and accessibility.
 */

// Defines icons for social links used within this modal.
// Consider moving to a shared location if used elsewhere.
const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* Overlay */}
            <div className="fixed inset-0 bg-black/80" onClick={onClose} aria-hidden="true" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div 
              className="inline-block relative align-middle bg-black border border-red-500/50 p-8 my-8 rounded-lg shadow-xl max-w-lg w-full text-center"
            >
              <button 
                onClick={onClose} 
                className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
                aria-label="Close modal"
              >
                <X size={28} />
              </button>
              
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
              
              <div className="mb-6">
                <p className="text-gray-400 mb-2">The best way to reach me is via email:</p>
                <a 
                  href={`mailto:${contactInfo.email}`}
                  className="text-xl font-semibold text-red-400 hover:text-red-500 transition-colors break-all"
                >
                  {contactInfo.email}
                </a>
              </div>

              <div className="mb-4">
                <p className="text-gray-400 mb-3">Or connect on social media:</p>
                <div className="flex justify-center items-center gap-6">
                  {socialLinks.map((link) => {
                    const Icon = iconMap[link.icon as keyof typeof iconMap];
                    if (!Icon) return null; // Skip if icon not found
                    return (
                      <a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-red-500 transition-colors duration-300"
                        title={`Connect on ${link.platform}`}
                      >
                        <Icon size={32} />
                      </a>
                    );
                  })}
                </div>
              </div>

            </div>
          </Transition.Child>
        </div>
      </div>
    </Transition>
  );
};

export default ContactModal; 