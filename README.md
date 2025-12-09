# Jacob Smith Portfolio

Minimalist, performance-focused portfolio site with dark grayscale theme, sharp edges, and command palette navigation.

## Features

- **Single-scroll executive summary** - All key info visible in one flow
- **Command palette** - Press `Ctrl+K` (or `Cmd+K` on Mac) to open command palette
- **Keyboard navigation** - Arrow keys to navigate, Enter to execute, Esc to close
- **Dark grayscale theme** - Black background with grayscale accents, no rounded corners
- **Performance-first** - Single SCSS file, minimal JavaScript, optimized assets
- **Background image** - Grayscale mountain background (credit: Fabrizio Conti/Unsplash)

## Project Structure

```
jsmitty-portfolio/
├── index.html              # Single-page portfolio
├── assets/
│   └── background.jpg      # Background image
├── src/
│   ├── main.ts            # Command palette & keyboard shortcuts
│   └── styles/
│       └── main.scss      # Single SCSS file (dark theme)
├── dist/                  # Compiled output (generated)
│   ├── css/
│   │   └── main.css
│   └── js/
│       └── main.js
└── package.json
```

## Development

### Install Dependencies
```bash
npm install
```

### Build (CSS + TypeScript)
```bash
npm run build
```

### Development Mode (watch for changes)
```bash
npm run dev
```

### Individual Commands
```bash
npm run build:css    # Build CSS only
npm run build:ts     # Build TypeScript only
npm run watch:css    # Watch CSS
npm run watch:ts     # Watch TypeScript
```

## Viewing the Site

Open `index.html` in your browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node http-server
http-server -p 8000

# Then visit http://localhost:8000
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
- **Performance-focused** - Single SCSS file, basic TypeScript, no frameworks
- **Keyboard-first** - Command palette for power users
- **Single-scroll** - Executive summary format, all info in one page

## Tech Stack

- HTML5
- SCSS (single file, modern `@use` syntax)
- TypeScript (basic static typing)
- No frameworks - vanilla JS

## Credits

Background photo by [Fabrizio Conti](https://unsplash.com/@conti_photos) on [Unsplash](https://unsplash.com/photos/grayscale-photograph-of-mountain-ranges-9oKZm8YgcnA)
