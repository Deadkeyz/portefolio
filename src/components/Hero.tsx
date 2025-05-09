import React from 'react';
import { ArrowDown, FileText, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-16 pb-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-teal-50 dark:from-gray-900 dark:to-gray-800 -z-10"></div>
      
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-teal-300 dark:bg-teal-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/2 left-1/4 w-64 h-64 bg-yellow-300 dark:bg-yellow-500 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-block relative">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg mx-auto">
              <img 
                src="https://media.licdn.com/dms/image/v2/D5603AQEpyCcDq8LBUw/profile-displayphoto-shrink_400_400/B56ZWPN67NGUAs-/0/1741864548227?e=1752105600&v=beta&t=Zh-kG1uDNJ6VU7pN0Y3jHo_bOYGx9MpZZz7LwATSgHM" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            <span className="block">Actuariat <span className="text-blue-600 dark:text-blue-400">Expert IA</span></span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
            <span className="inline-block font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-300">
             Audit actuariel – Développeur front‑end & analyste de données
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
             j’intègre intelligence artificielle, automatisation pour transformer l’audit actuariel, optimiser la tarification et le calcul de provision et déployer des solutions innovantes.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-300 w-full sm:w-auto"
            >
             Contactez moi
            </a>
            <a 
              href="https://drive.google.com/file/d/1crp1th0EdBGl8qYRhiGux8ncB04_JBwj/view" 
              className="px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <FileText size={18} />
              Téléchargez mon CV
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-6 mb-16">
            <a 
              href="https://github.com/Deadkeyz/dashboard" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/koua-angaman-koua-luc-emeric-37a270340/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
          
          <a 
            href="#about" 
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 animate-bounce transition-colors duration-300"
            aria-label="Scroll to About section"
          >
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;