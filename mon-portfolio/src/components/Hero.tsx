// src/components/Hero.tsx
import { useState, useEffect } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Fond avec effet de particules/grille */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(77,0,128,0.15),transparent_70%)]"></div>
      
      {/* Points lumineux d'arrière-plan */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              backgroundColor: 'white',
              borderRadius: '50%',
              animation: `pulse ${Math.random() * 3 + 2}s infinite alternate`
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes pulse {
          0% { opacity: 0.2; }
          100% { opacity: 1; }
        }
      `}</style>

      <div className="section-container text-center w-full max-w-4xl px-4">
        <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            Bonjour, je suis <span className="gradient-text">Matéo LETERTRE</span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 text-gray-300">
            Développeur Full-Stack
          </h2>
          <p className="text-lg md:text-xl mx-auto max-w-2xl mb-12 text-gray-400">
            Je crée des expériences web modernes et performantes avec une attention particulière aux détails.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center">
            <a 
              href="#projects" 
              className="px-8 py-3 mb-6 bg-gradient-to-r from-purple-500 to-pink-600 rounded-md font-medium hover:opacity-90 transition-opacity text-center"
            >
              Voir mes projets
            </a>
            <a 
              href="#contact" 
              className="px-8 py-3 border border-purple-500 rounded-md font-medium hover:bg-purple-500/10 transition-colors text-center"
            >
              Me contacter
            </a>
          </div>
          
          <div className="mt-12 flex justify-center space-x-6">
            <a href="https://github.com/MatxCode" aria-label="Github" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/mateo-letertre/" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      {/* Flèche de défilement */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Défiler vers le bas">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;