import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare, FaLinkedin, FaInstagram, FaArrowRight } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const useTypewriterEffect = (text, typingSpeed = 50, pauseTime = 10000) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  
  useEffect(() => {
    let timeout;
    if (isTyping) {
      if (displayText.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayText(prev => prev + text.charAt(prev.length));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
          setTimeout(() => {
            setDisplayText('');
            setIsTyping(true);
          }, pauseTime);
        }, pauseTime);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayText, isTyping, text, typingSpeed, pauseTime]);
  
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);
  
  return { displayText, showCursor };
};

const SocialLink = ({ href, icon, label, hoverColor }) => (
  <motion.a
    whileHover={{ scale: 1.15, y: -3 }}
    whileTap={{ scale: 0.95 }}
    className={`${hoverColor} transition-all duration-300`}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
  >
    {icon}
  </motion.a>
);

const Hero = () => {
  const bio = "I am a 19-year-old frontend developer building secure sites with React and Tailwind.";
  const { displayText, showCursor } = useTypewriterEffect(bio);
  
  return (
    <section className="p-5 md:p-8 w-full border-2 rounded-2xl shadow-lg overflow-hidden relative
                       bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:to-gray-800
                       text-gray-800 dark:text-gray-200
                       border-gray-300 dark:border-gray-700">
      <div className="absolute inset-0 overflow-hidden opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <div className="flex items-center justify-center">
            <div className="relative w-4/5 max-w-xs">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full opacity-70 blur-sm animate-pulse"></div>
              <img
                className="rounded-full object-cover w-full aspect-square relative z-10 p-1"
                src="/pictureFace.svg"
                alt="Jacob Smith - Frontend Developer"
              />
              <div className="absolute -top-4 -right-4 bg-blue-500 w-8 h-8 rounded-full opacity-80"></div>
              <div className="absolute -bottom-2 -left-2 bg-teal-400 w-6 h-6 rounded-full opacity-70"></div>
            </div>
        </div>
        
        <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-400 bg-clip-text text-transparent">
                Jacob Smith
              </span>
            </h1>
            
            <h2 className="font-medium text-blue-600 dark:text-blue-300 mt-2 text-lg md:text-xl">
              Frontend Developer • Alpharetta, GA
            </h2>
            
            <div className="min-h-[80px] mt-4">
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                {displayText}
                <span className={`ml-1 inline-block w-2 h-5 bg-blue-500 dark:bg-blue-400 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}></span>
              </p>
            </div>
            
            <div className="flex gap-5 text-2xl md:text-3xl mt-4 text-gray-700 dark:text-gray-300">
              <SocialLink
                href="https://github.com/JacobSmxth"
                icon={<FaGithubSquare />}
                label="GitHub Profile"
                hoverColor="hover:text-blue-600"
              />
              <SocialLink
                href="https://www.linkedin.com/in/jacobsmxth/"
                icon={<FaLinkedin />}
                label="LinkedIn Profile"
                hoverColor="hover:text-blue-400"
              />
              <SocialLink
                href="https://x.com/jacobsmxth2"
                icon={<FaSquareXTwitter />}
                label="Twitter Profile"
                hoverColor="hover:text-gray-500"
              />
              <SocialLink
                href="https://www.instagram.com/jacobsmxth2"
                icon={<FaInstagram />}
                label="Instagram Profile"
                hoverColor="hover:text-pink-500"
              />
            </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 relative z-20">
        {/* Projects Button */}
        <motion.a
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="#Projects"
          className="group px-6 py-3 rounded-xl text-center bg-blue-600 hover:bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-600 text-white shadow-md flex items-center justify-center font-medium"
          aria-label="See my projects"
        >
          See Projects
          <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
        </motion.a>
        
        {/* Resume Button */}
        <motion.a
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="https://docs.google.com/document/d/1BJA9teks9FotnFxpHl-WVYmhX3R-Cfj5omWKuL0ZWw0/edit?tab=t.0"
          target="_blank"
          rel="noopener noreferrer"
          className="group px-6 py-3 rounded-xl text-center bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-600 hover:to-blue-500 dark:from-blue-800 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-600 text-white shadow-md flex items-center justify-center font-medium"
          aria-label="See my resume"
        >
          See Resume
          <FaArrowRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;