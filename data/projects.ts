export interface Project {
  name: string
  summary: string
  description: string
  techStack: string[]
  developmentApproach: 'From Scratch' | 'Rapid Prototyped' | 'Documentation-First'
  technicalDepth: {
    linesOfCode?: number
    testCoverage?: number
    apiEndpoints?: number
    performanceMetrics?: {
      requestsPerSec?: number
      responseTime?: number
    }
    databaseComplexity?: {
      tables?: number
      relationships?: number
    }
  }
  learnings: string[]
  url?: string
  githubUrl?: string
  featured?: boolean
  inProgress?: boolean
}

export const featuredProjects: Project[] = [
  {
    name: 'Inventory Management API',
    summary: 'Portfolio-ready REST API with comprehensive testing and clean Spring Boot patterns',
    description: `A full-featured inventory management system built from scratch to demonstrate backend fundamentals and clean coding practices.

Key Features:
- Complete CRUD operations with clean REST architecture
- Search by SKU and category filtering
- Low-stock tracking for consumables with automated alerts
- Stock adjustment system with validation (prevents negative inventory)
- Real-time inventory statistics (total value, quantity calculations)
- SKU format validation using regex patterns
- Custom exception handling with descriptive error messages
- Integration tests with separate H2 test database
- File-based H2 database for data persistence

Built to track my actual desk setup inventory while demonstrating clean Spring Boot design patterns.`,
    techStack: ['Java', 'Spring Boot', 'Spring Data JPA', 'H2 Database', 'JUnit', 'REST API'],
    developmentApproach: 'From Scratch',
    technicalDepth: {
      linesOfCode: 412,
      apiEndpoints: 9
    },
    learnings: [
      'Spring Data JPA queries and custom repository methods',
      'Input validation and error handling strategies',
      'Integration testing with separate test database configuration',
      'RESTful API design with proper HTTP status codes',
      'Business logic implementation (stock management, low-stock alerts)',
      'Clean code structure and documentation'
    ],
    githubUrl: 'https://github.com/JacobSmxth/Inventory-management-api',
    featured: true
  },
  {
    name: 'CentDash',
    summary: 'Personal finance API demonstrating migration from CSV to database-backed architecture',
    description: `A complete rebuild of CentLedger API, migrating from CSV-based persistence to a proper database-backed REST API with type-safe inheritance modeling.

What I built:
- RESTful API with separate endpoints for income/expense tracking and budget management
- Single-table inheritance using JPA discriminator columns for polymorphic entry types
- Custom repository queries using JPQL for type-based filtering
- Aggregate endpoints providing formatted financial summaries (net totals, income/expense breakdowns)
- File-based H2 persistence with automatic schema generation

Key technical decisions:
- Chose single-table inheritance over joined/table-per-class for simpler queries
- Implemented discriminator columns for Entry subtypes (Income, Expense)
- Used @PrePersist and @PreUpdate for timestamp management
- Applied Bean Validation for input sanitization

This fork represents the evolution from CentLedger's HashMap approach to proper ORM patterns with JPA.

Next phases: JWT authentication, PostgreSQL migration, exception handling, reporting/analytics`,
    techStack: ['Java', 'Spring Boot', 'Spring Data JPA', 'H2 Database', 'Gradle'],
    developmentApproach: 'From Scratch',
    technicalDepth: {
      linesOfCode: 475,
      apiEndpoints: 8
    },
    learnings: [
      'JPA entity lifecycle management (@PrePersist, @PreUpdate) and single-table inheritance with discriminator columns',
      'ORM patterns: repository abstraction, entity relationships, and query methods',
      'Spring Boot auto-configuration, dependency injection, and application.properties setup',
      'Database migration strategy: CSV → H2 → (planned) PostgreSQL'
    ],
    githubUrl: 'https://github.com/jacobsmxth/centdash',
    featured: true,
    inProgress: true
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
    developmentApproach: 'From Scratch',
    technicalDepth: {
      linesOfCode: 453,
      apiEndpoints: 5
    },
    learnings: [
      'Java Spring Boot fundamentals and project structure',
      'RESTful API design principles',
      'Data persistence strategies',
      'Financial domain modeling',
      'The value of starting simple and iterating'
    ],
    githubUrl: 'https://github.com/JacobSmxth/CentLedger',
    featured: true
  }
]

export const archivedProjects: Project[] = [
  {
    name: 'Washington Archives',
    summary: 'Comprehensive historical research website with well-organized content and citations',
    description: `A historical research website demonstrating content organization and proper academic documentation.

Contains:
- 14 detailed sections with hierarchical organization
- 10,000+ words of carefully structured content
- 52 cited sources with proper academic formatting
- TypeScript interfaces for structured content organization
- Clean, academic design with focus on readability

This project showcases ability to:
- Organize large amounts of research content effectively
- Implement proper citation and documentation systems
- Create clean, readable interfaces for content presentation
- Structure data using TypeScript`,
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    developmentApproach: 'Rapid Prototyped',
    technicalDepth: {
      linesOfCode: 6019,
    },
    learnings: [
      'Content organization and information architecture',
      'TypeScript interfaces for structured data',
      'Academic citation systems and proper documentation',
      'Working with Next.js for content-heavy sites',
      'Creating clean, readable user interfaces'
    ],
    url: 'https://washingtonarchives.vercel.app',
    githubUrl: 'https://github.com/JacobSmxth/washingtonarchives',
    featured: false
  },
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
    developmentApproach: 'Rapid Prototyped',
    technicalDepth: {},
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
    name: 'Workout Tracker API',
    summary: 'REST API with JPA entity relationships - practice project',
    description: `A workout tracking API built to practice Spring Data JPA relationships beyond basic CRUD.

  Features three-level entity structure:
  - Sessions (workout dates)
  - Exercises (movements within a session)
  - Sets (weight/reps for each exercise)

  Demonstrates JPA relationship patterns (@OneToMany/@ManyToOne), foreign key management, and cascade operations. Built in a few hours to solidify understanding of entity relationships after completing InventoryAPI.

  Basic CRUD operations implemented across all entities with proper HTTP status codes.`,
    techStack: ['Java 21', 'Spring Boot 3.5.6', 'Spring Data JPA', 'H2 Database'],
    developmentApproach: 'From Scratch',
    technicalDepth: {
      linesOfCode: 512,
      apiEndpoints: 11,
    },
    learnings: [
      'JPA bidirectional relationships and foreign keys',
      'Cascade operations for nested entity saves',
      'Preventing JSON serialization loops',
      'Spring Data JPA query methods'
    ],
    githubUrl: 'https://github.com/JacobSmxth/pr-api',
    featured: false
  },
  {
    name: 'RainbetVIP.com',
    summary: 'Client project: Automated content management with external integrations',
    description: `An information and promotional website with automated content management, built for a real client.

Key features:
- Telegram bot integration for automated code distribution
- News API integration for industry updates
- Automated referral code system
- External link management
- Professional, modern design

This project demonstrates:
- Client communication and delivering to specifications
- Integration of multiple external services (Telegram, News API)
- Building automated workflows
- Professional client deliverables`,
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Firestore', 'Telegram Bot API', 'News API'],
    developmentApproach: 'Rapid Prototyped',
    technicalDepth: {},
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
    developmentApproach: 'Rapid Prototyped',
    technicalDepth: {},
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
