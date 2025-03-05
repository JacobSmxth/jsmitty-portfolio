import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaFigma
} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiTypescript } from 'react-icons/si';

const SkillsSection = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
    { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-600" },
    { name: "React", icon: <FaReact />, color: "text-cyan-400" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-400" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
    { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
    { name: "Figma", icon: <FaFigma />, color: "text-purple-400" }
  ];

  return (
    <div className="py-10">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl text-center text-gray-200 dark:text-gray-200 mb-12 font-bold"
      >
        Technical Skills
      </motion.h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center bg-gray-800/50 dark:bg-gray-800/50 p-5 rounded-lg"
          >
            <div className={`text-4xl mb-3 ${skill.color}`}>
              {skill.icon}
            </div>
            <h3 className="text-gray-200 dark:text-gray-200 text-center">{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;