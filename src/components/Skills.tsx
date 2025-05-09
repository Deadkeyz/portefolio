import React from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'actuarial' | 'blockchain' | 'programming';
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'Modélisation du risques', level: 65, category: 'actuarial' },
    { name: 'Analyse statistique', level: 90, category: 'actuarial' },
    { name: 'Machine Learning', level: 88, category: 'actuarial' },
    { name: 'Rust', level: 92, category: 'blockchain' },
    { name: 'solana', level: 85, category: 'blockchain' },
    { name: 'Solidity', level: 90, category: 'blockchain' },
    { name: 'Python', level: 95, category: 'programming' },
    { name: 'R', level: 88, category: 'programming' },
    { name: 'Javascript', level: 85, category: 'programming' },
    { name: 'Ethereum', level: 90, category: 'blockchain' },
    { name: 'VBA', level: 92, category: 'programming' },
    { name: 'Modèle de prédiction', level: 94, category: 'actuarial' },
  ];

  const filterSkills = (category: 'actuarial' | 'blockchain' | 'programming') => {
    return skills.filter(skill => skill.category === category);
  };

  const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
    return (
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</h4>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{skill.level}%</span>
        </div>
        <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-500 dark:to-teal-400 rounded-full"
            style={{ width: `${skill.level}%`, transition: 'width 1s ease-in-out' }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mon Expertise
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Compétence spécialisé en actuariat , blockchain et en programmation          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </span>
              Actuariat
            </h3>
            
            {filterSkills('actuarial').map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </span>
              Blockchain
            </h3>
            
            {filterSkills('blockchain').map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transform hover:scale-105 transition-transform duration-300 md:col-span-2 lg:col-span-1">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="w-10 h-10 bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </span>
              Programmation
            </h3>
            
            {filterSkills('programming').map((skill, index) => (
              <SkillBar key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;