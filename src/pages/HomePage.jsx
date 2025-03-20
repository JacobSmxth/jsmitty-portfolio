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
        <Hero />
      </motion.section>
      
      <motion.section
        variants={sectionVariants}
        id="projects"
        className="relative"
      >
        <Projects />
      </motion.section>
      
      <motion.section
        variants={sectionVariants}
        id="experience"
        className="relative"
      >
        <Experience />
      </motion.section>
      
      <motion.section
        variants={sectionVariants}
        id="skills"
        className="relative"
      >
        <SkillsSection />
      </motion.section>
      
      <motion.section
        variants={sectionVariants}
        id="testimonials"
        className="relative"
      >
        <Testimonials />
      </motion.section>
    </motion.div>
  );
};

export default HomePage;