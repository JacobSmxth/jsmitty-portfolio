import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaQuoteLeft } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import testimonials from '../data/testimonials';
import { serviceOptions } from '../data/services';

const ContactPage = () => {
  const formRef = useRef();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [initials, setInitials] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [activeField, setActiveField] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // Handle URL parameters for pre-selected service
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get('service');
    
    if (serviceParam) {
      try {
        const serviceTitle = decodeURIComponent(serviceParam);
        setFormState(prev => ({
          ...prev,
          service: serviceTitle
        }));
      } catch (error) {
        console.error('Error parsing service parameter:', error);
      }
    }
  }, []);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);
  
  // Extract initials when name changes
  useEffect(() => {
    if (formState.name) {
      const words = formState.name.trim().split(' ');
      let initials = '';
      
      // Get first letter of each word, up to 2 letters
      for (let i = 0; i < Math.min(words.length, 2); i++) {
        if (words[i].length > 0) {
          initials += words[i][0].toUpperCase();
        }
      }
      
      setInitials(initials);
    } else {
      setInitials('');
    }
  }, [formState.name]);
  
  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    
    try {
      // Send notification to yourself with initials included
      const result = await emailjs.sendForm(
        'service_hfqimjb', 
        'template_9aa6le1', 
        formRef.current, 
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      console.log('Notification email sent successfully', result.text);
      
      // Send auto-reply
      const autoReplyResult = await emailjs.send(
        'service_hfqimjb',
        'template_csn641l',
        {
          name: formState.name,
          email: formState.email,
          initial: initials,
          service: formState.service,
          message: formState.message
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      console.log('Auto-reply sent successfully', autoReplyResult.text);
      
      setSubmitted(true);
      setFormState({ name: '', email: '', service: '', message: '' });
    } catch (error) {
      console.error('Email send error:', error);
      setError('There was an error sending your message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };
  
  const handleFocus = (field) => {
    setActiveField(field);
  };
  
  const handleBlur = () => {
    setActiveField(null);
  };
  
  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Side - Contact Form */}
      <motion.div 
        className="lg:w-1/2 bg-gray-900 p-8 lg:p-12 flex flex-col justify-center"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-md mx-auto w-full">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">
              Let's work together
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Tell me about your project, and I'll help bring it to life.
            </p>
          </motion.div>
          
          {submitted ? (
            <motion.div 
              className="p-6 border-l-4 border-green-500 bg-green-900/30 rounded-r-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3 className="text-xl text-green-400 font-semibold mb-2">Message Sent Successfully!</h3>
              <p className="text-gray-300">Thank you for reaching out. I'll review your project details and get back to you within 24-48 hours.</p>
              <motion.button
                className="mt-4 bg-gray-700 text-white px-5 py-2 rounded-md font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSubmitted(false)}
              >
                Send Another Message
              </motion.button>
            </motion.div>
          ) : (
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {error && (
                <motion.div 
                  className="p-4 bg-red-900/30 border-l-4 border-red-500 text-red-400 rounded-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {error}
                </motion.div>
              )}
              
              {/* Name Field with Initials Display */}
              <div className="relative">
                <motion.div 
                  className="mb-2 flex justify-between items-center"
                  animate={{ y: activeField === 'name' ? -5 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <label htmlFor="name" className="text-gray-300 font-medium">
                    Your Name
                  </label>
                  {initials && (
                    <motion.div 
                      className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    >
                      {initials}
                    </motion.div>
                  )}
                </motion.div>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                  animate={{ 
                    boxShadow: activeField === 'name' ? '0 0 0 3px rgba(59, 130, 246, 0.3)' : '0 0 0 0 rgba(59, 130, 246, 0)'
                  }}
                />
              </div>
              
              {/* Email Field */}
              <div>
                <motion.label 
                  htmlFor="email" 
                  className="block text-gray-300 font-medium mb-2"
                  animate={{ y: activeField === 'email' ? -5 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  Email Address
                </motion.label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                  animate={{ 
                    boxShadow: activeField === 'email' ? '0 0 0 3px rgba(59, 130, 246, 0.3)' : '0 0 0 0 rgba(59, 130, 246, 0)'
                  }}
                />
              </div>
              
              <div>
                <motion.label 
                  htmlFor="service" 
                  className="block text-gray-300 font-medium mb-2"
                  animate={{ y: activeField === 'service' ? -5 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  What service are you interested in?
                </motion.label>
                <motion.select
                  id="service"
                  name="service"
                  value={formState.service}
                  onChange={handleChange}
                  onFocus={() => handleFocus('service')}
                  onBlur={handleBlur}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  required
                  animate={{ 
                    boxShadow: activeField === 'service' ? '0 0 0 3px rgba(59, 130, 246, 0.3)' : '0 0 0 0 rgba(59, 130, 246, 0)'
                  }}
                >
                  <option value="" disabled>Select a service</option>
                  {serviceOptions.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </motion.select>
              </div>
              
              <div>
                <motion.label 
                  htmlFor="message" 
                  className="block text-gray-300 font-medium mb-2"
                  animate={{ y: activeField === 'message' ? -5 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  Project Details
                </motion.label>
                <motion.textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formState.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Tell me about your project goals, timeline, and any specific requirements..."
                  required
                  animate={{ 
                    boxShadow: activeField === 'message' ? '0 0 0 3px rgba(59, 130, 246, 0.3)' : '0 0 0 0 rgba(59, 130, 246, 0)'
                  }}
                />
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-lg font-medium text-lg transition-colors shadow-lg"
                disabled={submitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {submitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Message...
                  </div>
                ) : 'Send Message'}
              </motion.button>
              
              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-gray-400 mb-3 text-sm font-medium">Or connect with me directly:</p>
                <div className="flex space-x-4">
                  <motion.a 
                    href="https://github.com/jacobsmxth" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-full text-gray-300 hover:bg-gray-700 transition-colors"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaGithub size={20} />
                  </motion.a>
                  <motion.a 
                    href="https://linkedin.com/in/jacobsmxth" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-full text-gray-300 hover:bg-gray-700 transition-colors"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaLinkedin size={20} />
                  </motion.a>
                  <motion.a 
                    href="https://x.com/jacobsmxth2" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-800 rounded-full text-gray-300 hover:bg-gray-700 transition-colors"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaXTwitter size={20} />
                  </motion.a>
                  <motion.a 
                    href="mailto:jacobsmith@jsmitty.com" 
                    className="p-3 bg-gray-800 rounded-full text-gray-300 hover:bg-gray-700 transition-colors"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaEnvelope size={20} />
                  </motion.a>
                </div>
              </div>
            </form>
          )}
        </div>
      </motion.div>
      
      <motion.div 
        className="lg:w-1/2 bg-gradient-to-br from-blue-500 to-indigo-600 p-8 lg:p-12 flex items-center justify-center"
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="max-w-md text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold mb-4">Why Work With Me?</h2>
            <p className="text-blue-100 mb-6">I deliver modern, high-performing websites that help businesses grow their online presence.</p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-white/20 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Modern Designs</h3>
                  <p className="text-blue-100 text-sm">Clean, responsive interfaces that engage visitors</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/20 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Performance Focused</h3>
                  <p className="text-blue-100 text-sm">Fast-loading sites optimized for all devices</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-white/20 p-2 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Clear Communication</h3>
                  <p className="text-blue-100 text-sm">Regular updates throughout the development process</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentTestimonial}
              className={`p-6 backdrop-blur-sm rounded-xl shadow-lg bg-gradient-to-br ${testimonials[currentTestimonial].contactGradient} border border-white/10`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0 mr-4">
                  <FaQuoteLeft className="text-white text-lg" />
                </div>
                <h3 className="font-bold text-xl">What Others Say</h3>
              </div>
              
              <div className="space-y-6">
                <motion.p 
                  className="italic text-blue-100 text-lg leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  "{testimonials[currentTestimonial].text}"
                </motion.p>
                
                <motion.div 
                  className="flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 mr-4 font-bold text-lg">
                    {testimonials[currentTestimonial].author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-white">{testimonials[currentTestimonial].author}</p>
                    <p className="text-blue-200 text-sm">{testimonials[currentTestimonial].position}</p>
                  </div>
                </motion.div>
                
                <div className="flex justify-center gap-2 pt-2">
                  {testimonials.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentTestimonial === index ? 'w-6 bg-white' : 'bg-white/40'
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={`View testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;