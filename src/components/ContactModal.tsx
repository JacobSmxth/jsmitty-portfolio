'use client';

import React, { Fragment, useState } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import { X, Github, Linkedin, Twitter, Send, Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import { contactInfo } from '@/data/contactInfo';
import { socialLinks } from '@/data/socialLinks';
import emailjs from '@emailjs/browser';

/**
 * ContactModal Component
 * 
 * A reusable modal dialog that displays primary contact information (email) 
 * and links to social media profiles.
 * Uses Headless UI for transitions and accessibility.
 * Enhanced with animations and modern design elements.
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
  const [messageSent, setMessageSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      console.log('EmailJS Configuration:', {
        serviceId,
        templateId,
        publicKey,
        hasServiceId: !!serviceId,
        hasTemplateId: !!templateId,
        hasPublicKey: !!publicKey
      });

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }

      // Initialize EmailJS with the public key
      emailjs.init(publicKey);

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: contactInfo.email,
        reply_to: formData.email
      };

      console.log('Attempting to send email with params:', templateParams);

      try {
        const response = await emailjs.send(serviceId, templateId, templateParams);
        console.log('EmailJS Response:', response);
        
        if (response.status !== 200) {
          throw new Error(`EmailJS returned status ${response.status}`);
        }
        
        setSubmitStatus('success');
        setMessageSent(true);
        setFormData({ name: '', email: '', message: '' });
      } catch (emailError) {
        console.error('EmailJS Send Error:', emailError);
        if (emailError instanceof Error) {
          console.error('Error details:', {
            message: emailError.message,
            name: emailError.name,
            stack: emailError.stack
          });
        }
        throw emailError;
      }
    } catch (error) {
      console.error('Error in handleSubmit:', error);
      if (error instanceof Error) {
        console.error('Error details:', {
          message: error.message,
          name: error.name,
          stack: error.stack
        });
      }
      setSubmitStatus('error');
      setFormData({ name: '', email: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={onClose}>
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
            {/* Backdrop with blur effect */}
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
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
            <Dialog.Panel 
              className="inline-block relative align-middle glass p-8 my-8 rounded-xl shadow-2xl max-w-lg w-full text-left"
            >
              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-red-500/20 blur-2xl"></div>
              <div className="absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-purple-500/20 blur-2xl"></div>
              
              <button 
                onClick={onClose} 
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2 rounded-full hover:bg-white/5"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {!messageSent ? (
                  <>
                    <motion.div variants={itemVariants}>
                      <Dialog.Title className="text-2xl font-bold gradient-text mb-2">
                        Let&apos;s Connect
                      </Dialog.Title>
                      <Dialog.Description className="text-gray-400 mb-6">
                        Fill out the form below or reach out directly.
                      </Dialog.Description>
                    </motion.div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Contact Form */}
                      <motion.form 
                        variants={itemVariants} 
                        onSubmit={handleSubmit}
                        className="space-y-4"
                      >
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                            Name
                          </label>
                          <input 
                            type="text" 
                            id="name" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 bg-white/5 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500/50 text-white placeholder-gray-500"
                            placeholder="Your name"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                            Email
                          </label>
                          <input 
                            type="email" 
                            id="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-3 py-2 bg-white/5 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500/50 text-white placeholder-gray-500"
                            placeholder="your@email.com"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                            Message
                          </label>
                          <textarea 
                            id="message" 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={3}
                            className="w-full px-3 py-2 bg-white/5 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500/50 text-white placeholder-gray-500"
                            placeholder="Tell me about your project..."
                          />
                        </div>
                        
                        {submitStatus === 'success' && (
                          <div className="text-green-500 text-sm">
                            Message sent successfully! I&apos;ll get back to you soon.
                          </div>
                        )}

                        {submitStatus === 'error' && (
                          <div className="text-red-500 text-sm">
                            There was an error sending your message. Please try again.
                          </div>
                        )}

                        <button 
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-2 px-4 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 rounded-md text-white font-medium flex items-center justify-center gap-2 group transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send size={16} className="transition-transform group-hover:translate-x-1" />
                              Send Message
                            </>
                          )}
                        </button>
                      </motion.form>
                      
                      {/* Direct Contact */}
                      <motion.div variants={itemVariants} className="space-y-6">
                        <div>
                          <h3 className="text-sm font-medium text-gray-300 mb-1">Email</h3>
                          <div className="flex items-center">
                            <a 
                              href={`mailto:${contactInfo.email}`}
                              className="text-white font-medium mr-2 hover:text-red-400 transition-colors"
                            >
                              {contactInfo.email}
                            </a>
                            <button 
                              onClick={copyEmail}
                              className="p-1.5 bg-white/5 rounded-md hover:bg-white/10 transition-colors"
                              title="Copy email address"
                            >
                              {copied ? (
                                <Check size={14} className="text-green-500" />
                              ) : (
                                <Copy size={14} className="text-gray-400" />
                              )}
                            </button>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-medium text-gray-300 mb-2">Connect</h3>
                          <div className="flex items-center gap-4">
                            {socialLinks.map((link) => {
                              const Icon = iconMap[link.icon as keyof typeof iconMap];
                              if (!Icon) return null; // Skip if icon not found
                              return (
                                <motion.a
                                  key={link.platform}
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-2 bg-white/5 rounded-md hover:bg-white/10 text-gray-300 hover:text-white transition-all group"
                                  title={`Connect on ${link.platform}`}
                                  whileHover={{ y: -2 }}
                                >
                                  <Icon size={18} />
                                </motion.a>
                              );
                            })}
                          </div>
                        </div>
                        
                        <div className="pt-4">
                          <p className="text-sm text-gray-400">
                            I&apos;m currently available for freelance work. Let&apos;s create something amazing together.
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </>
                ) : (
                  <motion.div 
                    className="text-center py-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="w-16 h-16 mx-auto bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                      <Check size={32} className="text-green-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400 mb-6">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                    <button 
                      onClick={onClose}
                      className="py-2 px-4 bg-white/5 hover:bg-white/10 rounded-md text-white transition-colors"
                    >
                      Close
                    </button>
                  </motion.div>
                )}
              </motion.div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ContactModal; 