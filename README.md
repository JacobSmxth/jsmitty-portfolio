# Jacob Smith Portfolio
Astro portfolio site with a dark grayscale theme, sharp edges, featured project writeups, and command palette navigation.

## Features
- **Single-scroll executive summary** - All key info visible in one flow
- **Command palette** - Press `Ctrl+K` (or `Cmd+K` on Mac) to open command palette
- **Keyboard navigation** - Arrow keys to navigate, Enter to execute, Esc to close
- **Dark grayscale theme** - Black background with grayscale accents, no rounded corners
- **Performance-first** - Astro static output, single SCSS entry, minimal JavaScript, optimized assets
- **Background image** - Grayscale mountain background (credit: Fabrizio Conti/Unsplash)

## Project Structure
```
jsmitty-portfolio/
├── astro.config.mjs # Astro config
├── public/
│ ├── assets/
│ │ ├── background.webp # Background image
│ │ └── favicon.png
│ ├── favicon.ico
│ └── JacobSmith_Apr2026.pdf
├── src/
│ ├── pages/
│ │ └── index.astro # Single-page portfolio
│ ├── main.ts # Command palette & keyboard shortcuts
│ └── styles/
│   └── main.scss # Single SCSS file (dark theme)
└── package.json
```

## Development
### Install Dependencies
```bash
bun install
```

### Build (CSS + TypeScript)
```bash
bun run build
```

### Development Mode (watch for changes)
```bash
bun run dev
```

### Other Commands
```bash
bun run preview # Preview the production build
bun run check # Run Astro diagnostics
```

## Viewing the Site
Run the Astro development server:
```bash
bun run dev
```

## Keyboard Shortcuts
- `Ctrl+K` / `Cmd+K` - Open command palette
- `↑` / `↓` - Navigate commands
- `Enter` - Execute command
- `Esc` - Close palette
- Type to filter commands

## Command Palette Actions
- View GitHub/LinkedIn profiles
- Send email/make phone call
- Navigate to sections
- Open project repos
- Copy contact info to clipboard

## Design Philosophy
- **Dark & minimal** - Black background, grayscale palette, sharp edges
- **Performance-focused** - Static Astro output, single SCSS entry, basic TypeScript
- **Keyboard-first** - Command palette for power users
- **Single-scroll** - Executive summary format, all info in one page
- **Bun-first tooling** - Bun manages dependencies and runs all scripts
- **AI-assisted development** — Claude was used to rapidly expand and directly add changes from my resume to the site

## Tech Stack
- HTML5
- Astro
- SCSS (single file, modern `@use` syntax)
- TypeScript (basic static typing)
- Bun package manager/runtime for scripts

## Credits
Background photo by [Fabrizio Conti](https://unsplash.com/@conti_photos) on [Unsplash](https://unsplash.com/photos/grayscale-photograph-of-mountain-ranges-9oKZm8YgcnA)

*Parts (if not most) of the codebase were generated and iterated using Claude Code.*
