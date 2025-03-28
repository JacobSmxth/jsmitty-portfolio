const services = [
  {
    id: 1,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies like React, including responsive design, API integrations, and custom features.",
    category: "web",
    icon: "⚛️",
    popular: true,
    rate: 35
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Comprehensive design solutions including user interface design, interactive animations, and modern design trends for engaging digital experiences.",
    category: "design",
    icon: "🎨",
    popular: true,
    rate: 35
  },
  {
    id: 3,
    title: "Performance Optimization",
    description: "Complete optimization package including Core Web Vitals, image optimization, code efficiency, and responsive design for faster loading times.",
    category: "optimization",
    icon: "⚡",
    popular: true,
    rate: 30
  },
  {
    id: 4,
    title: "Website Modernization",
    description: "Full website overhaul including modern design updates, performance improvements, and enhanced user experience across all devices.",
    category: "design",
    icon: "🔄",
    popular: true,
    rate: 35
  }
];

// Simplified list
const serviceOptions = services.map(service => service.title);

const serviceCategories = [
  { id: 'all', name: 'All Services' },
  { id: 'web', name: 'Web Development' },
  { id: 'design', name: 'Design & UI/UX' },
  { id: 'optimization', name: 'Optimization' }
];

export { services, serviceOptions, serviceCategories };