# Jacob Smith - Cyberpunk Portfolio

A cutting-edge, cyberpunk-themed portfolio website showcasing systems programming expertise, cybersecurity knowledge, and educational content creation. Built with vanilla HTML, CSS, and JavaScript featuring interactive animations, matrix rain effects, and a responsive design.

## 🌟 Features

### 🎨 Visual Design
- **Cyberpunk Aesthetic**: Dark theme with neonified Spiderman colors
- **Interactive Matrix Rain**: Multiple variants (traditional, binary, code snippets)
- **Particle System**: Interactive particles that respond to mouse movement
- **Glitch Effects**: Text glitch animations and RGB split effects
- **Neon Glow**: CSS-based neon lighting effects throughout

### 🚀 Interactive Elements
- **Theme Toggle**: Switch between Cyberpunk and Ghost Protocol themes
- **Smooth Scrolling**: Enhanced navigation with section highlighting
- **Projects Carousel**: Sliding showcase with arrow navigation and indicators
- **Interactive Timeline**: Animated career journey with hover effects
- **Terminal Contact Form**: Command-line styled contact interface
- **Skill Bars**: Animated progress indicators with glow effects

### 📱 Responsive Design
- **Mobile-First**: Optimized for all screen sizes
- **Touch Support**: Swipe gestures for carousel navigation
- **Accessibility**: Reduced motion support and keyboard navigation
- **Performance**: Optimized animations and lazy loading

## 🛠️ Tech Stack

### Core Technologies
- **HTML5**: Semantic structure with accessibility features
- **CSS3**: Custom properties, Grid, Flexbox, and advanced animations
- **JavaScript ES6+**: Modular architecture with classes and modules

### Libraries & APIs
- **AOS (Animate On Scroll)**: Scroll-triggered animations
- **Typed.js**: Typewriter effect for hero section
- **Three.js**: 3D effects and enhanced visuals
- **GitHub API**: Live repository data integration

### Development Tools
- **CSS Custom Properties**: Dynamic theming system
- **Intersection Observer**: Performance-optimized scroll effects
- **Canvas API**: Matrix rain and particle effects
- **Local Storage**: Theme preference persistence

## 📁 Project Structure

```
portfolio/
├── index.html                 # Main HTML file
├── styles/
│   ├── main.css              # Core styles and layout
│   ├── animations.css        # Animation definitions
│   └── components.css        # Component-specific styles
├── js/
│   ├── main.js              # Main application logic
│   ├── matrix-rain.js       # Matrix rain effect system
│   ├── particles.js         # Particle system manager
│   └── projects-data.js     # Project data and GitHub integration
├── assets/
│   ├── favicon.png          # Site favicon
│   └── projects/            # Project screenshots
└── README.md               # This file
```

## 🎯 Key Sections

### 1. Hero Section - "The Matrix Awakens"
- Animated typing effect with role rotation
- Floating code snippets (C and Go)
- Spiderman quote integration
- Call-to-action buttons with hover effects

### 2. Interactive Timeline - "Journey Through Code"
- **Education**: UNG Dahlonega - Double Major in Cybersecurity & Computer Science
- **Experience**: Tennis Warehouse Lead Stringer & Checker
- **Current**: Code Ninjas Sensei and Education Team Content Creator
- Animated markers with pulse effects

### 3. Skills Matrix - "Digital Arsenal"
- **Systems Programming**: C (Expert), Assembly (Advanced), Go (Intermediate)
- **Web Technologies**: JavaScript, HTML5/CSS3, Python
- **Tools & Platforms**: Linux, Git/GitHub, Neovim/Zsh
- **Specializations**: Cybersecurity, Low-level Systems, Network Protocols

### 4. Projects Carousel - "Code Gallery"
- **learning-lab**: Consolidated learning archive across C, Go, and systems
- **dotfiles**: Custom Linux configuration (Hyprland, Neovim, Zsh, Waybar)
- **Portfolio Website**: This cyberpunk-themed portfolio
- **Systems Projects**: Memory allocators, OS components, network programming
- **Cybersecurity Tools**: Educational security analysis tools
- **Code Ninjas Projects**: Teaching resources and educational games

### 5. Experience Grid - "Professional Journey"
- **Code Ninjas Sensei**: Teaching programming fundamentals and mentoring
- **Education Team Content Creator**: Curriculum development and QA
- **Tennis Warehouse**: Quality control and team leadership

### 6. Contact Terminal - "Initialize Connection"
- Terminal-style contact form with command-line interface
- Real-time terminal output simulation
- Social media integration (GitHub, LinkedIn, Email)
- Current status and availability information

## 🎨 Color Scheme

### Neon Spiderman Colors
- **Primary**: `#ff0040` (Neon Red)
- **Secondary**: `#0080ff` (Electric Blue)
- **Accent**: `#ff4080` (Hot Pink)

### Supporting Colors
- **Success**: `#00ff80` (Cyber Green)
- **Warning**: `#ffff00` (Electric Yellow)
- **CTA**: `#ff8000` (Neon Orange)
- **Effects**: `#8040ff` (Purple Glow)

### Dark Theme Base
- **Background**: `#0a0a0a` (Deep Black)
- **Sections**: `#1a1a1a` (Dark Gray)
- **Cards**: `#2a2a2a` (Medium Gray)

## 🚀 Getting Started

### Prerequisites
- Modern web browser with JavaScript enabled
- Local web server (for development)

### Installation
1. Clone or download the portfolio files
2. Serve the files using a local web server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```
3. Open `http://localhost:8000` in your browser

### Development
- Edit HTML structure in `index.html`
- Modify styles in the `styles/` directory
- Update JavaScript functionality in the `js/` directory
- Replace placeholder images in `assets/projects/`

## 🎮 Interactive Features

### Keyboard Shortcuts
- **Ctrl/Cmd + T**: Toggle theme
- **Escape**: Close modals and mobile menu
- **Ctrl + Shift + F**: Toggle FPS display (development)

### Mouse Interactions
- **Matrix Rain**: Interactive ripples on mouse movement
- **Particles**: Attraction and growth effects near cursor
- **Project Cards**: Hover for overlay and click for modal
- **Navigation**: Smooth scroll to sections

### Touch Gestures
- **Carousel**: Swipe left/right to navigate projects
- **Mobile Menu**: Tap to toggle navigation
- **Scroll**: Natural touch scrolling with momentum

## 📊 Performance Features

### Optimization Techniques
- **Lazy Loading**: Images and heavy animations
- **Intersection Observer**: Efficient scroll handling
- **RequestAnimationFrame**: Smooth 60fps animations
- **CSS Containment**: Isolated animation layers
- **Debounced Events**: Optimized resize and scroll handlers

### Accessibility
- **Reduced Motion**: Respects user preferences
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: Semantic HTML and ARIA labels
- **Color Contrast**: WCAG compliant color ratios

## 🔧 Customization

### Themes
- Modify CSS custom properties in `:root` for color changes
- Add new themes by extending the theme toggle system
- Update theme names and labels in JavaScript

### Content
- Update personal information in `index.html`
- Modify project data in `js/projects-data.js`
- Replace images in `assets/` directory
- Customize Spiderman quotes throughout sections

### Effects
- Adjust matrix rain settings in `js/matrix-rain.js`
- Modify particle behavior in `js/particles.js`
- Customize animations in `styles/animations.css`

## 🌐 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (usually `main`)
4. Access via `https://username.github.io/repository-name`

### Netlify
1. Connect GitHub repository to Netlify
2. Set build command: (none needed for static site)
3. Set publish directory: `/` (root)
4. Deploy automatically on git push

### Vercel
1. Import GitHub repository to Vercel
2. Configure as static site
3. Deploy with automatic HTTPS and CDN

## 📈 Analytics & Monitoring

### Performance Monitoring
- Built-in FPS counter for development
- Performance API integration
- Automatic quality adjustment based on device capabilities

### User Analytics (Optional)
- Google Analytics integration ready
- Custom event tracking for interactions
- Performance metrics collection

## 🤝 Contributing

This is a personal portfolio, but feedback and suggestions are welcome:

1. **Issues**: Report bugs or suggest improvements
2. **Pull Requests**: Submit fixes or enhancements
3. **Discussions**: Share ideas for new features

## 📄 License

MIT License - Feel free to use this code as inspiration for your own portfolio.

## 🎯 Future Enhancements

### Planned Features
- **Blog Integration**: Technical writing section
- **Project Filtering**: Category-based project filtering
- **Dark/Light Mode**: Additional theme options
- **Internationalization**: Multi-language support
- **PWA Features**: Offline functionality and app-like experience

### Technical Improvements
- **WebGL Shaders**: Enhanced visual effects
- **Service Worker**: Caching and offline support
- **Web Components**: Modular component architecture
- **TypeScript**: Type safety and better development experience

## 📞 Contact

- **Website**: [jsmitty.com](https://jsmitty.com)
- **GitHub**: [@jacobsmxth](https://github.com/jacobsmxth)
- **LinkedIn**: [jacobsmxth](https://linkedin.com/in/jacobsmxth)
- **Email**: jacob@jsmitty.com

---

> *"With great power comes great responsibility."* — Ben Parker

Built with 💻 and ⚡ by Jacob Smith | Systems Programmer & Cybersecurity Student