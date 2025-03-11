const services = [
  {
    id: 1,
    title: "Landing Page (Vanilla)",
    description: "Clean, effective landing pages built with HTML, CSS, and JavaScript that load quickly and convert visitors.",
    category: "web",
    icon: "🏠",
    popular: false,
    rate: 25 
  },
  {
    id: 2,
    title: "Landing Page (React)",
    description: "Dynamic, interactive landing pages built with React for a modern user experience with component-based architecture.",
    category: "web",
    icon: "⚛️",
    popular: false,
    rate: 30
  },
  {
    id: 3,
    title: "Multi-Page Website (Vanilla)",
    description: "Complete websites with multiple pages built using vanilla HTML, CSS, and JavaScript for maximum compatibility.",
    category: "web",
    icon: "📄",
    popular: false,
    rate: 28
  },
  {
    id: 4,
    title: "Multi-Page Website (React)",
    description: "Full-featured websites with React Router for seamless navigation and a smooth, app-like user experience.",
    category: "web",
    icon: "📱",
    popular: true,
    rate: 35
  },
  {
    id: 5,
    title: "UI/UX Improvements",
    description: "Strategic enhancements to your existing interfaces to improve usability, accessibility, and user satisfaction.",
    category: "design",
    icon: "🎨",
    popular: false,
    rate: 30
  },
  {
    id: 6,
    title: "Full Website Redesign",
    description: "Complete overhaul of your website's design, information architecture, and functionality.",
    category: "design",
    icon: "🔄",
    popular: true,
    rate: 35
  },
  {
    id: 7,
    title: "Modernize Website",
    description: "Update your dated website with contemporary design trends, technologies, and best practices.",
    category: "design",
    icon: "✨",
    popular: false,
    rate: 32
  },
  {
    id: 8,
    title: "Basic Mobile Optimization",
    description: "Ensure your website functions well on mobile devices with responsive adjustments and touch-friendly interfaces.",
    category: "optimization",
    icon: "📱",
    popular: false,
    rate: 25
  },
  {
    id: 9,
    title: "Full Responsive Design Overhaul",
    description: "Comprehensive mobile-first approach to make your site look and perform perfectly on all devices and screen sizes.",
    category: "optimization",
    icon: "📐",
    popular: true,
    rate: 32
  },
  {
    id: 10,
    title: "Add Sliders, Modals, or Dropdowns",
    description: "Enhance your user interface with interactive elements that improve navigation and content presentation.",
    category: "design",
    icon: "🔽",
    popular: false,
    rate: 25
  },
  {
    id: 11,
    title: "API Integrations",
    description: "Connect your website to third-party services and data sources through API integrations.",
    category: "web",
    icon: "🔌",
    popular: false,
    rate: 35
  },
  {
    id: 12,
    title: "Basic CSS Animations",
    description: "Add subtle motion and transitions to create more engaging and polished user experiences.",
    category: "animation",
    icon: "💫",
    popular: false,
    rate: 25
  },
  {
    id: 13,
    title: "Scroll-Based Animations",
    description: "Create dynamic content reveals and parallax effects that respond to user scrolling.",
    category: "animation",
    icon: "📜",
    popular: false,
    rate: 28
  },
  {
    id: 14,
    title: "Advanced UI Interactions (Framer Motion, GSAP)",
    description: "Implement sophisticated animations and micro-interactions using professional animation libraries.",
    category: "animation",
    icon: "✨",
    popular: true,
    rate: 35
  },
  {
    id: 15,
    title: "Image Optimization",
    description: "Improve loading performance by optimizing images and implementing modern formats and lazy loading.",
    category: "optimization",
    icon: "🖼️",
    popular: false,
    rate: 22
  },
  {
    id: 16,
    title: "Minification & Code Cleanup",
    description: "Reduce file sizes and improve code quality for better performance and maintainability.",
    category: "optimization",
    icon: "🧹",
    popular: false,
    rate: 25
  },
  {
    id: 17,
    title: "Core Web Vitals & Speed Optimization",
    description: "Optimize your site to meet or exceed Google's Core Web Vitals metrics for better SEO and user experience.",
    category: "optimization",
    icon: "⚡",
    popular: true,
    rate: 30
  },
  {
    id: 18,
    title: "Custom Feature Development",
    description: "Build tailor-made functionality to meet your specific business needs and provide unique value to your users.",
    category: "web",
    icon: "🛠️",
    popular: false,
    rate: 35
  }
];

// Simplified list
const serviceOptions = services.map(service => service.title);

const serviceCategories = [
  { id: 'all', name: 'All Services' },
  { id: 'web', name: 'Web Development' },
  { id: 'design', name: 'Design & UI/UX' },
  { id: 'optimization', name: 'Optimization' },
  { id: 'animation', name: 'Animation' }
];

export { services, serviceOptions, serviceCategories };