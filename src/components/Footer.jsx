import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
      <footer className="p-4 text-center text-gray-400 border-t border-gray-700 mt-8">
        <div className="flex justify-center gap-4 text-xl mb-3">
          <a 
            href="https://github.com/JacobSmxth" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
            aria-label="GitHub Profile"
          >
            <FaGithubSquare />
          </a>
          <a 
            href="https://www.linkedin.com/in/jacobsmxth/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://x.com/jacobsmxth2" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300 transition-colors"
            aria-label="Twitter Profile"
          >
            <FaSquareXTwitter />
          </a>
          <a 
            href="https://www.instagram.com/jacobsmxth2" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-pink-400 transition-colors"
            aria-label="Instagram Profile"
          >
            <FaInstagram />
          </a>
        </div>
        
        <p>© {currentYear} Jacob Smith. All rights reserved.</p>
        <p className="text-sm mt-1">Frontend Developer • Alpharetta, GA</p>
      </footer>
    );
  };
  
  export default Footer;