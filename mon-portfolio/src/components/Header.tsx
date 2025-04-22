// src/components/Header.tsx
import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fermer le menu quand on clique sur un lien
  const closeMenu = () => setIsMenuOpen(false);

  // Empêcher le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  // Fermer le menu en appuyant sur Echap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="fixed w-full z-50 bg-transparent py-4 top-0">
      <div className="max-w-6xl mt-4 mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold gradient-text">
          Matéo LETERTRE<span className="text-white">.</span>
        </a>

        {/* Menu desktop */}
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
          className="md:hidden mr-12 text-2xl text-white p-2 focus:outline-none hover:text-purple-400 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Menu mobile avec animation */}
      <div className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-md transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}
      style={{ top: '4rem', zIndex: 49 }}
      >
        <nav className="flex flex-col items-center space-y-6 h-full justify-center">
          <a
            href="#about"
            className="text-white hover:text-purple-400 transition-colors text-xl"
            onClick={closeMenu}
          >
            À propos
          </a>
          <a
            href="#projects"
            className="text-white hover:text-purple-400 transition-colors text-xl"
            onClick={closeMenu}
          >
            Projets
          </a>
          <a
            href="#contact"
            className="text-white hover:text-purple-400 transition-colors text-xl"
            onClick={closeMenu}
          >
            Contact
          </a>
          <a
            href="LETERTRE_Matéo_CV.pdf"
            className="bg-gradient-to-r from-purple-500 to-pink-600 px-6 py-3 rounded-md hover:opacity-90 transition-opacity text-white mt-4"
            onClick={closeMenu}
            target="_blank"
          >
            Télécharger mon CV
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;