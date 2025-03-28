import { motion } from 'framer-motion';
import { useState } from 'react';
import { services, serviceCategories } from '../data/services';

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const handleServiceRequest = (service) => {
    // Simply encode the service title for the URL
    const serviceTitle = encodeURIComponent(service.title);
    window.location.href = `/contact?service=${serviceTitle}`;
  };
  
  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              Web Development Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Transform your digital presence with cutting-edge web solutions that combine innovation, performance, and user experience.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Category Filter */}
      <motion.div 
        className="sticky top-0 z-10 bg-gray-900/80 backdrop-blur-md border-b border-gray-800"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center gap-3">
            {serviceCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={fadeInUp}
              className="group bg-gray-800/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 relative border border-gray-700/50 hover:border-blue-500/50"
              whileHover={{ y: -5 }}
            >
              {service.popular && (
                <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  POPULAR
                </div>
              )}
              <div className="p-8">
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <span className="text-gray-400 text-sm mr-1">Starting at</span>
                    <span className="text-blue-400 font-bold text-2xl">${service.rate}</span>
                    <span className="text-gray-400 text-sm ml-1">/hr</span>
                  </div>
                  
                  {service.rate < 30 && (
                    <span className="bg-green-900/30 text-green-400 text-xs px-3 py-1 rounded-full">
                      Budget-friendly
                    </span>
                  )}
                </div>
                
                <motion.button
                  onClick={() => handleServiceRequest(service)}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors w-full text-center group-hover:shadow-lg group-hover:shadow-blue-500/20"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Request Service
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-800/50 border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Me?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              I bring expertise, dedication, and innovation to every project, ensuring exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Development",
                description: "Years of experience with modern web technologies and best practices.",
                icon: "💻"
              },
              {
                title: "Quality Assurance",
                description: "Rigorous testing and optimization for the best performance.",
                icon: "✨"
              },
              {
                title: "Client Focused",
                description: "Dedicated to understanding and meeting your specific needs.",
                icon: "🤝"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/50 rounded-xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div 
        className="relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-90" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss how I can help bring your vision to life with the perfect web solution.
            </p>
            <motion.button
              onClick={() => window.location.href = '/contact'}
              className="inline-block bg-white text-blue-600 font-bold py-4 px-8 rounded-lg shadow-xl hover:bg-gray-100 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me Today
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesPage;