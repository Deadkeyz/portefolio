import React from 'react';
import { Calendar, Award, Book, Coffee } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            A propos de moi
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Combler le fossé entre la science actuarielle et les technologies émergentes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://img.freepik.com/premium-photo/education-concept-design-wooden-people-sign-graduation-cap-book-stairs-3d-render_46250-3300.jpg" 
                alt="Working with data" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-100 dark:bg-blue-900 rounded-lg -z-10"></div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Mon Cursus
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Actuellement étudiant en Master 2 d’actuariat à l’Université Félix‑Houphouët‑Boigny, je combine une solide formation quantitative à une passion pour l’innovation technologique. Mes projets académiques  concours et stage au sein d'Actu conseil
              (chef de groupe – hackathon Yango, challenge Sika Finance, Actuaire stagiaire) m’ont permis de consolider mes compétences en analyse de données, gestion des risques, modélisation financière et en audit actuariel.
              Polyvalent, je conçois des tableaux de bord décisionnels, entraîne des modèles prédictifs et réalise la tarification vie & non‑vie grâce à une maîtrise d’outils variés : VBA, Python, R, Power BI, Java et Docker.
              Curieux et créatif, je développe également des chatbots de trading et des solutions IA/Blockchain, tout en cultivant un esprit d’équipe et une communication claire.
              Mon objectif : mettre cette expertise au service d’organisations financières et assurantielles ainsi que les cabinets de conseils cherchant à transformer leurs processus actuariels et data‑driven par des approches innovantes.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                  <Calendar size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Experience</h4>
                  <p className="text-gray-600 dark:text-gray-400">3+ month</p> 
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Projets</h4>
                  <p className="text-gray-600 dark:text-gray-400">10+ Completed</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                  <Book size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Education</h4>
                  <p className="text-gray-600 dark:text-gray-400">Filière professionelle d'actuariat UFHB</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400">
                  <Coffee size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Outils IA</h4>
                  <p className="text-gray-600 dark:text-gray-400">Chatgpt, DeepSeek , Bolt , Sider </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;