import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import projectData from '../data/projectData';

// Created a separate ProjectCard component for better organization
const ProjectCard = ({ project }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className='border border-gray-700 bg-gray-800/30 text-gray-300 rounded-xl w-full max-w-sm shadow-lg text-center flex flex-col items-center mb-5 overflow-hidden transition-all'
    key={project.id}
  >
    <Link to={`/project/${project.id}`} className="w-full">
      <div className="overflow-hidden w-full">
        <img 
          className='w-full h-48 object-cover hover:scale-105 transition-transform duration-300' 
          src={project.image} 
          alt={project.name} 
          loading="lazy" 
        />
      </div>
      <h2 className='text-xl font-bold p-3 text-gray-100'>
        {project.name}
      </h2>
      <div className='flex flex-wrap justify-center gap-2 px-3 mb-3'>
        {project.tech.map((tech, index) => (
          <span 
            className='text-xs rounded-full text-gray-100 px-3 py-1 bg-gray-700 hover:bg-gray-600 transition-colors' 
            key={`${project.id}-tech-${index}`}
          >
            {tech}
          </span>
        ))}
      </div>
      <p className='text-sm text-gray-300 px-4 mb-4 line-clamp-3'>
        {project.description}
      </p>
    </Link>
    <div className='flex justify-center gap-5 py-4 mt-auto w-full border-t border-gray-700'>
      <motion.a 
        whileHover={{ scale: 1.05 }}
        href={project.live} 
        target='_blank' 
        rel="noopener noreferrer"
        className='text-blue-400 hover:text-blue-300 font-medium transition-colors'
      >
        Live Demo
      </motion.a>
      <motion.a 
        whileHover={{ scale: 1.05 }}
        href={project.github} 
        target='_blank' 
        rel="noopener noreferrer"
        className='text-blue-400 hover:text-blue-300 font-medium transition-colors'
      >
        View Code
      </motion.a>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-12"
        >
          Featured Work
        </motion.h1>
        <div 
          id='Projects' 
          className='grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center'
        >
          {projectData.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;