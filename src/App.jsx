import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import SkillsTicker from './components/SkillsTicker';
import LoadingScreen from './components/LoadingScreen';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import { FaArrowUp } from 'react-icons/fa';

// Scroll to top when navigating to a new page
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  // Initialize app and set dark mode
  useEffect(() => {
    // Simulate loading assets
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    // Apply dark theme to document root
    document.documentElement.classList.remove('light');
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);
  
  // Track scroll position for scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen transition-colors duration-500"
          >
            <div id="top" className="bg-gray-900 text-gray-200 relative">
              <div id="wrapper" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <Header />
                <ScrollToTop />
                
                <main id="content" className="pt-24 pb-12">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                  </Routes>
                </main>
                
                <SkillsTicker />
                <Footer />
                
                <AnimatePresence>
                  {showScrollTop && (
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      onClick={scrollToTop}
                      className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50"
                      aria-label="Scroll to top"
                    >
                      <FaArrowUp />
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;