import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl: string;
  codeUrl: string;
  category: 'actuariat' | 'recherche';
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'actuariat' | 'recherche'>('all');
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'AI-Driven Risk Assessment Platform',
      description: `Plateforme de modélisation des risques avancée utilisant des algorithmes d'apprentissage automatique pour des prévisions actuarielles et une évaluation des risques précises.`,
      image: 'https://global-uploads.webflow.com/64669e53d9b0aa541ec85221/64e9e59dde20af4991ee8f99_JoYD1nehA1XgV6WHlOZ4PpGjLb0jfSqQuNrYAQ0EP76Gey7iA-out-0.png',
      tags: ['Python', 'TensorFlow', 'Statistical Analysis', 'Machine Learning'],
      demoUrl: '#',
      codeUrl: '#',
      category: 'recherche'
    },
    {
      id: 3,
      title: 'Predictive Analytics Dashboard',
      description: 'Tableau de bord interactif pour visualiser et analyser les données actuarielles avec des capacités de modélisation prédictive.',
      image: 'https://th.bing.com/th/id/R.66c5ba8526670d36ea06e47432790d2b?rik=u51%2b%2boQNBxSnlA&pid=ImgRaw&r=0',
      tags: ['R', 'Shiny', 'Statistical Analysis', 'Data Visualization'],
      demoUrl: '#',
      codeUrl: '#',
      category: 'actuariat'
    },
    
    {
      id: 6,
      title: 'Mortality Rate Prediction Model',
      description: 'Modèle statistique avancé pour prédire les taux de mortalité à l’aide de l’apprentissage automatique et de données actuarielles.',
      image: 'https://dfzljdn9uc3pi.cloudfront.net/2022/14457/1/fig-4-full.png',
      tags: ['Python', 'Machine Learning', 'Statistics', 'Healthcare'],
      demoUrl: '#',
      codeUrl: '#',
      category: 'actuariat'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mes projets d'études
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
             Solutions Innovantes en actuariat et En IA
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
                activeFilter === 'all'
                ? 'bg-blue-600 dark:bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter('actuariat')}
              className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
                activeFilter === 'actuariat'
                ? 'bg-blue-600 dark:bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Actuarial
            </button>
            <button
              onClick={() => setActiveFilter('recherche')}
              className={`px-4 py-2 rounded-full font-medium transition-colors duration-300 ${
                activeFilter === 'recherche'
                ? 'bg-blue-600 dark:bg-blue-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Research
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={project.demoUrl} 
                    className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                  <a 
                    href={project.codeUrl} 
                    className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-1 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    Code source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;