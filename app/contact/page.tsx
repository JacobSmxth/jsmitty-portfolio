import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'
import { GradientHeading } from '@/components/ui'

export default function Contact() {
  return (
    <div className="min-h-screen pt-40 px-4 pb-20">
      <div className="max-w-4xl mx-auto">
        <div>
          <GradientHeading as="h1" className="text-5xl md:text-6xl font-bold mb-6 text-center pb-2">
            Get In Touch
          </GradientHeading>
        </div>

        <p className="text-xl text-slate-600 text-center mb-12">
          I&apos;m always open to discussing new projects, opportunities, or just chatting about tech and security.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <a
            href="mailto:jacobsmith@jsmitty.com"
            className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] border border-gray-200"
          >
            <FaEnvelope className="text-blue-600 mb-4" size={40} />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Work Inquiries
            </h3>
            <p className="text-blue-600 font-semibold">
              jacobsmith@jsmitty.com
            </p>
            <p className="text-slate-500 mt-2">
              For project inquiries and freelance work
            </p>
          </a>

          <a
            href="mailto:jacob.d.smith@live.com"
            className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] border border-gray-200"
          >
            <FaEnvelope className="text-rose-600 mb-4" size={40} />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Recruiters
            </h3>
            <p className="text-rose-600 font-semibold">
              jacob.d.smith@live.com
            </p>
            <p className="text-slate-500 mt-2">
              For job opportunities and recruiting
            </p>
          </a>

          <a
            href="https://linkedin.com/in/jacobsmxth"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] border border-gray-200"
          >
            <FaLinkedin className="text-blue-600 mb-4" size={40} />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              LinkedIn
            </h3>
            <p className="text-blue-600 font-semibold">
              /in/jacobsmxth
            </p>
            <p className="text-slate-500 mt-2">
              Professional networking and connections
            </p>
          </a>

          <a
            href="https://github.com/jacobsmxth"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02] border border-gray-200"
          >
            <FaGithub className="text-slate-900 mb-4" size={40} />
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              GitHub
            </h3>
            <p className="text-slate-900 font-semibold">
              /jacobsmxth
            </p>
            <p className="text-slate-500 mt-2">
              Check out my code and contributions
            </p>
          </a>
        </div>

      </div>
    </div>
  )
}
