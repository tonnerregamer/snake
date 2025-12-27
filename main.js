// Types and Interfaces
// (Note: Babel strips these out at runtime, but helpful for structure)

const DownloadStatus = {
  IDLE: 'IDLE',
  DOWNLOADING: 'DOWNLOADING',
  COMPLETED: 'COMPLETED'
};

// --- COMPONENTS ---

// 1. Navbar Component
const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
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
          <a href="#features" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Features</a>
          <a href="#requirements" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Specs</a>
          <a href="#download" className="px-5 py-2 bg-white text-zinc-950 text-sm font-bold rounded hover:bg-zinc-200 transition-colors">
            Download
          </a>
        </div>
      </div>
    </nav>
  );
};

// 2. Hero Component
const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
          <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">Latest Build Available</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter text-white mb-6 leading-none">
          THE LEGEND <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-600">REMASTERED</span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
          The definitive arcade experience. Precision controls, zero latency, and pure skill-based gameplay. Designed for competitive players.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#download" className="w-full sm:w-auto px-8 py-4 bg-brand-500 hover:bg-brand-400 text-zinc-950 font-bold text-lg rounded transition-all transform hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(74,222,128,0.5)]">
            Download Client
          </a>
          <a href="#features" className="w-full sm:w-auto px-8 py-4 bg-zinc-900 border border-zinc-800 text-white font-medium text-lg rounded hover:bg-zinc-800 transition-all">
            View Features
          </a>
        </div>

        {/* Abstract Geometric Decoration */}
        <div className="mt-20 relative max-w-4xl mx-auto h-64 md:h-96 border border-zinc-800 rounded-lg bg-zinc-900/50 backdrop-blur-sm flex items-center justify-center overflow-hidden group">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[shimmer_3s_infinite] opacity-20"></div>
          
          <div className="relative z-10 grid grid-cols-3 gap-8 text-center p-8 w-full">
             <div className="flex flex-col items-center gap-4 group-hover:-translate-y-2 transition-transform duration-500">
                <div className="w-16 h-16 rounded-full border-2 border-brand-500/30 flex items-center justify-center">
                    <span className="text-2xl font-mono font-bold text-brand-500">01</span>
                </div>
                <p className="font-mono text-sm text-zinc-500">DEPLOY</p>
             </div>
             <div className="flex flex-col items-center gap-4 group-hover:-translate-y-2 transition-transform duration-500 delay-100">
                <div className="w-16 h-16 rounded-full border-2 border-brand-500/30 flex items-center justify-center">
                    <span className="text-2xl font-mono font-bold text-brand-500">02</span>
                </div>
                <p className="font-mono text-sm text-zinc-500">SURVIVE</p>
             </div>
             <div className="flex flex-col items-center gap-4 group-hover:-translate-y-2 transition-transform duration-500 delay-200">
                <div className="w-16 h-16 rounded-full border-2 border-brand-500/30 flex items-center justify-center">
                    <span className="text-2xl font-mono font-bold text-brand-500">03</span>
                </div>
                <p className="font-mono text-sm text-zinc-500">DOMINATE</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 3. Features Component
const featuresList = [
  {
    id: '1',
    title: 'Core Mechanics',
    description: 'The classic gameplay you know, refined. Responsive controls and pixel-perfect collision detection.',
    icon: 'zap'
  },
  {
    id: '2',
    title: 'Native Performance',
    description: 'Custom engine built for speed. Runs at locked 60 FPS on any hardware configuration.',
    icon: 'code'
  },
  {
    id: '3',
    title: 'Portable Binary',
    description: 'Zero installation required. Single executable file that runs instantly from any directory.',
    icon: 'shield'
  },
  {
    id: '4',
    title: 'Competitive Scoring',
    description: 'Local high-score tracking with instant replay capability. Challenge your limits.',
    icon: 'users'
  }
];

const IconMap = {
  zap: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  code: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  shield: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  users: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  )
};

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 bg-zinc-950">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Play?</h2>
          <div className="h-1 w-20 bg-brand-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresList.map((feature) => (
            <div key={feature.id} className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-brand-500/50 transition-colors group">
              <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-400 group-hover:text-brand-400 group-hover:bg-brand-900/20 transition-all mb-6">
                {IconMap[feature.icon]}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 4. Download Section Component
const DownloadSection = () => {
  const [status, setStatus] = React.useState(DownloadStatus.IDLE);

  const handleDownload = () => {
    if (status !== DownloadStatus.IDLE) return;
    
    setStatus(DownloadStatus.DOWNLOADING);
    
    // Simulate download delay
    setTimeout(() => {
      setStatus(DownloadStatus.COMPLETED);
      // Create a fake download link action
      const element = document.createElement("a");
      element.href = "./snake.zip"; 
      element.download = "snake.zip";
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
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">READY TO DEPLOY?</h2>
          <p className="text-zinc-400 mb-10 max-w-xl mx-auto">
            Get the executable, unzip, and launch. No DRM, no installers, just pure gameplay.
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
                    <span>DOWNLOAD .ZIP</span>
                  </>
                )}
                {status === DownloadStatus.DOWNLOADING && (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-zinc-950" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>DOWNLOADING...</span>
                  </>
                )}
                {status === DownloadStatus.COMPLETED && (
                  <>
                     <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>ENJOY!</span>
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
                <span>Virus Checked</span>
              </span>
              <span>•</span>
              <span>Ultra Lightweight</span>
              <span>•</span>
              <span>Freeware</span>
            </div>
          </div>
        </div>

        {/* System Requirements Mini-Table */}
        <div id="requirements" className="mt-20 border-t border-zinc-900 pt-10">
          <h3 className="text-xl font-bold text-white mb-6 font-mono text-center">SYSTEM REQUIREMENTS</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
             <div className="flex justify-between p-4 bg-zinc-900/50 rounded border border-zinc-800">
                <span className="text-zinc-500">OS</span>
                <span className="text-white font-mono">Windows 10/11</span>
             </div>
             <div className="flex justify-between p-4 bg-zinc-900/50 rounded border border-zinc-800">
                <span className="text-zinc-500">Processor</span>
                <span className="text-white font-mono">Any Dual Core</span>
             </div>
             <div className="flex justify-between p-4 bg-zinc-900/50 rounded border border-zinc-800">
                <span className="text-zinc-500">Memory</span>
                <span className="text-white font-mono">256 MB RAM</span>
             </div>
             <div className="flex justify-between p-4 bg-zinc-900/50 rounded border border-zinc-800">
                <span className="text-zinc-500">Storage</span>
                <span className="text-white font-mono">50 MB</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// 5. Footer Component
const Footer = () => {
  return (
    <footer className="py-10 border-t border-zinc-900 bg-zinc-950">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-6">
           <span className="text-2xl font-bold tracking-tighter text-white">
            SNAKE<span className="text-brand-500">ZONE</span>
          </span>
        </div>
        <p className="text-zinc-600 text-sm mb-4">
          © {new Date().getFullYear()} Snake Dev Studio. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 text-sm text-zinc-500">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
          <a href="#" className="hover:text-white transition-colors">Support</a>
        </div>
      </div>
    </footer>
  );
};

// 6. Main App Component
const App = () => {
  return (
    <div className="min-h-screen bg-zinc-950 font-sans selection:bg-brand-500 selection:text-zinc-950 overflow-x-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid-pattern opacity-[0.4]" />
      
      {/* Decorative ambient glows */}
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

// --- RENDER ---
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);