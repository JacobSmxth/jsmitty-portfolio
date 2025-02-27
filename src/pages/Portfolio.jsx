import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.technologies.some(tech => 
        tech.toLowerCase().includes(filter.toLowerCase())
      ));
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  return (
    <div className="pt-28 pb-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-light">Portfolio</h1>
          <p className="text-light/70 mt-4 max-w-2xl mx-auto">
            Explore my projects showcasing front-end development skills and cybersecurity knowledge.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <button 
            onClick={() => setFilter('all')} 
            className={`px-4 py-2 rounded-full text-sm ${
              filter === 'all' 
                ? 'bg-accent text-white' 
                : 'bg-dark-bg border border-accent/30 text-light hover:border-accent/60'
            } transition-all duration-300`}
          >
            All Projects
          </button>
          {['React', 'API', 'Tailwind', 'LocalStorage'].map(tech => (
            <button 
              key={tech}
              onClick={() => setFilter(tech)} 
              className={`px-4 py-2 rounded-full text-sm ${
                filter === tech 
                  ? 'bg-accent text-white' 
                  : 'bg-dark-bg border border-accent/30 text-light hover:border-accent/60'
              } transition-all duration-300`}
            >
              {tech}
            </button>
          ))}
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {filteredProjects.map(project => (
            <motion.div 
              key={project.id}
              variants={item}
              className="card group overflow-hidden"
            >
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-dark-bg/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link 
                    to={`/portfolio/${project.id}`} 
                    className="btn"
                  >
                    View Project
                  </Link>
                </div>
              </div>
              <h3 className="text-xl font-bold text-light group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-light/70 mt-2">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span 
                    key={tech} 
                    className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;