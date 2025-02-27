import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.id === id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!project) {
    return (
      <div className="pt-28 pb-16 text-center text-light">
        <p className="text-xl">Project not found.</p>
        <Link to="/portfolio" className="text-accent hover:underline">
          Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            to="/portfolio" 
            className="inline-flex items-center text-light hover:text-accent transition-colors"
          >
            <ArrowLeft size={16} className="mr-2" /> Back to Portfolio
          </Link>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-light">{project.title}</h1>
            
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map(tech => (
                <span 
                  key={tech} 
                  className="text-sm px-3 py-1 rounded-full bg-accent/10 text-accent"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-light mb-4">Project Overview</h2>
              <p className="text-light/80 leading-relaxed">
                {project.longDescription}
              </p>
            </div>
            
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-light mb-4">Key Features</h2>
              <ul className="list-disc list-inside text-light/80 space-y-2">
                <li>Responsive design for all device sizes</li>
                <li>Intuitive user interface with smooth animations</li>
                <li>Optimized performance for fast loading</li>
                <li>Clean, maintainable code architecture</li>
                <li>Comprehensive error handling</li>
              </ul>
            </div>
            
            <div className="mt-10">
              {project.demoLink ? (
                <a 
                  href={project.demoLink} 
                  className="btn mr-4"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              ) : (
                <span className="text-light/60">Live Demo not available</span>
              )}

              {project.codeLink ? (
                <a 
                  href={project.codeLink} 
                  className="inline-block px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 rounded-md"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  View Code
                </a>
              ) : (
                <span className="text-light/60 ml-4">Code not available</span>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
