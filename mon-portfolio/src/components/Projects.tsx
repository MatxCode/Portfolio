import { useEffect, useRef, useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
}

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState<string>('all');
  const [showAll, setShowAll] = useState(false);

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

  const projects: Project[] = [
    {
      id: 1,
      title: "ESIEA Connectify",
      description: "ESIEA Connectify est une plateforme sociale conçue pour les étudiants de l'ESIEA, dans le but de favoriser les échanges, la collaboration et le partage d'expériences au sein de la communauté étudiante.",
      image: "/Connectify.png",
      tags: ["Next.js", "MongoDB", "Vercel"],
      demoLink: "https://esiea-connectify.vercel.app/",
      codeLink: "https://github.com/MatxCode/MySocialApp"
    },
    {
      id: 2,
      title: "HairLab - Site de réservation en ligne",
      description: "HairLab est un site web moderne conçu pour un salon de coiffure afin de permettre aux clients de réserver leurs rendez-vous en ligne de manière simple et rapide. L'interface a été pensée pour offrir une expérience fluide, à la fois pour les utilisateurs et les gérants du salon.",
      image: "/MyRestaurant.png",
      tags: ["HTML - CSS", "PHP", "MySql"],
      demoLink: "#",
      codeLink: "https://github.com/MatxCode/HairLab"
    },
    {
      id: 3,
      title: "MyRestaurant - Site Vitrine",
      description: "MyRestaurant est un site vitrine responsive développé pour un restaurant fictif. Il met en valeur l'identité visuelle du restaurant à travers un design épuré et moderne, avec une navigation fluide et une structure claire.",
      image: "/MyRestaurant.png",
      tags: ["HTML - CSS", "JavaScript", "Bootstrap"],
      demoLink: "https://matxcode.github.io/MyRestaurant/index.html",
      codeLink: "https://github.com/MatxCode/MyRestaurant"
    },
    {
      id: 4,
      title: "Portfolio personnel",
      description: "Un site portfolio moderne avec animations et design responsive",
      image: "/Portfolio.png",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      demoLink: "https://portfolio-mateo-letertre.vercel.app/",
      codeLink: "https://github.com/MatxCode/Portfolio"
    },
    {
      id: 5,
      title: "SpringAI - Application intelligente avec Spring Boot",
      description: "SpringAI est une application web basée sur Spring Boot qui intègre les services d’intelligence artificielle d’OpenAI afin de proposer une interface simple et intuitive pour interagir avec un agent conversationnel intelligent.",
      image: "/spring-ai.png",
      tags: ["React", "SpringBoot", "API - OpenAi"],
      demoLink: "https://spring-ai-sand.vercel.app/",
      codeLink: "https://github.com/MatxCode/SpringAi"
    },
    {
      id: 6,
      title: "AudioTranscriber - Transcription audio automatisée",
      description: "AudioTranscriber est une application web développée avec Spring Boot, permettant aux utilisateurs de transcrire automatiquement des fichiers audio en texte grâce à l’intégration de modèles d’intelligence artificielle.",
      image: "/spring-ai.png",
      tags: ["React", "SpringBoot", "API - OpenAi"],
      demoLink: "#",
      codeLink: "https://github.com/MatxCode/AudioTranscriber"
    },
    {
      id: 7,
      title: "WebApp To-Do-List – FastAPI, React & MongoDB",
      description: "Cette application web fullstack a été développée en combinant FastAPI pour le backend, React pour le frontend, et MongoDB comme base de données. Le but de ce projet était de créer une architecture moderne, performante et évolutive, tout en mettant en place des fonctionnalités concrètes de gestion de données.",
      image: "/farm-api.png",
      tags: ["React", "MongoDB", "Docker"],
      demoLink: "https://farm-api.vercel.app/",
      codeLink: "https://github.com/MatxCode/FARM-API"
    },
    {
      id: 8,
      title: "Task-Sphere - Application de gestion de projet avec Symfony",
      description: "ProjectBoard est une application web inspirée de Trello, développée avec Symfony pour permettre la gestion visuelle de projets à travers des tableaux, des colonnes et des cartes. Elle facilite l'organisation des tâches, le suivi de leur avancement et la collaboration entre membres d'une équipe.",
      image: "/farm-api.png",
      tags: ["MySql", "Symfony", "Docker"],
      demoLink: "#",
      codeLink: "https://github.com/MatxCode/task-sphere"
    },
  ];

  const categories = ["all", "React", "Next.js", "MongoDB", "HTML - CSS", "Vercel", "Docker"];
  
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(filter));

  // Determine which projects to display based on filter and showAll state
  const displayedProjects = filter === 'all' && !showAll 
    ? filteredProjects.slice(0, 4) 
    : filteredProjects;

  const handleShowAllClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowAll(true);
  };

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 bg-gray-950"
    >
      <div className="section-container">
        <h2 className={`section-title transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          Mes projets
        </h2>
        
        <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => {
                setFilter(category);
                // Reset showAll when changing filters
                if (category !== 'all') {
                  setShowAll(true);
                } else {
                  setShowAll(false);
                }
              }}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === category
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white'
                  : 'bg-gray-900 text-gray-400 hover:text-white'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-all duration-500 transform hover:-translate-y-2 hover:shadow-purple-500/20 transition-all duration-1000 delay-${index * 100 + 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-purple-600 rounded text-sm font-medium hover:bg-purple-700 transition-colors"
                  >
                    Démo
                  </a>
                  <a 
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-purple-600 rounded text-sm font-medium hover:bg-purple-600/10 transition-colors"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filter === 'all' && !showAll && filteredProjects.length > 4 && (
          <div className={`text-center mt-12 transition-all duration-1000 delay-600 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <a 
              href="#"
              onClick={handleShowAllClick}
              className="px-6 py-3 border border-purple-500 rounded-md font-medium hover:bg-purple-500/10 transition-colors inline-block"
            >
              Voir tous les projets
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;