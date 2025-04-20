import { useState, useEffect } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Projects from './components/Projects.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simuler un chargement
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black">
        <div className="text-4xl text-purple-500 font-bold animate-pulse">
          Chargement...
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;