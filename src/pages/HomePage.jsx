import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import SkillsSection from '../components/SkillsSection';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
  return (
    <div className="space-y-14">
      <section id="home">
        <Hero />
      </section>
      
      <section id="projects">
        <Projects />
      </section>
      
      <section id="experience">
        <Experience />
      </section>
      
      <section id="skills">
        <SkillsSection />
      </section>
      
      <section id="testimonials">
        <Testimonials />
      </section>
    </div>
  );
};

export default HomePage;