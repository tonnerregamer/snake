import React from 'react';
import { Hero } from './components/Hero.tsx';
import { Features } from './components/Features.tsx';
import { DownloadSection } from './components/DownloadSection.tsx';
import { Footer } from './components/Footer.tsx';
import { Navbar } from './components/Navbar.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans selection:bg-brand-500 selection:text-zinc-950 overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern opacity-[0.4]" />
      
      {/* Decorative ambient glows - pure CSS, no images */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[128px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[128px] pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Features />
          <DownloadSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;