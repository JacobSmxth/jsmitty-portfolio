import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import SkillsSection from '../components/SkillsSection';
import Testimonials from '../components/Testimonials';
import { motion } from 'framer-motion';

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-24"
    >
      <motion.section
        variants={sectionVariants}
        id="home"
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none"></div>
        <Hero />
      </motion.section>
      
      <motion.section
        variants={sectionVariants}
        id="projects"
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent pointer-events-none"></div>
        <Projects />
      </motion.section>
      
      <motion.section
        variants={sectionVariants}
        id="experience"
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 to-transparent pointer-events-none"></div>
        <Experience />
      </motion.section>
      
      <motion.section
        variants={sectionVariants}
        id="skills"
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-transparent pointer-events-none"></div>
        <SkillsSection />
      </motion.section>
      
      <motion.section
        variants={sectionVariants}
        id="testimonials"
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent pointer-events-none"></div>
        <Testimonials />
      </motion.section>
    </motion.div>
  );
};

export default HomePage;