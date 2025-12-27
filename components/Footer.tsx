import React from 'react';

export const Footer: React.FC = () => {
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