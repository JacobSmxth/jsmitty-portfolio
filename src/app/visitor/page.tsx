import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  Github,
  Twitter,
  Linkedin,
  User,
  BookOpen,
  MessageCircle,
} from 'lucide-react';
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
} from 'react-icons/si';
import { socialLinks } from '@/data/socialLinks';
import projectData from '@/data/projectData';
import testimonials from '@/data/testimonials';
import { contactInfo } from '@/data/contactInfo';
import type { Metadata } from 'next';

const iconMap = {
  github: Github,
  twitter: Twitter,
  linkedin: Linkedin,
};

const skillIconMap: { [key: string]: React.ElementType } = {
  React: SiReact,
  NextJS: SiNextdotjs,
  TailwindCSS: SiTailwindcss,
  TypeScript: SiTypescript,
  NodeJS: SiNodedotjs,
  JavaScript: SiJavascript,
  HTML: SiHtml5,
  CSS: SiCss3,
  Git: SiGit,
};

export const metadata: Metadata = {
  title: 'Portfolio & Profile | Jacob Smith',
  description: 'Explore the projects, skills, and background of Jacob Smith, a front-end web developer.',
};

export default function VisitorPage() {
  const allProjects = projectData;
  const allTestimonials = testimonials;

  return (
    <main className="flex-grow text-white p-8 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center justify-between mb-16">
          <Link
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-red-500 transition-colors duration-300 text-lg cursor-pointer"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Selection
          </Link>
          <Link
            href="/about?from=visitor"
            className="inline-flex items-center gap-2 px-5 py-2 bg-gray-800/50 text-red-400 rounded-lg hover:bg-red-500/10 transition-all duration-300 text-base font-medium cursor-pointer"
          >
            <User size={18} />
            About Me
          </Link>
        </nav>

        <div className="space-y-24">
          <section className="flex flex-col md:flex-row items-center gap-12 fade-in-section">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                Welcome! Explore My{' '}
                <span className="bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
                  Work & World
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-6 leading-relaxed">
                I&apos;m Jacob, a <span className="text-red-400 font-medium">Front End Web Developer</span> passionate about building engaging, user-friendly digital experiences with modern web technologies.
              </p>
              <div className="flex justify-center md:justify-start items-center gap-5">
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
                      <Icon size={28} />
                    </a>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="space-y-12 fade-in-section fade-in-delay-1">
            <h2 className="text-center text-4xl font-bold text-white">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-gray-800/40 rounded-2xl border border-gray-700/50 overflow-hidden flex flex-col group transition-all duration-300 hover:border-red-500/40 shadow-lg"
                >
                  <div className="w-full h-56 bg-gray-700/50 relative overflow-hidden">
                    {project.image ? (
                      <Image 
                        src={project.image} 
                        alt={`${project.name} screenshot`}
                        layout="fill" 
                        objectFit="cover" 
                        className="transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-500">Image Missing</div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <h3 className="absolute bottom-4 left-4 z-10 text-xl font-semibold text-white drop-shadow-md">
                      {project.name}
                    </h3>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <p className="text-gray-400 text-sm mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 bg-gray-700/60 text-gray-300 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-700/50">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-red-400 hover:text-red-500 transition-colors"
                        >
                          View Live
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-400 hover:text-red-500 transition-colors"
                        >
                          View Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-12 fade-in-section fade-in-delay-2">
            <h2 className="text-center text-4xl font-bold text-white">My Tech Stack</h2>
            <div className="bg-gray-800/30 rounded-2xl border border-gray-700/50 p-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center">
                {[
                  { name: 'React', icon: 'React' },
                  { name: 'Next.js', icon: 'NextJS' },
                  { name: 'Tailwind CSS', icon: 'TailwindCSS' },
                  { name: 'TypeScript', icon: 'TypeScript' },
                  { name: 'Node.js', icon: 'NodeJS' },
                  { name: 'JavaScript', icon: 'JavaScript' },
                  { name: 'HTML5', icon: 'HTML' },
                  { name: 'CSS3', icon: 'CSS' },
                  { name: 'Git', icon: 'Git' },
                ].map((skill) => {
                  const Icon = skillIconMap[skill.icon] || SiJavascript;
                  return (
                    <div key={skill.name} className="flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-110">
                      <Icon className="w-10 h-10 text-red-400" />
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="text-center space-y-6 max-w-3xl mx-auto fade-in-section fade-in-delay-3">
            <h2 className="text-3xl font-bold text-white">Beyond the Code</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              I believe in continuous learning and crafting digital solutions that are not only functional but also intuitive and enjoyable to use. Check out my thoughts on development and design.
            </p>
            <Link
              href="/reader"
              className="inline-flex items-center gap-2 px-6 py-2 bg-red-500/10 text-red-400 rounded-xl hover:bg-red-500/20 transition-all duration-300 text-lg font-medium cursor-pointer"
            >
              <BookOpen size={20} />
              Read My Blog
            </Link>
          </section>

          <section className="space-y-12 fade-in-section fade-in-delay-4">
            <h2 className="text-center text-4xl font-bold text-white">Kind Words</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {allTestimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-gray-800/40 p-6 rounded-2xl border border-gray-700/50 space-y-4 flex flex-col shadow-md"
                >
                  <MessageCircle className="w-8 h-8 text-red-500/40 mb-2 flex-shrink-0" />
                  <p className="text-gray-300 italic flex-grow">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="flex flex-col items-start pt-4 border-t border-gray-700/50 flex-shrink-0">
                    <span className="text-red-400 font-semibold">
                      {testimonial.author}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {testimonial.position}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="text-center space-y-8 py-16 fade-in-section fade-in-delay-4">
            <h2 className="text-4xl font-bold text-white">Let&apos;s Connect!</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Interested in my work or want to discuss a potential project? Feel free to reach out or connect on social media.
            </p>
            <div className="flex justify-center items-center gap-6 flex-wrap">
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-2 px-8 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors duration-300 text-lg font-semibold"
              >
                Get in Touch
              </a>
              {socialLinks.filter(l => l.platform === 'linkedin' || l.platform === 'github').map((link) => {
                const Icon = iconMap[link.icon as keyof typeof iconMap];
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-700/50 text-gray-300 rounded-xl hover:bg-gray-600/50 hover:text-white transition-colors duration-300 text-lg font-semibold"
                    title={`Connect on ${link.platform}`}
                  >
                    <Icon size={20} />
                    {link.platform.charAt(0).toUpperCase() + link.platform.slice(1)}
                  </a>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 