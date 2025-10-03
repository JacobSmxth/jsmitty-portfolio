export interface Experience {
  title: string
  company: string
  period: string
  summary: string
  description: string
  responsibilities?: string[]
  learnings?: string[]
}

export const experiences: Experience[] = [
  {
    title: 'Content Team Member',
    company: 'Code Ninjas Corporate',
    period: '2025 - Present',
    summary: 'Remote collaboration on educational game development and curriculum translation',
    description: `Collaborate remotely with cross-functional teams across USA and Canada to develop and maintain educational programming curriculum. Work involves game development, QA testing, and multi-platform content adaptation.`,
    responsibilities: [
      'Collaborate with cross-functional teams across USA and Canada using Microsoft suite',
      'Translate Unity C# projects to Godot GDScript for multi-platform educational curriculum',
      'Perform QA testing on pre-release belt curriculum to ensure quality standards',
      'Contribute to programming curriculum development using Git-based workflow',
      'Work in agile sprints to deliver educational game projects and content updates'
    ],
    learnings: [
      'Remote collaboration with distributed teams',
      'Game engine translation (Unity/C# to Godot/GDScript)',
      'QA testing methodologies and quality assurance',
      'Git-based collaborative development workflows',
      'Agile sprint planning and execution'
    ]
  },
  {
    title: 'Sensei (Instructor)',
    company: 'Code Ninjas',
    period: '2025 - Present',
    summary: 'Teaching programming fundamentals and debugging skills to students ages 7-14',
    description: `Teach programming fundamentals through project-based learning, working with students on both block coding and text-based languages. Guide students through computational thinking and provide advanced debugging support for Black Belt students working in C#.`,
    responsibilities: [
      'Teach JavaScript fundamentals and programming logic to students ages 7-14',
      'Debug and troubleshoot C# code for advanced Black Belt students',
      'Guide students through project-based learning with block coding and text-based languages',
      'Mentor students in computational thinking and problem-solving techniques',
      'Adapt teaching approaches to different learning styles and skill levels'
    ],
    learnings: [
      'Teaching complex technical concepts to diverse age groups',
      'Debugging strategies and troubleshooting methodologies',
      'Project-based learning and curriculum delivery',
      'Mentorship techniques for developing problem-solving skills',
      'JavaScript and C# in educational contexts'
    ]
  },
  {
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    period: '2024 - Present',
    summary: 'Building custom websites and applications for clients',
    description: `Developing custom web solutions for clients, from simple landing pages to complex full-stack applications. Managing all aspects of projects from initial consultation to deployment and maintenance.`,
    responsibilities: [
      'Client consultation and requirement gathering',
      'Full-stack web development',
      'Project management and timeline coordination',
      'Post-launch support and maintenance'
    ],
    learnings: [
      'Client communication and expectation management',
      'Time estimation and project scoping',
      'Balancing speed with quality',
      'Business side of software development'
    ]
  },
  {
    title: 'Lead Stringer & Checker',
    company: 'Tennis Warehouse',
    period: '2023 - 2025',
    summary: 'Led quality assurance and training programs for racquet stringing operations',
    description: `Led quality assurance processes for professional racquet stringing operations while managing peer training programs. Implemented process improvements and developed strong organizational skills in a high-volume production environment.`,
    responsibilities: [
      'Led quality assurance processes for racquet stringing operations',
      'Managed peer training programs and onboarding for new stringers',
      'Implemented process improvements to increase efficiency and quality',
      'Maintained attention to detail in high-volume environment',
      'Performed quality checks and ensured consistency across all work',
      'Trained team members on precision techniques and quality standards'
    ],
    learnings: [
      'Quality assurance methodologies and process improvement',
      'Leadership through peer training and mentorship',
      'Attention to detail in high-volume operations',
      'Time management and efficiency optimization',
      'Organizational skills and systematic approaches to work',
      'Maintaining quality standards under pressure'
    ]
  },
  {
    title: 'Crew Member',
    company: 'Dunkin Donuts',
    period: '2021 - 2022',
    summary: 'First job - learned work ethic and customer service',
    description: `My first job. Learned the basics of working in a fast-paced environment, customer service, and being part of a team. Built foundational work ethic and responsibility.`,
    responsibilities: [
      'Customer service at register and drive-through',
      'Food preparation and quality control',
      'Maintaining cleanliness standards',
      'Cash handling and POS operations'
    ],
    learnings: [
      'Work ethic and showing up consistently',
      'How to work under pressure',
      'Basic customer service skills',
      'Team coordination'
    ]
  }
]
