import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LandingPage({ onStart, onComplete }) {
  const [showButton, setShowButton] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  // Hide the white stroke layers once orange fill animations have completed
  const [strokeHidden, setStrokeHidden] = useState(false);

  useEffect(() => {
    // Show "Click anywhere to start" prompt after animation completes (~2.4s)
    const btnTimer = setTimeout(() => setShowButton(true), 2400);
    // Hide white strokes after orange fill-ins complete (~2.7s)
    const strokeTimer = setTimeout(() => setStrokeHidden(true), 2700);
    return () => {
      clearTimeout(btnTimer);
      clearTimeout(strokeTimer);
    };
  }, []);

  const handleClick = () => {
    // Not clickable until "Click anywhere" prompt has appeared
    if (!showButton || isExiting) return;
    setIsExiting(true);
    setTimeout(() => {
      if (onComplete) onComplete();
      if (onStart) onStart();
    }, 500);
  };

  const strokeStyle = {
    opacity: strokeHidden ? 0 : 1,
    transition: 'opacity 0.4s ease',
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onClick={handleClick}
          className={`fixed inset-0 w-full h-full bg-[#0a0a0a] flex flex-col justify-between items-center py-4 px-2 md:px-6 select-none z-50 overflow-hidden ${showButton ? 'cursor-pointer' : 'cursor-default'}`}
        >
          {/* Top Spacer */}
          <div className="h-2" />

          {/* Wider Main Layout */}
          <main className="flex flex-col items-center justify-center text-center w-full max-w-[96vw] mx-auto my-auto space-y-0">
            {/* Line 1: HELLO MY NAME IS */}
            <div className="overflow-hidden px-3 md:px-6 py-0.5">
              <h1 className="l-head-stroke animate-slide-up text-[clamp(2.5rem,7.4vw,7.4vw)]">
                HELLO MY NAME IS
              </h1>
            </div>

            {/* Line 2: TOPRAK. AEROSPACE */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 md:gap-x-10 py-0.5">
              <div className="overflow-hidden px-2 md:px-4 py-0.5">
                <div className="animate-slide-up relative inline-block text-left" style={{ animationDelay: '0.15s' }}>
                  {/* White stroke – hidden once orange fill completes */}
                  <h2 className="l-head-stroke text-[clamp(2.8rem,7vw,7vw)] pr-1" style={strokeStyle}>
                    TOPRAK.
                  </h2>
                  <div className="animate-width-fill absolute inset-0 overflow-hidden pointer-events-none pr-1" style={{ animationDelay: '0.8s' }}>
                    <h2 className="l-head-orange text-[clamp(2.8rem,7vw,7vw)] pr-1">
                      TOPRAK.
                    </h2>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden px-2 md:px-4 py-0.5">
                <h2 className="l-head-stroke animate-slide-up text-[clamp(2.8rem,7.4vw,7.4vw)]" style={{ animationDelay: '0.25s' }}>
                  AEROSPACE
                </h2>
              </div>
            </div>

            {/* Line 3: ENGINEER */}
            <div className="overflow-hidden px-3 md:px-6 py-0.5">
              <h2 className="l-head-stroke animate-slide-up text-[clamp(2.8rem,7.4vw,7.4vw)]" style={{ animationDelay: '0.35s' }}>
                ENGINEER
              </h2>
            </div>

            {/* Line 4: & FREELANCE */}
            <div className="overflow-hidden px-3 md:px-6 py-0.5">
              <h2 className="l-head-stroke animate-slide-up text-[clamp(2.6rem,7.2vw,7.2vw)]" style={{ animationDelay: '0.45s' }}>
                &amp; FREELANCE
              </h2>
            </div>

            {/* Line 5: DESIGNER */}
            <div className="overflow-hidden px-3 md:px-6 py-0.5">
              <div className="animate-slide-up relative inline-block text-left" style={{ animationDelay: '0.6s' }}>
                {/* White stroke – hidden once orange fill completes */}
                <h2 className="l-head-stroke text-[clamp(3.5rem,9.2vw,9.2vw)] pr-1" style={strokeStyle}>
                  DESIGNER
                </h2>
                <div className="animate-width-fill absolute inset-0 overflow-hidden pointer-events-none pr-1" style={{ animationDelay: '1.2s' }}>
                  <h2 className="l-head-orange text-[clamp(3.5rem,9.2vw,9.2vw)] pr-1">
                    DESIGNER
                  </h2>
                </div>
              </div>
            </div>
          </main>

          {/* Bottom Prompt – only visible once animations are done */}
          <footer className="pb-1 md:pb-2 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={showButton ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-3 md:gap-4 text-white font-sans text-base md:text-lg lg:text-xl tracking-wide font-normal"
            >
              <span>Click anywhere</span>
              <svg className="w-14 h-4 md:w-16 md:h-4 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68 10">
                <path fill="currentColor" d="M59.2,9.6V6.2h-58v-2c0,0,0,0,0,0h58V0.7L67,5.1L59.2,9.6z" />
              </svg>
              <span>to start</span>
            </motion.div>
          </footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
