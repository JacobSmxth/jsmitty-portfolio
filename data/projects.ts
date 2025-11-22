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
  label?: string
}

export const featuredProjects: Project[] = [
  {
    name: 'Code Ninjas Bux',
    summary: 'Full reward and progression system for Code Ninjas students with plans for international expansion',
    description: `A comprehensive reward and progression system being built for Code Ninjas students, starting with my local dojo with long-term plans for international expansion.

Key Features:
- Live leaderboards tracking student progress and achievements
- Real-time updates using WebSockets for instant feedback
- Achievement system to motivate and recognize student accomplishments
- Admin dashboard for dojo management and student tracking
- Built with modern stack: React 19, Spring Boot, PostgreSQL

Development Status:
Currently in active development for initial dojo rollout. This system is being designed with scalability in mind to support potential expansion to Code Ninjas locations internationally.

Also co-designing the new Unreal Engine learning pathway from scratch for Code Ninjas Corporate, working directly with the content team.`,
    techStack: ['Java', 'Spring Boot', 'React 19', 'WebSockets', 'PostgreSQL'],
    developmentApproach: 'From Scratch',
    technicalDepth: {},
    learnings: [
      'Real-time communication with WebSockets',
      'Building scalable systems for educational environments',
      'Admin dashboard architecture and role-based access',
      'Student engagement and gamification patterns',
      'Long-term system design for potential international deployment'
    ],
    githubUrl: 'https://github.com/JacobSmxth/code-ninjas-bux',
    featured: true,
    inProgress: true,
    label: 'Production System - Code Ninjas'
  },
  {
    name: 'CentDash',
    summary: 'Personal finance API with JPA inheritance, aggregation endpoints, and CSV to database migration',
    description: `Personal finance API migrating from CSV-based persistence to database-backed architecture with JPA inheritance patterns.

Key Features:
- JPA single-table inheritance using discriminator columns for polymorphic entry types
- Aggregation endpoints providing financial summaries and analytics
- CSV to database migration demonstrating evolution of data persistence strategies
- RESTful API with separate endpoints for income/expense tracking and budget management
- Custom repository queries using JPQL for type-based filtering

Technical Decisions:
- Single-table inheritance over joined/table-per-class for query simplicity
- @PrePersist and @PreUpdate for automatic timestamp management
- Bean Validation for input sanitization
- File-based H2 persistence with automatic schema generation

This project demonstrates the evolution from CentLedger's HashMap approach to proper ORM patterns with JPA.`,
    techStack: ['Java', 'Spring Boot', 'Spring Data JPA', 'H2'],
    developmentApproach: 'From Scratch',
    technicalDepth: {
      linesOfCode: 475
    },
    learnings: [
      'JPA entity lifecycle management and single-table inheritance with discriminator columns',
      'ORM patterns: repository abstraction, entity relationships, and query methods',
      'Database migration strategy: CSV → H2 → (planned) PostgreSQL',
      'Spring Boot auto-configuration and dependency injection'
    ],
    githubUrl: 'https://github.com/jacobsmxth/centdash',
    featured: true,
    inProgress: true,
    label: 'Personal Project'
  },
  {
    name: 'InventoryAPI',
    summary: 'REST API featuring CRUD, stock management, search filtering, validation, and integration tests',
    description: `A full-featured inventory management system demonstrating backend fundamentals and clean Spring Boot patterns.

Key Features:
- Complete CRUD operations with clean REST architecture
- Stock management with validation (prevents negative inventory)
- Search by SKU and category filtering
- Low-stock tracking for consumables with automated alerts
- Real-time inventory statistics (total value, quantity calculations)
- SKU format validation using regex patterns
- Custom exception handling with descriptive error messages
- Integration tests with separate H2 test database

Built to track my actual desk setup inventory while demonstrating clean Spring Boot design patterns and proper testing practices.`,
    techStack: ['Java 21', 'Spring Boot 3.5.6', 'H2', 'JUnit'],
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
      'Business logic implementation (stock management, low-stock alerts)'
    ],
    githubUrl: 'https://github.com/JacobSmxth/inventory-management-api',
    featured: true,
    label: 'Personal Project'
  },
  {
    name: 'Task Manager API',
    summary: 'Task management API with soft delete and recovery, complex filtering, and custom query composition',
    description: `A task management API demonstrating advanced Spring Boot architecture patterns and real-world data management strategies.

Key Technical Features:
- Soft delete with undo/recovery functionality (tasks marked as deleted, not removed)
- Complex filtering combining category + priority ranges in single queries
- Custom query composition with 9 repository methods
- DTO pattern for secure partial updates (prevents mass assignment vulnerabilities)
- Custom exception hierarchy with @RestControllerAdvice for consistent error responses
- Multi-layer validation (entity + controller levels with Bean Validation)
- Toggle completion with automatic timestamp tracking

Technical Highlights:
- Three-layer architecture (Controller → Service → Repository) with clear separation of concerns
- DTOs decouple API contract from database schema, allowing flexible partial updates
- Global exception handler for consistent JSON error responses
- Soft delete implementation allows data recovery without database restoration`,
    techStack: ['Java 21', 'Spring Boot 3.5.6', 'Spring Data JPA'],
    developmentApproach: 'From Scratch',
    technicalDepth: {
      linesOfCode: 291
    },
    learnings: [
      'DTO pattern for secure partial updates with Bean Validation',
      'Custom exception hierarchy with @RestControllerAdvice for centralized error handling',
      'Complex Spring Data JPA query method composition',
      'Soft delete patterns with recovery functionality and timestamp management',
      'Transaction management and service layer separation of concerns'
    ],
    githubUrl: 'https://github.com/JacobSmxth/task-manager-api',
    featured: true,
    label: 'Personal Project'
  }
]

export const archivedProjects: Project[] = [
  {
    name: 'Ichthys.nvim',
    summary: 'Custom Neovim configuration optimized for Java, Go, Rust, C, and TypeScript development',
    description: `My personal Neovim configuration built from scratch and actively maintained for professional development work.

Features:
- LSP integration for Java, Go, Rust, C, and TypeScript
- DAP (Debug Adapter Protocol) for debugging
- Telescope for fuzzy finding and navigation
- Custom snippets and formatting
- Full plugin ecosystem tailored to my workflow
- Optimized for backend development

This configuration represents my daily development environment and is continuously refined based on real-world usage.`,
    techStack: ['Lua', 'Neovim', 'LSP', 'DAP'],
    developmentApproach: 'From Scratch',
    technicalDepth: {},
    learnings: [
      'Lua programming for Neovim configuration',
      'LSP and DAP integration',
      'Plugin management and customization',
      'Developer tooling optimization',
      'Building efficient development workflows'
    ],
    githubUrl: 'https://github.com/JacobSmxth/Ichthys',
    featured: false
  },
  {
    name: 'jsmitty.com',
    summary: 'Portfolio built with Next.js 15, React 19, and Tailwind v4',
    description: `A modern, responsive portfolio website showcasing projects and experience.

Features:
- Next.js 15 App Router with React 19
- Tailwind CSS v4 with custom design system
- Framer Motion animations
- Responsive design with mobile-first approach
- Dynamic project modals
- SEO optimized

Built to showcase both technical skills and design sensibility while providing a professional online presence.`,
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind'],
    developmentApproach: 'Rapid Prototyped',
    technicalDepth: {},
    learnings: [
      'Next.js 15 App Router and React 19 features',
      'Tailwind CSS v4 theming',
      'Modern web development best practices',
      'Professional portfolio design'
    ],
    githubUrl: 'https://github.com/JacobSmxth/jsmitty-portfolio',
    featured: false
  },
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
    featured: false,
    label: 'Academic Project'
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
    featured: false,
    label: 'Client Project'
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
    featured: false,
    label: 'Client Project'
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
    featured: false
  }
]

export const projects: Project[] = [...featuredProjects, ...archivedProjects]
