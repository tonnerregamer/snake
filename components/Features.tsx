import React from 'react';
import { GameFeature } from '../types';

const features: GameFeature[] = [
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

const IconMap: Record<string, React.ReactNode> = {
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

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 px-6 bg-zinc-950">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Why Play?</h2>
          <div className="h-1 w-20 bg-brand-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
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