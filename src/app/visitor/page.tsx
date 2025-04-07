'use client';

import Link from 'next/link';
import { ArrowLeft, MessageCircle, Github, Twitter, Linkedin, User } from 'lucide-react';
import Footer from '@/components/Footer';
import testimonials from '@/data/testimonials';
import { socialLinks } from '@/data/socialLinks';

export default function VisitorPage() {
  const iconMap = {
    github: Github,
    twitter: Twitter,
    linkedin: Linkedin
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <main className="text-white p-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <Link 
              href="/"
              className="inline-flex items-center text-gray-400 hover:text-red-500 transition-colors duration-300 text-xl cursor-pointer"
            >
              <ArrowLeft className="mr-2" />
              Back to Selection
            </Link>

            <Link 
              href="/about?from=visitor"
              className="inline-flex items-center gap-2 px-6 py-2 bg-gray-800/50 text-red-400 rounded-xl hover:bg-red-500/10 transition-all duration-300 text-lg font-medium cursor-pointer"
            >
              <User size={20} />
              About Me
            </Link>
          </div>

          <div className="space-y-16">
            {/* Hero Section */}
            <section className="space-y-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MessageCircle className="text-red-500" size={36} />
                  <h1 className="text-6xl font-bold bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
                    What People Say
                  </h1>
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
                        className="text-gray-400 hover:text-red-500 transition-colors duration-300 cursor-pointer"
                        title={link.platform}
                      >
                        <Icon size={24} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section className="space-y-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-[#1a1d21] rounded-2xl p-8 space-y-4 border border-gray-800/50"
                >
                  <p className="text-gray-300 text-lg italic leading-relaxed">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-red-400 font-semibold">{testimonial.author}</h3>
                      <p className="text-gray-500 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 