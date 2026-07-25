import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import MenuOverlay from './MenuOverlay';

export default function HomeScreen({ onReplayLanding }) {
  // Tagline toggle index: 0 = PRECISION / AEROSPACE, 1 = TORQUE / DESIGN
  const [taglineIndex, setTaglineIndex] = useState(0);

  // Fullscreen menu overlay open/close state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const taglines = [
    { word1: 'PRECISION', word2: 'AEROSPACE' },
    { word1: 'TORQUE', word2: 'DESIGN' }
  ];

  const currentTagline = taglines[taglineIndex];

  const handlePerformClick = () => {
    setTaglineIndex((prev) => (prev === 0 ? 1 : 0));
  };

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-tr from-[#122e20] via-[#1a442e] via-50% to-[#286644] text-[#0a0a0a] flex flex-col justify-between select-none">
      {/* Top-Right Emerald Radial Glow */}
      <div className="absolute top-0 right-0 w-[65vw] h-[65vw] bg-[radial-gradient(circle_at_100%_0%,rgba(37,226,103,0.35),transparent_70%)] pointer-events-none" />

      {/* Header / Navbar */}
      <Navbar isMenuOpen={isMenuOpen} onMenuToggle={handleMenuToggle} />

      {/* Fullscreen Menu Overlay */}
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Main Hero Typography Section */}
      <main className="relative z-10 my-auto w-full max-w-[96vw] mx-auto px-4 md:px-8 flex flex-col justify-center gap-1 md:gap-3">
        {/* Line 1: 'the' (Static) + PRECISION / TORQUE (Dynamic) */}
        <div className="flex items-baseline justify-start pl-4 md:pl-16 lg:pl-28 gap-6 md:gap-14">
          {/* 100% Stationary 'the' */}
          <span className="hero-italic-black text-4xl md:text-7xl tracking-normal shrink-0 w-16 md:w-28 text-left -translate-y-3 md:-translate-y-5 font-light">
            the
          </span>
          <div className="overflow-hidden pt-2">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentTagline.word1}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="hero-head-black text-[clamp(4.2rem,13vw,13vw)]"
              >
                {currentTagline.word1}
              </motion.h1>
            </AnimatePresence>
          </div>
        </div>

        {/* Line 2: 'of' (Thinner, Moved Higher) + AEROSPACE / DESIGN (Moved Downward) */}
        <div className="flex items-baseline justify-start pl-16 md:pl-48 lg:pl-64 gap-6 md:gap-14">
          {/* 100% Stationary 'of' */}
          <span className="hero-italic-black text-6xl md:text-9xl lg:text-[7.5rem] shrink-0 w-20 md:w-36 text-left -translate-y-4 md:-translate-y-7 font-light">
            of
          </span>
          {/* AEROSPACE / DESIGN shifted downward */}
          <div className="overflow-hidden translate-y-3 md:translate-y-5 pt-2">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentTagline.word2}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                exit={{ y: '-100%', opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="hero-head-black text-[clamp(4.2rem,13.5vw,13.5vw)]"
              >
                {currentTagline.word2}
              </motion.h2>
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Bottom Footer Section */}
      <footer className="relative z-10 w-full px-6 md:px-12 pb-8 md:pb-12 flex items-end justify-between">
        {/* Clickable Perform Quote */}
        <div className="pl-0 md:pl-20 lg:pl-32">
          <p className="font-sans text-sm md:text-base lg:text-lg tracking-wide text-[#0a0a0a]/90 font-medium flex items-center gap-1.5 flex-wrap">
            <span>&quot;precision engineering, built to</span>
            
            {/* Interactive "perform" word with Moving Rectangular Box */}
            <span
              onClick={handlePerformClick}
              className="relative inline-block cursor-pointer group px-2.5 py-0.5 text-[#0a0a0a] font-bold transition-all"
            >
              <span className="relative z-10">perform</span>

              {/* Continuous Attention-Grabbing Rectangular Box Movement */}
              <span className="animate-perform-attention absolute inset-0 border border-[#0a0a0a] group-hover:bg-[#0a0a0a]/10 group-hover:scale-115 pointer-events-none transition-all duration-200" />
            </span>
            <span>&quot;</span>
          </p>
        </div>

        {/* Replay Landing Prompt */}
        <div className="flex items-center gap-3">
          <button
            onClick={onReplayLanding}
            className="text-xs font-mono tracking-widest text-[#0a0a0a]/60 hover:text-[#0a0a0a] uppercase transition-colors cursor-pointer"
          >
            [ Replay Splash ]
          </button>
        </div>
      </footer>
    </div>
  );
}
