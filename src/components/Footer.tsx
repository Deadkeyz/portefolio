import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-800 pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold tracking-tight text-blue-600 dark:text-blue-400 transition-colors duration-300">
              Curriculum Vitae
            </a>
          </div>
          
          <div className="flex flex-col items-end">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Connect With Me</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Deadkeyz/dashboard" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/koua-angaman-koua-luc-emeric-37a270340/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:koua99angaman@gmail.com" 
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-200 dark:border-gray-700 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © {currentYear} John Doe. All rights reserved.
          </p>
          
          <div className="flex space-x-8">
            <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;