// src/components/About.tsx
import { useEffect, useRef, useState } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = [
    { name: 'React', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'Node.js', level: 65 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Next.js', level: 75 },
    { name: 'Python', level: 70 },
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-black"
    >
      <div className="section-container">
        <h2 className={`section-title transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          À propos de moi
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className={`transition-all duration-1000 delay-100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <p className="text-lg mb-6 text-gray-300">
              Je suis un développeur passionné qui aime créer des solutions web innovantes et intuitives. 
              Avec plusieurs années d'expérience dans le développement web, j'ai travaillé sur divers projets allant 
              des applications web complexes aux sites vitrines élégants.
            </p>
            <p className="text-lg mb-6 text-gray-300">
              Mon objectif est de combiner une excellente expérience utilisateur avec un code propre et maintenable. 
              J'accorde une grande importance à l'accessibilité et aux performances dans tous mes projets.
            </p>
            <p className="text-lg mb-6 text-gray-300">
              Quand je ne code pas, j'aime explorer les nouvelles technologies, contribuer à des projets open source, 
              et partager mes connaissances avec la communauté des développeurs.
            </p>
            
            <div className="mt-8">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-md font-medium hover:opacity-90 transition-opacity inline-block"
              >
                Me contacter
              </a>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <h3 className="text-2xl font-bold mb-6">Mes compétences</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full">
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-600 transition-all duration-1000 ease-out ${isVisible ? '' : 'w-0'}`}
                      style={{ width: isVisible ? `${skill.level}%` : '0%', transitionDelay: `${index * 100 + 300}ms` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center p-4 bg-gray-900 rounded-lg">
                <span className="text-xl font-bold gradient-text">2+</span>
                <span className="text-sm text-gray-400 text-center">Années d'expérience</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-900 rounded-lg">
                <span className="text-xl font-bold gradient-text">10+</span>
                <span className="text-sm text-gray-400 text-center">Projets terminés</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-900 rounded-lg">
                <span className="text-xl font-bold gradient-text">1+</span>
                <span className="text-sm text-gray-400 text-center">Clients satisfaits</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;