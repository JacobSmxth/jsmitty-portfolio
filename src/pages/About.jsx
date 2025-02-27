import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Shield, Briefcase, GraduationCap, Rocket } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-28 pb-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-light">About Me</h1>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square rounded-full overflow-hidden border-4 border-accent/30 max-w-md mx-auto">
              <img 
                src="/pictureface.png" 
                alt="Jacob Smith" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-light">Hey, I'm Jacob Smith.</h2>
            <p className="text-light/80 mt-6 leading-relaxed">
              I'm a passionate front-end developer with a strong interest in cybersecurity. 
              My goal is to build high-quality, responsive websites while keeping security in mind. 
              I enjoy creating clean, user-friendly interfaces and optimizing performance for a smooth experience.
            </p>
            <p className="text-light/80 mt-4 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or learning about the latest cybersecurity trends. I believe in continuous learning and pushing the 
              boundaries of what's possible with web technologies.
            </p>
          </motion.div>
        </div>
        
        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-light mb-10 text-center">Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card">
              <div className="flex items-center mb-4">
                <Code size={24} className="text-accent mr-3" />
                <h3 className="text-xl font-semibold text-light">Front-End Development</h3>
              </div>
              <ul className="text-light/80 space-y-2">
                <li>HTML, CSS, JavaScript</li>
                <li>React.js</li>
                <li>Tailwind CSS</li>
                <li>Responsive Design</li>
                <li>UI/UX Principles</li>
              </ul>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <Server size={24} className="text-accent mr-3" />
                <h3 className="text-xl font-semibold text-light">Tools & Technologies</h3>
              </div>
              <ul className="text-light/80 space-y-2">
                <li>Git & GitHub</li>
                <li>Vite</li>
                <li>Framer Motion</li>
              </ul>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <Shield size={24} className="text-accent mr-3" />
                <h3 className="text-xl font-semibold text-light">Cybersecurity</h3>
              </div>
              <ul className="text-light/80 space-y-2">
                <li>Network Security Basics</li>
                <li>Ethical Hacking Fundamentals</li>
                <li>Web Application Security</li>
                <li>Security Best Practices</li>
                <li>Vulnerability Assessment</li>
              </ul>
            </div>
          </div>
        </motion.div>
        
        {/* Experience & Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-light mb-10 text-center">Experience & Education</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-center mb-6">
                <Briefcase size={24} className="text-accent mr-3" />
                <h3 className="text-xl font-semibold text-light">Experience</h3>
              </div>
              
              <div className="border-l-2 border-accent/30 pl-4 space-y-8">
                <div>
                  <h4 className="text-lg font-medium text-light">Freelance Web Developer</h4>
                  <p className="text-accent text-sm mt-1">2024 - Present</p>
                  <p className="text-light/80 mt-2">
                    Developing responsive websites and web applications for clients using modern technologies.
                    Implementing best practices for performance and security.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-light">Open Source Contributor</h4>
                  <p className="text-accent text-sm mt-1">2025 - Present</p>
                  <p className="text-light/80 mt-2">
                    Contributing to various open-source projects, focusing on front-end development and security improvements.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-6">
                <GraduationCap size={24} className="text-accent mr-3" />
                <h3 className="text-xl font-semibold text-light">Education</h3>
              </div>
              
              <div className="border-l-2 border-accent/30 pl-4 space-y-8">
                <div>
                  <h4 className="text-lg font-medium text-light">Denmark High school</h4>
                  <p className="text-accent text-sm mt-1">2020 - 2024</p>
                  <p className="text-light/80 mt-2">
                    High School Diploma
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-light">University of North Georgia</h4>
                  <p className="text-accent text-sm mt-1">2024 - Present</p>
                  <p className="text-light/80 mt-2">
                    Bachelor's Degree in Cybersecurity
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* What I'm Working On */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold text-light mb-10 text-center">What I'm Working On</h2>
          
          <div className="card">
            <div className="flex items-center mb-6">
              <Rocket size={24} className="text-accent mr-3" />
              <h3 className="text-xl font-semibold text-light">Current Projects & Learning</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-dark-bg/50 rounded-lg">
                <h4 className="text-lg font-medium text-light mb-2">Learning React.js and API Integration</h4>
                <p className="text-light/80">
                  Deepening my knowledge of React.js and exploring advanced patterns for API integration and state management.
                </p>
              </div>
              
              <div className="p-4 bg-dark-bg/50 rounded-lg">
                <h4 className="text-lg font-medium text-light mb-2">Exploring Cybersecurity Tools</h4>
                <p className="text-light/80">
                  Learning about various cybersecurity tools and techniques to better understand web application security.
                </p>
              </div>
              
              <div className="p-4 bg-dark-bg/50 rounded-lg">
                <h4 className="text-lg font-medium text-light mb-2">Building Open-Source Projects</h4>
                <p className="text-light/80">
                  Contributing to and creating open-source projects to give back to the developer community.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;