import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';

const Home = () => {
  const featuredProjects = projects.filter(project => project.featured);
  
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Featured Projects List */}
          <motion.div 
            className="w-full lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-accent">Featured Projects</h2>
            <div className="space-y-4">
              {featuredProjects.map((project, index) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="group"
                >
                  <Link 
                    to={`/portfolio/${project.id}`} 
                    className="block p-4 border-l-2 border-accent/30 group-hover:border-accent transition-all duration-300"
                  >
                    <h3 className="text-lg font-medium text-light group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-light/70 text-sm mt-1">{project.description}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="mt-8"
            >
              <Link to="/portfolio" className="btn flex items-center gap-2">
                View All Projects <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Hero Text */}
          <motion.div 
            className="w-full lg:w-2/3 text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-light leading-tight">
              I am <span className="text-accent">Jacob Smith</span>
            </h1>
            <motion.p 
              className="text-xl md:text-2xl text-light/80 mt-6 max-w-2xl mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Front-End Developer | Cybersecurity Enthusiast | Problem Solver
            </motion.p>
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link to="/portfolio" className="btn">
                View Portfolio
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;