import React, { useState } from 'react';
import { DownloadStatus } from '../types';

export const DownloadSection: React.FC = () => {
  const [status, setStatus] = useState<DownloadStatus>(DownloadStatus.IDLE);

  const handleDownload = () => {
    if (status !== DownloadStatus.IDLE) return;
    
    setStatus(DownloadStatus.DOWNLOADING);
    
    // Simulate download delay
    setTimeout(() => {
      setStatus(DownloadStatus.COMPLETED);
      // Create a fake download link action
      const element = document.createElement("a");
      // C'EST ICI QUE TU METS LE NOM DE TON FICHIER ZIP
      element.href = "./mon_snake.zip"; 
      element.download = "mon_snake.zip";
      document.body.appendChild(element);
      element.click(); 
      document.body.removeChild(element);
      
      setTimeout(() => setStatus(DownloadStatus.IDLE), 3000);
    }, 1500);
  };

  return (
    <section id="download" className="py-20 px-6 relative overflow-hidden">
        {/* Background gradient specifically for this section */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 to-brand-950/20 z-0 pointer-events-none"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="glass-panel rounded-3xl p-8 md:p-12 text-center border border-zinc-800 shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">PRÊT À JOUER ?</h2>
          <p className="text-zinc-400 mb-10 max-w-xl mx-auto">
            Télécharge le fichier ZIP, décompresse-le (clic droit -> extraire), et lance le jeu. C'est tout.
          </p>

          <div className="flex flex-col items-center gap-6">
            <button 
              onClick={handleDownload}
              disabled={status === DownloadStatus.DOWNLOADING}
              className={`
                relative group overflow-hidden px-10 py-5 rounded-lg font-bold text-xl tracking-wider transition-all w-full md:w-auto min-w-[300px]
                ${status === DownloadStatus.COMPLETED 
                  ? 'bg-green-500 text-white cursor-default' 
                  : 'bg-white text-zinc-950 hover:bg-zinc-200'
                }
              `}
            >
              <div className="relative z-10 flex items-center justify-center gap-3">
                {status === DownloadStatus.IDLE && (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span>TÉLÉCHARGER LE ZIP</span>
                  </>
                )}
                {status === DownloadStatus.DOWNLOADING && (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-zinc-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>TÉLÉCHARGEMENT...</span>
                  </>
                )}
                {status === DownloadStatus.COMPLETED && (
                  <>
                     <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>BON JEU !</span>
                  </>
                )}
              </div>
              
              {/* Progress Bar Animation */}
              {status === DownloadStatus.DOWNLOADING && (
                <div className="absolute inset-0 bg-brand-400 w-full animate-[loading_1.5s_ease-in-out]"></div>
              )}
            </button>
            
            <div className="flex gap-8 text-xs font-mono text-zinc-500">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Safe</span>
              </span>
              <span>•</span>
              <span>Ultra Léger</span>
              <span>•</span>
              <span>Gratuit</span>
            </div>
          </div>
        </div>

        {/* System Requirements Mini-Table */}
        <div id="requirements" className="mt-20 border-t border-zinc-900 pt-10">
          <h3 className="text-xl font-bold text-white mb-6 font-mono text-center">CONFIGURATION</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
             <div className="flex justify-between p-4 bg-zinc-900/50 rounded border border-zinc-800">
                <span className="text-zinc-500">Système</span>
                <span className="text-white font-mono">Windows (Tout)</span>
             </div>
             <div className="flex justify-between p-4 bg-zinc-900/50 rounded border border-zinc-800">
                <span className="text-zinc-500">Processeur</span>
                <span className="text-white font-mono">N'importe lequel</span>
             </div>
             <div className="flex justify-between p-4 bg-zinc-900/50 rounded border border-zinc-800">
                <span className="text-zinc-500">Mémoire</span>
                <span className="text-white font-mono">Très peu</span>
             </div>
             <div className="flex justify-between p-4 bg-zinc-900/50 rounded border border-zinc-800">
                <span className="text-zinc-500">Espace</span>
                <span className="text-white font-mono">Quelques Mo</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};