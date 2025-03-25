import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { workExperience } from '../data/workExperience';

const Experience = () => {
  return (
    <div className="py-10">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl text-center text-gray-200 dark:text-gray-200 mb-12 font-bold"
      >
        Work Experience
      </motion.h2>
      
      <div className="max-w-4xl mx-auto">
        {workExperience.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="mb-12 relative pl-8 border-l-2 border-blue-500 dark:border-blue-400"
          >
            <div className="absolute -left-3 top-0 bg-blue-500 dark:bg-blue-400 rounded-full p-2">
              <FaBriefcase className="text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-200 dark:text-gray-200">{job.title}</h3>
            <h4 className="text-lg text-blue-400 dark:text-blue-300 mb-1">{job.company}</h4>
            
            <div className="flex items-center text-gray-400 dark:text-gray-400 text-sm mb-4">
              <FaCalendarAlt className="mr-2" />
              <span>{job.period}</span>
            </div>
            
            <ul className="list-disc list-inside space-y-2">
              {job.description.map((bullet, i) => (
                <li key={i} className="text-gray-300 dark:text-gray-300">
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;