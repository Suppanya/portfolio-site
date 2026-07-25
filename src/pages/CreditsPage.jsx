import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import MenuOverlay from '../components/MenuOverlay';

export default function CreditsPage({ onReplayLanding }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const creditSections = [
    {
      category: 'DESIGN SYSTEM & TYPOGRAPHY',
      items: [
        { label: 'Display Headings', value: 'Roslindale Display Condensed' },
        { label: 'Subheadings & Accents', value: 'Ayer Medium' },
        { label: 'Body & Navigation', value: 'Neue Montreal' },
        { label: 'Visual Elements', value: 'Kinetic Oscilloscope & Dynamic SVG Physics' }
      ]
    },
    {
      category: 'WEB ARCHITECTURE & ACKNOWLEDGMENTS',
      items: [
        { 
          label: 'Original Concept', 
          value: (
            <a 
              href="https://github.com/MAGGIx1404/webgl-portfolio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#25e267] transition-colors duration-300 underline underline-offset-4 decoration-current/30"
            >
              Jeet (MAGGIx1404)
            </a>
          ) 
        },
        { label: 'Core Stack', value: 'React 18 · Vite · Tailwind CSS · Framer Motion' }
      ]
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-tr from-[#122e20] via-[#1a442e] via-50% to-[#286644] text-[#e5e3dc] flex flex-col justify-between select-none font-sans overflow-x-hidden">
      {/* Background Glows */}
      <div className="fixed bottom-0 left-0 w-[45vw] h-[45vw] bg-[radial-gradient(circle_at_0%_100%,rgba(37,226,103,0.3),transparent_70%)] pointer-events-none z-0" />
      <div className="fixed top-0 right-0 w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_100%_0%,rgba(33,82,57,0.55),transparent_70%)] pointer-events-none z-0" />

      {/* Navbar */}
      <Navbar isMenuOpen={isMenuOpen} onMenuToggle={() => setIsMenuOpen((prev) => !prev)} />

      {/* Menu Overlay */}
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Main Content Area */}
      <main className="relative z-10 my-auto w-full max-w-[1000px] mx-auto px-6 sm:px-12 pt-28 pb-24 flex flex-col items-start justify-center">
        
        {/* Roslindale Display Headline */}
        <h1 className="font-['Roslindale_Display_Condensed',serif] text-6xl sm:text-8xl md:text-[8.5rem] leading-[0.85] text-[#e5e3dc] tracking-tight uppercase mb-4 font-normal">
          CREDITS
        </h1>

        {/* Emerald Ayer Sub-caption */}
        <div className="font-['Ayer',serif] text-[#25e267] text-lg sm:text-xl font-medium tracking-[0.08em] uppercase mb-12">
          DESIGN ARCHITECTURE &amp; ACKNOWLEDGMENTS
        </div>

        {/* Structured Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 border-t border-[#e5e3dc]/20">
          {creditSections.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              <h2 className="font-['Ayer',serif] text-[#25e267] text-sm uppercase tracking-widest">
                {section.category}
              </h2>
              <div className="space-y-4">
                {section.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex flex-col sm:flex-row sm:items-baseline justify-between pb-3 border-b border-[#e5e3dc]/10 gap-1">
                    <span className="font-['Neue_Montreal',sans-serif] text-sm text-[#e5e3dc]/60 uppercase tracking-wider">
                      {item.label}
                    </span>
                    <span className="font-['Neue_Montreal',sans-serif] text-base sm:text-lg text-[#e5e3dc]/90">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
