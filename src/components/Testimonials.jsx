import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Added funny ones because I have no clients
  const testimonials = [
    {
      id: 1,
      text: "Error 404: Testimonials Not Found. But trust me, Jacob is awesome.",
      author: "System Admin",
      position: "Internet Overlord"
    },
    {
      id: 2,
      text: "Error 500: Too much talent. Jacob’s skills caused an overflow.",
      author: "Server Logs",
      position: "AI Witness"
    },
    {
      id: 3,
      text: "Warning: Working with Jacob may result in uncontrollable satisfaction and project success.",
      author: "Compiler",
      position: "Bug Exterminator"
    }
];

  
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="py-10">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl text-center text-gray-200 dark:text-gray-200 mb-12 font-bold"
      >
        Client Testimonials
      </motion.h2>
      
      <div className="max-w-4xl mx-auto px-4 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            className="bg-gray-800/30 dark:bg-gray-800/30 p-8 rounded-xl relative"
          >
            <FaQuoteLeft className="text-blue-500 dark:text-blue-400 text-4xl mb-4 opacity-50" />
            
            <p className="text-gray-200 dark:text-gray-200 text-lg mb-6 italic">
              "{testimonials[currentIndex].text}"
            </p>
            
            <div>
              <h4 className="text-xl font-semibold text-gray-200 dark:text-gray-200">
                {testimonials[currentIndex].author}
              </h4>
              <p className="text-blue-400 dark:text-blue-300">
                {testimonials[currentIndex].position}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
        
        <div className="flex justify-center mt-8 gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="bg-gray-700 dark:bg-gray-700 text-white p-2 rounded-full"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="bg-gray-700 dark:bg-gray-700 text-white p-2 rounded-full"
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;