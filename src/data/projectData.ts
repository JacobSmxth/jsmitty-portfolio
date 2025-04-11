export interface Project {
    id: string;
    name: string;
    description: string;
    technologies: string[];
    github?: string;
    liveUrl?: string;
    image?: string;
    category: 'web' | 'mobile' | 'other';
}

const projectData: Project[] = [
    {
        id: '1',
        name: 'Kayla Fitness',
        description: 'A professional landing page for Alpharetta-based Athletic Trainer Kayla Smith. Features include an interactive schedule booking system, detailed service descriptions, client testimonials, and before/after transformation galleries. The responsive design ensures seamless viewing across all devices, while subtle animations enhance user engagement.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        image: '/images/kaylafitness.png',
        github: 'https://github.com/JacobSmxth/kayla-fitness-website',
        liveUrl: 'https://jacobsmxth.github.io/kayla-fitness-website/',
        category: 'web'
    },
    {
        id: '2',
        name: 'SkyCast',
        description: 'A comprehensive weather application providing real-time meteorological data and forecasts. Features include detailed 7-day forecasts, hourly predictions, severe weather alerts, and customizable location tracking. Utilizes local storage for saving favorite locations and user preferences, while maintaining a clean, intuitive interface.',
        technologies: ['JavaScript', 'CSS', 'Local Storage'],
        image: '/images/skycast.png',
        github: 'https://github.com/JacobSmxth/SkyCast',
        liveUrl: 'https://JacobSmxth.github.io/SkyCast',
        category: 'web'
    },
    {
        id: '3',
        name: 'Coffee Haven',
        description: 'An immersive coffee shop website that brings the café experience online. Features include an interactive menu with detailed product descriptions, online ordering system, customer testimonials, and an engaging about section highlighting the shop\'s story. Implements smooth animations and parallax scrolling effects for an enhanced user experience.',
        technologies: ['React', 'Tailwind CSS'],
        image: '/images/coffeehaven.png',
        github: 'https://github.com/JacobSmxth/coffee-haven',
        liveUrl: 'https://coffeehaven.netlify.app/',
        category: 'web'
    },
    {
        id: '4',
        name: "Portfolio",
        description: "A dynamic personal portfolio showcasing my development journey and technical expertise. Features include smooth scroll animations, dark/light mode theming, interactive project galleries, and a contact form with form validation. Built with modern React practices and styled using Tailwind CSS for a polished, professional appearance.",
        technologies: ["React", "Tailwind CSS"],
        image: "/images/portfolio.png",
        github: "https://github.com/JacobSmxth/jsmitty-portfolio", 
        liveUrl: "https://www.jsmitty.com/",
        category: 'web'
    },
    {
        id: '5',
        name: "Vickery Burger Bar",
        description: "A modern, immersive web experience for Vickery Burger Bar featuring seamless online ordering, social media integration, and content management. The site showcases stunning visuals, smooth animations, and a user-friendly interface while maintaining easy content management through Netlify CMS. Key features include direct POS integration, live social media feeds, and mobile-optimized design.",
        technologies: ["React", "Tailwind CSS", "Headless UI", "Framer Motion", "Shadcn"],
        image: "/images/vickeryburger.png",
        github: "https://github.com/JacobSmxth/vickery-burger-bar",
        liveUrl: "https://vickeryburgerbar.netlify.app/",
        category: 'web'
    },
    {
        id: '6',
        name: "Vogue Vistas",
        description: "A sophisticated e-commerce platform built with modern web technologies. Features include dynamic product filtering, secure shopping cart functionality, seamless checkout process, and real-time inventory management. The site implements responsive design principles ensuring optimal viewing experience across desktop, tablet, and mobile devices.",
        technologies: ["React", "Material UI", "Next.js", "Redux"],
        image: "/images/voguevistas.png",
        github: "https://github.com/JacobSmxth/urban-style",
        liveUrl: "https://voguevistas.netlify.app/",
        category: 'web'
    },
    {
        id: '7',
        name: "Fr0st.gg",
        description: "A sophisticated wager rewards platform featuring a comprehensive leaderboard system, secure backend CMS panel, and encrypted API endpoints. Built with a full-stack architecture, the platform includes real-time data processing, secure user authentication, and advanced rate limiting. The system leverages modern security practices including API encryption and robust database management.",
        technologies: ["React", "TypeScript", "Express", "Firebase", "Tailwind", "Framer Motion"],
        image: "/images/frostgg.png",
        github: undefined,
        liveUrl: "https://fr0st.gg/",
        category: 'web'
    }
];

export default projectData; 