export default {
  content: [
    "./src/**/*.{js,jsx}", // Scans all JS and JSX files in src directory
  ],
  theme: {
    extend: {
      colors: {
        'light': '#ffffff',         // For text-light class
        'dark-bg': '#1a1a1a',      // For bg-dark-bg class
        'accent': '#0ea5e9',       // For text-accent and border-accent
      },
      opacity: {
        '70': '.7',               // For text-light/70
        '80': '.8',               // For text-light/80
        '30': '.3',               // For border-accent/30
        '10': '.1',               // For bg-accent/10
        '20': '.2',               // For bg-accent/20
      },
      container: {
        center: true,            // Centers the container
        padding: '1rem',         // Adds padding to container
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
    },
  },
  plugins: [],
}