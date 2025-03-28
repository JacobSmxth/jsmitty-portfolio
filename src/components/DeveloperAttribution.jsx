import React from 'react';
import { FaGithub } from 'react-icons/fa';

const DeveloperAttribution = () => {
  return (
    <a
      href="https://github.com/jacobsmxth"
      className="fixed bottom-5 right-5 bg-gradient-to-r from-blue-600/90 to-blue-500/90 backdrop-blur-md border border-blue-400/20 px-4 py-2 rounded-full text-white text-sm flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:to-blue-400 hover:shadow-lg hover:shadow-blue-500/20 z-50"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaGithub className="text-lg" />
      <span>Developed by JSmitty</span>
    </a>
  );
};

export default DeveloperAttribution; 