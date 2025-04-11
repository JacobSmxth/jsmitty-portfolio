# Jacob Smith - Personal Portfolio

This is the repository for my personal portfolio website, built with Next.js, React, TypeScript, and Tailwind CSS. It showcases my projects, skills, blog posts, and personal journey as a front-end web developer.

**Live Demo:** [https://www.jsmitty.com/](https://www.jsmitty.com/)

## Key Features

- **Modern Stack:** Built with Next.js 15+ (App Router), React 19, and TypeScript.
- **Responsive Design:** Fully responsive layout using Tailwind CSS.
- **Multiple Views:** Includes distinct sections/pages tailored for different audiences (Visitors, Clients, Recruiters).
- **Content Sections:** Features dedicated areas for About Me, Projects, Blog/Reader, Daily Learnings, and Work Thoughts.
- **Data-Driven:** Content is managed through static data files in the `src/data` directory.
- **Interactive UI:** Includes animations (Framer Motion), modal transitions (Headless UI), and client-side interactivity.
- **Contact Modal:** Centralized contact information popup triggered from various points.
- **Secret Feature:** An Easter egg on the About page (double-click the portrait!).
- **Analytics:** Integrated with Vercel Analytics and Speed Insights.
- **Conditional Layout:** Header and Footer are dynamically shown/hidden based on the route.

## Technologies Used

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI Library:** [React](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/), [PostCSS](https://postcss.org/)
- **UI Components/Transitions:** [Headless UI](https://headlessui.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Markdown Rendering:** `react-markdown`, `remark-gfm`
- **Syntax Highlighting:** `react-syntax-highlighter`
- **Linting:** ESLint
- **Deployment:** [Vercel](https://vercel.com/)

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/JacobSmxth/jsmitty-portfolio.git
    ```
2.  **Navigate to the directory:**
    ```bash
    cd jsmitty-portfolio
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```
4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    # yarn dev
    ```
5.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is configured for and deployed on [Vercel](https://vercel.com/). Pushes to the `main` branch automatically trigger deployments.
