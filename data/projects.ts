export interface Project {
  name: string
  summary: string
  description: string
  techStack: string[]
  aiUsage: 'None' | 'Low' | 'Medium' | 'High'
  aiDetails?: string
  learnings: string[]
  url?: string
  githubUrl?: string
  featured?: boolean
}

export const featuredProjects: Project[] = [
  {
    name: 'Inventory Management API',
    summary: 'Production-ready REST API with advanced features and comprehensive testing',
    description: `A full-featured inventory management system built from scratch to demonstrate backend fundamentals and production-ready patterns.

Key Features:
- Complete CRUD operations with clean REST architecture
- Advanced search by SKU and category filtering
- Low-stock tracking for consumables with automated alerts
- Stock adjustment system with validation (prevents negative inventory)
- Real-time inventory statistics (total value, quantity calculations)
- SKU format validation using regex patterns
- Custom exception handling with descriptive error messages
- Integration tests with separate H2 test database
- File-based H2 database for data persistence

Built to track my actual desk setup inventory while demonstrating enterprise-level API design patterns.`,
    techStack: ['Java', 'Spring Boot', 'Spring Data JPA', 'H2 Database', 'JUnit', 'REST API'],
    aiUsage: 'None',
    aiDetails: 'Built entirely from scratch to demonstrate mastery of Spring Boot fundamentals and best practices',
    learnings: [
      'Advanced Spring Data JPA queries and custom repository methods',
      'Comprehensive input validation and error handling strategies',
      'Integration testing with separate test database configuration',
      'RESTful API design with proper HTTP status codes',
      'Business logic implementation (stock management, low-stock alerts)',
      'Production-ready code structure and documentation'
    ],
    githubUrl: 'https://github.com/JacobSmxth/Inventory-management-api',
    featured: true
  },
  {
    name: 'CentLedger API',
    summary: 'Financial ledger API - first Java Spring project demonstrating fintech domain knowledge',
    description: `My first working Spring Boot API, built to track financial transactions. This project represents the foundation that led to more advanced work like the Inventory Management API.

While basic in implementation, it demonstrates:
- Understanding of financial domain concepts
- Complete project lifecycle from concept to deployment
- Foundation in Java and Spring Boot fundamentals
- HashMap-based data structure with CSV persistence
- RESTful endpoint design

This project is significant because it shows where I started and the progression to more sophisticated systems. The financial tracking domain is directly relevant to fintech work.`,
    techStack: ['Java', 'Spring Boot', 'REST API', 'CSV'],
    aiUsage: 'None',
    aiDetails: 'Built entirely without AI to ensure deep understanding of Java and Spring Boot fundamentals',
    learnings: [
      'Java Spring Boot fundamentals and project structure',
      'RESTful API design principles',
      'Data persistence strategies',
      'Financial domain modeling',
      'The value of starting simple and iterating'
    ],
    githubUrl: 'https://github.com/JacobSmxth/CentLedger',
    featured: true
  },
  {
    name: 'Washington Archives',
    summary: 'Large-scale content management system with 14 sections and 52 sources',
    description: `A comprehensive historical research website demonstrating complex information architecture and data organization skills.

Contains:
- 14 detailed sections with hierarchical organization
- 10,000+ words of carefully structured content
- 52 cited sources with proper academic formatting
- Custom TypeScript data modeling (sections.ts, sources.ts)
- File-based database system for content management
- Clean, academic design with focus on readability

This project showcases ability to:
- Handle large-scale information architecture
- Create structured data models in TypeScript
- Organize and present complex datasets effectively
- Build content management systems from scratch`,
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'File-based CMS'],
    aiUsage: 'Low',
    aiDetails: 'Minimal AI assistance - most content organization and styling done independently',
    learnings: [
      'Large-scale content organization and information architecture',
      'TypeScript for structured data modeling',
      'Academic citation systems and proper documentation',
      'Building custom CMS solutions with TypeScript',
      'Rapid prototyping with existing design patterns'
    ],
    url: 'https://washingtonarchives.vercel.app',
    githubUrl: 'https://github.com/JacobSmxth/washingtonarchives',
    featured: true
  }
]

export const archivedProjects: Project[] = [
  {
    name: 'GoatRewards.com',
    summary: 'Client project: Unified leaderboard from multiple data sources',
    description: `A custom leaderboard platform built for a Twitch streamer's community, merging data from 2 different APIs into a single unified system.

Real client work with actual users:
- Real-time leaderboard updates from multiple data sources
- Automated raffle system with winner selection
- Complex CMS for content management
- Custom design tailored to client specifications
- API data merging and synchronization

This project demonstrates:
- Client communication and requirements gathering
- Working with real users and stakeholder feedback
- API integration and data transformation
- Building scalable systems for production use`,
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Firestore', 'API Integration'],
    aiUsage: 'Medium',
    aiDetails: 'AI helped with UI boilerplate; architecture and system design were done manually',
    learnings: [
      'API integration and data merging strategies',
      'Complex state management in production React apps',
      'Building scalable CMS architectures',
      'Client-driven design and iteration',
      'Professional client communication'
    ],
    url: 'https://goatrewards.com',
    featured: false
  },
  {
    name: 'PR Tracker API',
    summary: 'Practice project: Built from scratch in ~1 hour to test knowledge retention',
    description: `A personal fitness tracking API built entirely from memory without reference materials to validate Spring Boot knowledge retention.

Features:
- Complete CRUD operations for tracking personal records
- One-rep max calculation algorithms
- Clean entity relationships and data modeling
- Built quickly to demonstrate efficient development
- Tracks my actual gym PRs for personal use

This project serves as:
- A learning exercise to reinforce Spring Data JPA patterns
- Evidence of ability to build APIs without external references
- Practice with mathematical algorithms and calculations
- Personal tool that I actually use

While not a portfolio centerpiece, it demonstrates understanding of core patterns and ability to work independently.`,
    techStack: ['Java', 'Spring Boot', 'Spring Data JPA', 'H2 Database', 'REST API'],
    aiUsage: 'None',
    aiDetails: 'Built from memory without any AI assistance or reference materials',
    learnings: [
      'Knowledge retention and application without references',
      'Spring Data JPA patterns and best practices',
      'Entity relationship design',
      'Algorithm implementation (one-rep max calculations)',
      'Rapid prototyping and efficient development'
    ],
    githubUrl: 'https://github.com/JacobSmxth/pr-api',
    featured: false
  },
  {
    name: 'RainbetVIP.com',
    summary: 'Client project: Automated content management with external integrations',
    description: `An information and promotional website with automated content management, built for a client with minimal AI assistance.

Key features:
- Telegram bot integration for automated code distribution
- News API integration for industry updates
- Automated referral code system
- External link management
- Professional, modern design

This project demonstrates:
- Independent problem-solving with minimal AI usage
- Integration of multiple external services (Telegram, News API)
- Building automated workflows
- Professional client deliverables`,
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Firestore', 'Telegram Bot API', 'News API'],
    aiUsage: 'Low',
    aiDetails: 'Minimal AI assistance - most problem-solving and implementation done independently',
    learnings: [
      'Third-party API integration (Telegram, News)',
      'Automated content workflow design',
      'Bot integration patterns',
      'Independent problem-solving',
      'Professional client communication'
    ],
    url: 'https://rainbetvip-dev.vercel.app',
    featured: false
  },
  {
    name: 'This Portfolio',
    summary: 'Modern portfolio built with Next.js 15, React 19, and Tailwind CSS v4',
    description: `A modern, responsive portfolio website showcasing projects and experience.

Features:
- Next.js 15 App Router with React 19
- Tailwind CSS v4 with custom design system
- Framer Motion animations
- Responsive design with mobile-first approach
- Dynamic project and experience modals
- Smart navigation with scroll behavior
- Custom line art backgrounds
- SEO optimized

Built to showcase both technical skills and design sensibility while providing a professional online presence.`,
    techStack: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS v4', 'Framer Motion'],
    aiUsage: 'Medium',
    aiDetails: 'AI-assisted frontend development to allow focus on backend/Java learning, as I\'m primarily backend-focused',
    learnings: [
      'Next.js 15 App Router and React 19 features',
      'Tailwind CSS v4 theming and custom design systems',
      'Complex animation orchestration with Framer Motion',
      'Modern web development best practices',
      'Professional portfolio design and UX'
    ],
    githubUrl: 'https://github.com/JacobSmxth/jsmitty-portfolio',
    featured: false
  }
]

export const projects: Project[] = [...featuredProjects, ...archivedProjects]
