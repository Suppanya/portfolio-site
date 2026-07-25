import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import MenuOverlay from '../components/MenuOverlay';

export default function ContactPage({ onReplayLanding }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen overflow-y-auto bg-gradient-to-tr from-[#122e20] via-[#1a442e] via-50% to-[#286644] text-[#e5e3dc] flex flex-col justify-between select-none font-sans">
      {/* Background Glows */}
      <div className="fixed bottom-0 left-0 w-[45vw] h-[45vw] bg-[radial-gradient(circle_at_0%_100%,rgba(37,226,103,0.3),transparent_70%)] pointer-events-none z-0" />
      <div className="fixed top-0 right-0 w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_100%_0%,rgba(33,82,57,0.55),transparent_70%)] pointer-events-none z-0" />

      {/* Navbar */}
      <Navbar isMenuOpen={isMenuOpen} onMenuToggle={() => setIsMenuOpen((prev) => !prev)} />

      {/* Menu Overlay */}
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Main Content Area */}
      <main className="relative z-10 my-auto w-full max-w-[960px] mx-auto px-6 sm:px-12 pt-28 pb-24 flex flex-col items-start justify-center">
        
        {/* Roslindale Display Headline */}
        <h1 className="font-['Roslindale_Display_Condensed',serif] text-6xl sm:text-8xl md:text-[9rem] leading-[0.85] text-[#e5e3dc] tracking-tight uppercase mb-4 font-normal">
          CONTACT
        </h1>

        {/* Emerald Ayer Sub-caption */}
        <div className="font-['Ayer',serif] text-[#25e267] text-lg sm:text-xl font-medium tracking-[0.08em] uppercase mb-8">
          OPEN FOR COLLABORATIONS &amp; OPPORTUNITIES | ANKARA, TURKEY
        </div>

        {/* Intro Text */}
        <p className="font-['Neue_Montreal',sans-serif] text-lg sm:text-xl md:text-2xl leading-relaxed text-[#e5e3dc]/90 font-normal mb-12 max-w-[760px]">
          I am constantly looking for new challenges in aerospace engineering, robotics, and mechanical design. Open to prototyping, part-time work, and design engineering opportunities.
        </p>

        {/* Contact Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-[760px] pt-8 border-t border-[#e5e3dc]/20">
          <div>
            <div className="font-['Ayer',serif] text-[#25e267] text-sm uppercase tracking-wider mb-2">EMAIL</div>
            <a 
              href="mailto:karademirtoprak@gmail.com"
              className="font-['Neue_Montreal',sans-serif] text-xl sm:text-2xl text-[#e5e3dc] hover:text-[#25e267] transition-colors duration-300 block"
            >
              karademirtoprak@gmail.com
            </a>
          </div>

          <div>
            <div className="font-['Ayer',serif] text-[#25e267] text-sm uppercase tracking-wider mb-2">LINKEDIN</div>
            <a
              href="https://www.linkedin.com/in/toprak-karademir/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-['Neue_Montreal',sans-serif] text-xl sm:text-2xl text-[#e5e3dc] hover:text-[#25e267] transition-colors duration-300 block"
            >
              linkedin.com/in/toprak-karademir
            </a>
          </div>

          <div>
            <div className="font-['Ayer',serif] text-[#25e267] text-sm uppercase tracking-wider mb-2">LOCATION</div>
            <div className="font-['Neue_Montreal',sans-serif] text-xl sm:text-2xl text-[#e5e3dc]">
              Ankara, Turkey
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
