import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Freelance",
      period: "2025 - Present",
      description: "Design and develop responsive, accessible web applications using React, Next.js, and Tailwind CSS. Collaborate with cross-functional teams to deliver high-quality digital solutions, resulting in measurable improvements in user engagement."
    },
    {
      id: 2,
      title: "Stringer / String Lead",
      company: "Tennis Warehouse",
      period: "2023 - Present",
      description: "Spearheaded the development of client-facing web applications with cutting-edge frontend technologies. Partnered with designers and marketing teams to implement pixel-perfect, high-performance interfaces that boosted conversion rates."
    },
    {
      id: 3,
      title: "Crew Member / Shift Lead",
      company: "Dunkin Donuts",
      period: "2021 - 2023",
      description: "Managed daily operations and led a team in a fast-paced environment while independently conceptualizing and executing digital solutions. Enhanced local brand visibility and customer engagement through effective online strategies."
    }
  ];

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
      
      <div className="max-w-3xl mx-auto">
        {experiences.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="mb-10 relative pl-8 border-l-2 border-blue-500 dark:border-blue-400"
          >
            <div className="absolute -left-3 top-0 bg-blue-500 dark:bg-blue-400 rounded-full p-2">
              <FaBriefcase className="text-white" />
            </div>
            
            <h3 className="text-xl font-bold text-gray-200 dark:text-gray-200">{job.title}</h3>
            <h4 className="text-lg text-blue-400 dark:text-blue-300 mb-1">{job.company}</h4>
            
            <div className="flex items-center text-gray-400 dark:text-gray-400 text-sm mb-3">
              <FaCalendarAlt className="mr-2" />
              <span>{job.period}</span>
            </div>
            
            <p className="text-gray-300 dark:text-gray-300">{job.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;