import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Version Finale Disponible</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter text-white mb-6 leading-none">
          LE RETOUR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-600">DU SNAKE</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
          Le classique revisité pour les potes. Mangez des pommes, grandissez, évitez les murs et explosez le high-score.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#download" className="w-full sm:w-auto px-8 py-4 bg-brand-500 hover:bg-brand-400 text-zinc-950 font-bold text-lg rounded transition-all transform hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(74,222,128,0.5)]">
            Télécharger le Snake
          </a>
          <a href="#features" className="w-full sm:w-auto px-8 py-4 bg-zinc-900 border border-zinc-800 text-white font-medium text-lg rounded hover:bg-zinc-800 transition-all">
            Voir les détails
          </a>
        </div>

        {/* Abstract Geometric Decoration */}
        <div className="mt-20 relative max-w-4xl mx-auto h-64 md:h-96 border border-zinc-800 rounded-lg bg-zinc-900/50 backdrop-blur-sm flex items-center justify-center overflow-hidden group">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[shimmer_3s_infinite] opacity-20"></div>
          
          <div className="relative z-10 grid grid-cols-3 gap-8 text-center p-8 w-full">
             <div className="flex flex-col items-center gap-4 group-hover:-translate-y-2 transition-transform duration-500">
                <div className="w-16 h-16 rounded-full border-2 border-brand-500/30 flex items-center justify-center">
                    <span className="text-2xl font-mono font-bold text-brand-500">Z</span>
                </div>
                <p className="font-mono text-sm text-zinc-500">DÉZIPPER</p>
             </div>
             <div className="flex flex-col items-center gap-4 group-hover:-translate-y-2 transition-transform duration-500 delay-100">
                <div className="w-16 h-16 rounded-full border-2 border-brand-500/30 flex items-center justify-center">
                    <span className="text-2xl font-mono font-bold text-brand-500">S</span>
                </div>
                <p className="font-mono text-sm text-zinc-500">SURVIVRE</p>
             </div>
             <div className="flex flex-col items-center gap-4 group-hover:-translate-y-2 transition-transform duration-500 delay-200">
                <div className="w-16 h-16 rounded-full border-2 border-brand-500/30 flex items-center justify-center">
                    <span className="text-2xl font-mono font-bold text-brand-500">G</span>
                </div>
                <p className="font-mono text-sm text-zinc-500">GAGNER</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};