import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ isMenuOpen, onMenuToggle }) {
  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 flex items-center justify-between px-8 md:px-16 py-8 pointer-events-none">
      {/* Toprak Logo */}
      <Link to="/" className="group flex items-center cursor-pointer pointer-events-auto">
        <img 
          src="/logo.png" 
          alt="Toprak Logo" 
          className={`h-10 md:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${
            isMenuOpen ? 'invert brightness-200' : ''
          }`}
        />
      </Link>

      {/* Sketched Burger Button */}
      <button 
        onClick={onMenuToggle}
        aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
        className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center cursor-pointer group transition-transform duration-300 hover:scale-105 pointer-events-auto"
      >
        {/* Outer Hand-Drawn Sketched Ring */}
        <div 
          className={`absolute animate-sketch-ring-1 pointer-events-none transition-all duration-500 ${
            isMenuOpen 
              ? '-inset-6 w-[calc(100%+3.5rem)] h-[calc(100%+3.5rem)] text-[#e5e3dc] opacity-100' 
              : '-inset-3 w-[calc(100%+1.5rem)] h-[calc(100%+1.5rem)] text-[#0a0a0a] opacity-90 group-hover:opacity-100'
          }`}
          style={{ transformOrigin: '50% 50%' }}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
            <path 
              d="M 50 5 C 75 4, 96 23, 95 49.5 C 94 76, 75 95.5, 49.5 95 C 24 94.5, 4.5 75.5, 5.5 49 C 6.5 23.5, 25 6, 50 5 Z" 
              stroke="currentColor" 
              strokeWidth={isMenuOpen ? "1" : "0.8"} 
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Inner Hand-Drawn Sketched Ring */}
        <div 
          className={`absolute animate-sketch-ring-2 pointer-events-none transition-all duration-500 ${
            isMenuOpen 
              ? '-inset-4.5 w-[calc(100%+2.6rem)] h-[calc(100%+2.6rem)] text-[#e5e3dc] opacity-90' 
              : '-inset-2 w-[calc(100%+1rem)] h-[calc(100%+1rem)] text-[#0a0a0a] opacity-80 group-hover:opacity-100'
          }`}
          style={{ transformOrigin: '50% 50%' }}
        >
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
            <path 
              d="M 48.5 7 C 73 5.5, 94.5 24.5, 96 50 C 97.5 74.5, 77 94, 51 93.5 C 25.5 93, 5 74, 4.5 48.5 C 4 23, 23.5 8.5, 48.5 7 Z" 
              stroke="currentColor" 
              strokeWidth={isMenuOpen ? "0.8" : "0.65"} 
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Center Lines: Equals (=) in closed state, '✕' Cross in open state */}
        <div className="relative flex flex-col items-center justify-center w-8 h-8 z-10">
          <span 
            className={`absolute h-[2px] rounded-full transition-all duration-300 ${
              isMenuOpen 
                ? 'w-7 md:w-9 bg-[#e5e3dc] rotate-45' 
                : 'w-4.5 md:w-5.5 bg-[#0a0a0a] -translate-y-1 group-hover:w-6.5'
            }`} 
          />
          <span 
            className={`absolute h-[2px] rounded-full transition-all duration-300 ${
              isMenuOpen 
                ? 'w-7 md:w-9 bg-[#e5e3dc] -rotate-45' 
                : 'w-7 md:w-8.5 bg-[#0a0a0a] translate-y-1'
            }`} 
          />
        </div>
      </button>
    </header>
  );
}
