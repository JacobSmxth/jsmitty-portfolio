# Portfolio - Jacob Smith

Personal portfolio website built with Next.js 15, featuring live GitHub integration and interactive navigation.

## Overview

This portfolio includes:

- **Home page** with hero section, featured projects, GitHub activity feed, skills, timeline, and contact form
- **About page** with detailed background and experience
- **Repositories page** (`/repos`) that fetches and displays GitHub repositories with README rendering and commit history
- **Dynamic repository pages** (`/repos/[repo]`) showing individual repo details
- **Now page** (`/now`) for current activities and focus
- **Uses page** (`/uses`) documenting my development setup and tools
- **Services page** for professional offerings
- **Command palette** (press `Cmd/Ctrl + K`) for keyboard navigation throughout the site
- **Reusable UI kit** (Buttons, Cards, Headings) for consistent styling

## Tech Stack

- **Framework:** Next.js 16 (App Router) on React 19
- **Styling:** Tailwind CSS v4 + custom UI kit (Buttons, Cards, GradientHeading)
- **Animations:** Framer Motion (GSAP available for advanced sequences)
- **Icons:** Lucide React, React Icons
- **Markdown:** react-markdown with syntax highlighting (rehype-highlight, remark-gfm)
- **Language:** TypeScript

## Key Features

- GitHub API integration for live repository data, READMEs, and commit history
- Keyboard-driven command palette for quick navigation
- Modal-based project and experience viewers
- Animated logo carousel and skill displays
- Interactive timeline component
- Markdown rendering with GitHub Flavored Markdown support
- Unified palette/typography with shared UI components for CTAs and cards

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
/app
  /about          - About page
  /contact        - Contact page
  /now            - Current activities
  /repos          - GitHub repositories with dynamic [repo] routes
  /services       - Services page
  /uses           - Development setup and tools
/components
  /sections       - Homepage sections (Hero, Projects, Skills, Timeline, etc.)
  CommandPalette  - Keyboard navigation
  ExperienceModal - Experience detail viewer
  ProjectModal    - Project detail viewer
  LogoLoop        - Animated technology logos
/data
  experiences.ts  - Professional experience data
  projects.ts     - Portfolio project data
```

## Contact

- Email: jacobsmith@jsmitty.com
- LinkedIn: [jacobsmxth](https://linkedin.com/in/jacobsmxth)
- GitHub: [jacobsmxth](https://github.com/jacobsmxth)





