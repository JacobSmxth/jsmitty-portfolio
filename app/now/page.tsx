'use client'

import { motion } from 'framer-motion'
import { BookOpen, Code2, Target, GraduationCap, Lightbulb, Trophy } from 'lucide-react'

const nowData = {
  updated: 'October 2025',
  semesterInfo: {
    term: 'Fall 2025 - Sophomore Year at University of North Georgia',
    graduation: 'Expected Graduation: May 2028'
  },
  semester: [
    'BIOL1102K - Intro to Ecology Lab',
    'HIST2111 - US History I',
    'MUSC1100 - Music Appreciation',
    'CSCI1302 - Computer Science II',
    'CRJU1100 - Intro to Criminal Justice'
  ],
  learning: [
    'Studying Spring Security (JWT, OAuth2) for authentication/authorization',
    'PostgreSQL for production-ready database skills'
  ],
  building: [
    {
      title: 'CentDash - Migrating personal finance API from CSV to database-backed architecture with JPA inheritance',
      details: []
    },
    {
      title: 'Spring Boot REST APIs with clean architecture and comprehensive testing',
      details: []
    },
    {
      title: 'New rewards and progression system for Code Ninjas students',
      details: [
        'Starting with my dojo',
        'Planning expansion internationally'
      ]
    },
    {
      title: 'Co-designing the new Unreal Engine learning pathway from scratch',
      details: [
        'Working with Code Ninjas Corporate'
      ]
    }
  ],
  goals: [
    'Land a backend engineering internship for Summer 2026',
    'Contribute to a major open source project in the Spring ecosystem',
    'Build a production-ready fintech API'
  ],
  specialization: [
    'Database Management', 'Object Oriented Design', 'Secure Coding',
    'Security Software', 'OWASP', 'SDLC',
    'Systems Design', 'UML', 'Design Patterns',
    'Software Engineering', 'Database Design', 'Usability Testing',
    'Vulnerability Assessments', 'Unit Testing', 'Threat Modeling',
    'Software Design', 'UI/UX Design', 'Technical Design',
    'Software Architecture', 'Application Security'
  ],
  competitions: [
  {
    title: 'NSA Codebreaker Challenge 2025/2026',
    status: 'Struggling on Task 2',
    details: [
      'Been working on Task 2 for about a month now',
      'Actively learning and trying different approaches to pass this challenge',
      'Applying cybersecurity fundamentals in real-world CTF scenarios'
    ]
  }
]
}

export default function Now() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 pb-2 bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 bg-clip-text text-transparent">
            What I&apos;m Doing Now
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mb-2 mx-auto">
            A snapshot of what I&apos;m currently focused on in my journey to becoming a backend engineer.
          </p>
          <p className="text-sm text-slate-500 italic">
            Last updated: {nowData.updated}
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-8 mb-12">
          {/* Current Semester */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="border-l-4 border-blue-600 pl-6 py-4"
          >
            <div className="flex items-center gap-3 mb-2">
              <GraduationCap className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-800">Current Semester</h2>
            </div>
            <p className="text-sm text-slate-600 mb-1">{nowData.semesterInfo.term}</p>
            <p className="text-sm text-slate-500 mb-4">{nowData.semesterInfo.graduation}</p>
            <ul className="space-y-2">
              {nowData.semester.map((course, idx) => (
                <li key={idx} className="text-slate-700 text-sm">
                  {course}
                </li>
              ))}
            </ul>
          </motion.div>

          <hr className="border-slate-200" />

          {/* Learning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="border-l-4 border-green-600 pl-6 py-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-slate-800">Learning</h2>
            </div>
            <ul className="space-y-2">
              {nowData.learning.map((item, idx) => (
                <li key={idx} className="text-slate-700 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <hr className="border-slate-200" />

          {/* Building */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="border-l-4 border-purple-600 pl-6 py-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="w-6 h-6 text-purple-600" />
              <h2 className="text-2xl font-bold text-slate-800">Building</h2>
            </div>
            <ul className="space-y-4">
              {nowData.building.map((item, idx) => (
                <li key={idx} className="text-slate-700">
                  <div className="text-sm font-medium">{item.title}</div>
                  {item.details.length > 0 && (
                    <ul className="mt-2 ml-4 space-y-1">
                      {item.details.map((detail, detailIdx) => (
                        <li key={detailIdx} className="text-xs text-slate-600 flex items-start gap-2">
                          <span className="text-purple-600">→</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          <hr className="border-slate-200" />

          {/* Goals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="border-l-4 border-orange-600 pl-6 py-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-orange-600" />
              <h2 className="text-2xl font-bold text-slate-800">2026 Goals</h2>
            </div>
            <ul className="space-y-2">
              {nowData.goals.map((goal, idx) => (
                <li key={idx} className="text-slate-700 text-sm">
                  {goal}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <hr className="border-slate-200" />

        {/*Competitions*/}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="border-l-4 border-red-600 pl-6 py-4 mt-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="w-6 h-6 text-red-600" />
            <h2 className="text-2xl font-bold text-slate-800">Competitions & Challenges</h2>
          </div>
          <ul className="space-y-4">
            {nowData.competitions.map((item, idx) => (
              <li key={idx} className="text-slate-700">
                <div className="text-sm font-medium flex items-center gap-2">
                  {item.title}
                  <span className="px-2 py-0.5 bg-red-50 text-red-700 text-xs font-bold rounded">
                    {item.status}
                  </span>
                </div>
                {item.details.length > 0 && (
                  <ul className="mt-2 ml-4 space-y-1">
                    {item.details.map((detail, detailIdx) => (
                      <li key={detailIdx} className="text-xs text-slate-600 flex items-start gap-2">
                        <span className="text-red-600">→</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Specialization Focus - Commented out until started */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12 bg-gradient-to-br from-slate-900 to-slate-800 rounded-md p-8 shadow-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <Lightbulb className="w-6 h-6 text-yellow-400" />
            <h2 className="text-2xl font-bold text-white">Secure Software Design Specialization</h2>
          </div>
          <p className="text-slate-300 mb-4 text-sm">University of Colorado - Key Topics:</p>
          <div className="flex flex-wrap gap-2">
            {nowData.specialization.map((topic, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-slate-700/50 text-slate-200 rounded-lg text-xs font-medium border border-slate-600"
              >
                {topic}
              </span>
            ))}
          </div>
        </motion.div> */}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md text-center shadow-xl my-12"
        >
          <h3 className="text-2xl font-bold mb-3 text-white">
            Interested in collaborating?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, projects, or just chatting about backend development and technology.
          </p>
          <a
            href="mailto:jacobsmith@jsmitty.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 font-bold rounded-xl hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center text-slate-400 text-sm"
        >
          <p>
            Inspired by{' '}
            <a
              href="https://nownownow.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              /now pages
            </a>
            {' '}— a living document of what I&apos;m focused on right now.
          </p>
        </motion.div>
      </div>
    </main>
  )
}
