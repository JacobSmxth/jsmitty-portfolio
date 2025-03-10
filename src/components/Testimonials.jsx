import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import testimonials from '../data/testimonials';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextTestimonial();
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);
  
  // Pause auto-play on hover/interaction
  const pauseAutoPlay = () => setIsAutoPlaying(false);
  const resumeAutoPlay = () => setIsAutoPlaying(true);
  
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const goToTestimonial = (index) => {
    setCurrentIndex(index);
    pauseAutoPlay();
  };
  
  return (
    <div className="py-20 px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -z-10"
        animate={{ 
          x: [0, 30, 0], 
          y: [0, -30, 0],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 20,
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl -z-10"
        animate={{ 
          x: [0, -30, 0], 
          y: [0, 30, 0],
          opacity: [0.5, 0.7, 0.5]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 15,
          ease: "easeInOut" 
        }}
      />
      
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl text-center text-gray-200 dark:text-gray-200 mb-6 font-bold"
      >
        Client Testimonials
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-center text-gray-400 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
      >
        What people are saying about working with me. Results may vary, but the humor is guaranteed.
      </motion.p>
      
      <div 
        className="max-w-4xl mx-auto relative"
        onMouseEnter={pauseAutoPlay}
        onMouseLeave={resumeAutoPlay}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="relative"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${testimonials[currentIndex].gradient} rounded-2xl opacity-10 blur-sm transform scale-105 -z-10`}></div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-gray-700/50 shadow-xl">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${testimonials[currentIndex].gradient} flex items-center justify-center shadow-lg`}>
                    <FaQuoteLeft className="text-white text-3xl opacity-80" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <p className="text-gray-200 dark:text-gray-200 text-xl md:text-2xl mb-6 leading-relaxed font-light italic">
                    "{testimonials[currentIndex].text}"
                  </p>
                  
                  <div className="border-t border-gray-700/50 pt-4 mt-4">
                    <h4 className="text-xl font-semibold text-gray-200 dark:text-gray-200">
                      {testimonials[currentIndex].author}
                    </h4>
                    <p className="text-blue-400 dark:text-blue-300">
                      {testimonials[currentIndex].position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        
        <div className="flex items-center justify-between mt-8">
          <motion.button
            whileHover={{ scale: 1.1, x: -3 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="bg-gray-800/70 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg backdrop-blur-sm"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-lg" />
          </motion.button>
          
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index 
                    ? 'bg-blue-500 w-8 transition-all' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.1, x: 3 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="bg-gray-800/70 hover:bg-gray-700 text-white p-3 rounded-full shadow-lg backdrop-blur-sm"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-lg" />
          </motion.button>
        </div>
        
        <div className="flex justify-center mt-6">
          <motion.div 
            className="text-xs text-gray-500 flex items-center gap-2"
            animate={{ opacity: isAutoPlaying ? 1 : 0.5 }}
          >
            <span className={`block w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-500' : 'bg-gray-500'}`}></span>
            {isAutoPlaying ? 'Auto-playing' : 'Paused'}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;