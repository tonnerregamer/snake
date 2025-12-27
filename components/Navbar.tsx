import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-zinc-950/80 backdrop-blur-md border-zinc-800 py-4' : 'bg-transparent border-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-brand-500 rounded flex items-center justify-center transform group-hover:rotate-12 transition-transform">
            <span className="font-mono text-zinc-950 font-bold text-xl">S</span>
          </div>
          <span className="text-xl font-bold tracking-tighter text-white">
            SNAKE<span className="text-brand-400">ZONE</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Le Jeu</a>
          <a href="#requirements" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Infos</a>
          <a href="#download" className="px-5 py-2 bg-white text-zinc-950 text-sm font-bold rounded hover:bg-zinc-200 transition-colors">
            Télécharger
          </a>
        </div>
      </div>
    </nav>
  );
};