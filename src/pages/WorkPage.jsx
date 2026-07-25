import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MenuOverlay from '../components/MenuOverlay';
import OscilloscopeLine from '../components/OscilloscopeLine';

export default function WorkPage({ onReplayLanding }) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mainMousePos, setMainMousePos] = useState({ x: null, y: null, isHovering: false });
  const scrollRef = useRef(null);

  // Enable vertical mouse wheel to scroll horizontally
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY * 1.8;
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

  const handleMainMouseMove = (e) => {
    setMainMousePos({
      x: e.clientX,
      y: e.clientY,
      isHovering: true
    });
  };

  const handleMainMouseLeave = () => {
    setMainMousePos({ x: null, y: null, isHovering: false });
  };

  // 5 Portfolio Projects in exact order: 1->2->3->4->5
  const projects = [
    {
      id: 1,
      number: '1',
      slug: 'metu-rover',
      lines: ['METU ROVER', 'TEAM · 2023-', '2025'],
      caption: []
    },
    {
      id: 2,
      number: '2',
      slug: 'industrial-solutions',
      lines: ['INDUSTRIAL', 'SOLUTIONS ·', '2020-2026'],
      caption: []
    },
    {
      id: 3,
      number: '3',
      slug: 'aerial-systems',
      lines: ['AERIAL', 'SYSTEMS · 2021'],
      caption: ['Custom Quadcopter', 'Platform']
    },
    {
      id: 4,
      number: '4',
      slug: 'marine-systems',
      lines: ['MARINE', 'SYSTEMS · 2019'],
      caption: ["'KRAKEN' Modular", "ROV"]
    },
    {
      id: 5,
      number: '5',
      slug: 'control-systems',
      lines: ['CONTROL', 'SYSTEMS ·', '2026'],
      caption: []
    }
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-tr from-[#122e20] via-[#1a442e] via-50% to-[#286644] text-[#0a0a0a] flex flex-col justify-between select-none">
      {/* Background Glows */}
      <div className="absolute bottom-0 left-0 w-[45vw] h-[45vw] bg-[radial-gradient(circle_at_0%_100%,rgba(37,226,103,0.3),transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_100%_0%,rgba(33,82,57,0.55),transparent_70%)] pointer-events-none" />

      {/* Navbar */}
      <Navbar isMenuOpen={isMenuOpen} onMenuToggle={() => setIsMenuOpen((prev) => !prev)} />

      {/* Fullscreen Menu Overlay */}
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Horizontal Side-Scrollable Work Columns */}
      <main 
        ref={scrollRef}
        onMouseMove={handleMainMouseMove}
        onMouseLeave={handleMainMouseLeave}
        className="relative z-10 my-auto w-full h-full pt-16 pb-4 overflow-x-auto flex items-center px-6 md:px-12 scrollbar-none overflow-y-visible"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex items-stretch h-[85vh] min-w-max mx-auto overflow-visible">
          {projects.map((proj) => (
            <React.Fragment key={proj.id}>
              {/* Vertical Project Column */}
              <div 
                onClick={() => navigate(`/work/${proj.slug}`)}
                className="group relative z-0 w-[250px] shrink-0 h-full flex flex-col items-center justify-between px-1 cursor-pointer overflow-visible"
              >
                
                {/* Content Container */}
                <div className="flex flex-col items-center justify-start text-center h-full transition-transform duration-500 ease-out group-hover:-translate-y-24 md:group-hover:-translate-y-[8.75rem] pt-2 pb-6 w-full pointer-events-none overflow-visible">
                  
                  {/* Upper Area: Giant Roslindale Display Number */}
                  <div className="overflow-visible pt-2 flex-shrink-0">
                    <span className="work-num-large text-[#0a0a0a] group-hover:text-[#25e267] transition-colors duration-300 select-none">
                      {proj.number}
                    </span>
                  </div>

                  {/* Lower Area: Headline Typography */}
                  <div className="relative z-0 w-full flex flex-col items-center text-center px-0.5 mt-[3vh]">
                    {proj.lines.map((lineText, lIdx) => (
                      <h2 
                        key={lIdx}
                        className="work-title-ayer text-[#0a0a0a] text-center"
                      >
                        {lineText}
                      </h2>
                    ))}

                    {/* Sub-caption below title */}
                    {proj.caption.length > 0 && (
                      <div className="mt-[1.5vh] flex flex-col items-center text-center">
                        {proj.caption.map((capLine, cIdx) => (
                          <p 
                            key={cIdx} 
                            className="work-caption-large text-[#0a0a0a]/90 text-center"
                          >
                            {capLine}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Curved Downward Arrow */}
                <div className="absolute bottom-3 md:bottom-5 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400 pointer-events-none">
                  <svg className="w-14 h-22 md:w-16 md:h-28 text-[#0a0a0a]" viewBox="0 0 40 80" fill="none" stroke="currentColor">
                    <line x1="20" y1="2" x2="20" y2="74" strokeWidth="3.6" strokeLinecap="round" />
                    <path d="M 2 46 Q 14 54, 20 74 Q 26 54, 38 46" strokeWidth="3.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Separator Line */}
              <OscilloscopeLine 
                mouseX={mainMousePos.x}
                mouseY={mainMousePos.y}
                isHovering={mainMousePos.isHovering}
              />
            </React.Fragment>
          ))}
        </div>
      </main>
    </div>
  );
}
