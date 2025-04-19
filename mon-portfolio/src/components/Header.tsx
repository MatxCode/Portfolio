// src/components/Header.tsx
import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold gradient-text">
          Matéo LETERTRE<span className="text-white">.</span>
        </a>
        
        {/* Menu pour desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-white hover:text-purple-400 transition-colors">
            À propos
          </a>
          <a href="#projects" className="text-white hover:text-purple-400 transition-colors">
            Projets
          </a>
          <a href="#contact" className="text-white hover:text-purple-400 transition-colors">
            Contact
          </a>
          <a
            href="#"
            className="bg-gradient-to-r from-purple-500 to-pink-600 px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            CV
          </a>
        </nav>
        
        {/* Bouton menu mobile */}
        <button
          className="md:hidden mr-12 text-2xl text-white font-bold p-2 focus:outline-none hover:text-purple-400 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 absolute top-full left-0 w-full py-4 backdrop-blur-md">
        <nav className="flex flex-col items-center space-y-4">
          <a
            href="#about"
            className="hover:text-purple-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            À propos
          </a>
          <a
            href="#projects"
            className="hover:text-purple-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Projets
          </a>
          <a
            href="#contact"
            className="hover:text-purple-400 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
          <a
            href="#"
            className="bg-gradient-to-r from-purple-500 to-pink-600 px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            CV
          </a>
        </nav>
      </div>
      )}
    </header>
  );
};

export default Header;