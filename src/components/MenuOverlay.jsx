import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function MenuOverlay({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: '-100%' }}
        animate={{ opacity: 1, y: '0%' }}
        exit={{ opacity: 0, y: '-100%' }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-40 w-full h-screen bg-[#0a0a0a] text-[#e5e3dc] flex flex-col justify-between px-8 md:px-16 py-12 select-none overflow-hidden"
      >
        {/* Main Menu Grid Content */}
        <div className="my-auto w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-16">
          {/* Left Column: INDEX, WORK, ABOUT */}
          <div className="md:col-span-8 flex flex-col gap-4 md:gap-8">
            {/* Item 1: INDEX */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="w-fit"
            >
              <Link 
                to="/"
                onClick={onClose}
                className="group flex items-baseline gap-4 md:gap-8 cursor-pointer w-fit py-2 px-3 pl-4 md:pl-16"
              >
                <span className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-transparent group-hover:border-[#e5e3dc]/70 flex items-center justify-center text-xs md:text-sm font-mono text-[#e5e3dc]/50 group-hover:text-[#e5e3dc] transition-all duration-300 shrink-0">
                  I
                </span>
                <span className="hero-head-white text-[clamp(4.2rem,11vw,11vw)] text-[#e5e3dc] group-hover:text-[#d9641f] transition-colors duration-300">
                  INDEX
                </span>
              </Link>
            </motion.div>

            {/* Item 2: WORK */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className="w-fit"
            >
              <Link 
                to="/work"
                onClick={onClose}
                className="group flex items-baseline gap-4 md:gap-8 cursor-pointer w-fit py-2 px-3 pl-12 md:pl-36"
              >
                <span className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-transparent group-hover:border-[#e5e3dc]/70 flex items-center justify-center text-xs md:text-sm font-mono text-[#e5e3dc]/50 group-hover:text-[#e5e3dc] transition-all duration-300 shrink-0">
                  II
                </span>
                <span className="hero-head-white text-[clamp(4.2rem,11vw,11vw)] text-[#e5e3dc] group-hover:text-[#d9641f] transition-colors duration-300">
                  WORK
                </span>
              </Link>
            </motion.div>

            {/* Item 3: ABOUT */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="w-fit"
            >
              <Link 
                to="/about"
                onClick={onClose}
                className="group flex items-baseline gap-4 md:gap-8 cursor-pointer w-fit py-2 px-3 pl-4 md:pl-16"
              >
                <span className="w-8 h-8 md:w-9 md:h-9 rounded-full border border-transparent group-hover:border-[#e5e3dc]/70 flex items-center justify-center text-xs md:text-sm font-mono text-[#e5e3dc]/50 group-hover:text-[#e5e3dc] transition-all duration-300 shrink-0">
                  III
                </span>
                <span className="hero-head-white text-[clamp(4.2rem,11vw,11vw)] text-[#e5e3dc] group-hover:text-[#d9641f] transition-colors duration-300">
                  ABOUT
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Contact & Credits */}
          <div className="md:col-span-4 flex flex-col justify-between h-full min-h-[320px] pr-12 md:pr-40 lg:pr-52 text-right">
            {/* Contact Link */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="pt-8"
            >
              <Link
                to="/contact"
                onClick={onClose}
                className="group inline-block py-2 px-4 hero-italic-white text-3xl md:text-5xl text-[#e5e3dc] hover:text-[#d9641f] transition-colors duration-300"
              >
                Contact
              </Link>
            </motion.div>

            {/* Credits Link */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="pb-8"
            >
              <Link
                to="/credits"
                onClick={onClose}
                className="group inline-block py-2 px-4 hero-italic-white text-3xl md:text-5xl text-[#e5e3dc] hover:text-[#d9641f] transition-colors duration-300"
              >
                Credits
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
