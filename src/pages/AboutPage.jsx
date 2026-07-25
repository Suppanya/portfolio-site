import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MenuOverlay from '../components/MenuOverlay';

const BASE_ROW1 = [
  'METU', 'CAD DESIGN', 'FEA ANALYSIS', 'MECHANICAL INTEGRATION', 
  'SIEMENS NX', 'POINTWISE', 'TEAM LEADERSHIP', 'PROTOTYPING'
];
const BASE_ROW2 = [
  'SOLIDWORKS', 'ANSYS', 'FUSION 360', 'PYTHON / OPENCV', 
  'OPENFOAM', 'FDM / SLA 3D PRINTING', 'CNC MACHINING'
];
const BASE_ROW3 = [
  'MANUFACTURING', 'AEROSPACE', 'SYSTEMS INTEGRATION', 'RAPID PROTOTYPING', 
  'OPENROCKET', 'COMPOSITES', 'PART-TIME DESIGN'
];

const SKILLS_ROW1 = [...BASE_ROW1, ...BASE_ROW1, ...BASE_ROW1];
const SKILLS_ROW2 = [...BASE_ROW2, ...BASE_ROW2, ...BASE_ROW2];
const SKILLS_ROW3 = [...BASE_ROW3, ...BASE_ROW3, ...BASE_ROW3];

const CERTIFICATES = [
  { letter: 'A', title: 'ERC Space & Industry Standard', org: 'European Space Foundation', year: '2024' },
  { letter: 'B', title: 'ARC Certificate of Achievement', org: 'Uzay Keşif Topluluğu', year: '2025' },
  { letter: 'C', title: 'KOSGEB Entrepreneurship Training', org: 'KOSGEB', year: '2021' },
  { letter: 'D', title: 'IHA-1 Drone Pilot', org: 'Directorate General of Civil Aviation Turkey', year: '2021' },
];

const EXPERIENCE = [
  {
    role: 'Freelance Mechanical Designer',
    period: '2019 – Present',
    desc: 'Delivered mechanical design and prototyping solutions for diverse industries, including car repair shops, mineral factories, a filter factory, and small businesses requiring industrial design-to-production support.'
  },
  {
    role: 'METU Rover Team — Mechanical Lead',
    period: '2024 – 2025',
    desc: 'Directed a mechanical team of 19 members, designing nearly all rover systems including the 6-DOF robotic arm (90Nm torque capacity) and wheel steering system.'
  },
  {
    role: 'METU Rover Team — Senior Engineer & Drone Lead',
    period: '2023 – 2024',
    desc: "Designed the rover's science sample system and led drone development efforts. Oversaw design of multiple components to international competition standards."
  },
  {
    role: 'Independent Drone & Autonomous Projects',
    period: '2021 – 2024',
    desc: 'Designed and developed 2 underwater drones and 2 aerial drones, prioritizing stable flight dynamics, robust mechanical structures, and computer vision integration.'
  }
];

function SkillWord({ word, index }) {
  return (
    <span
      key={index}
      className="font-['Roslindale_Display_Condensed',serif] text-[9vw] leading-none cursor-default transition-colors duration-300 text-transparent hover:text-[#0a0a0a] shrink-0 px-4 select-none"
      style={{ WebkitTextStroke: '1.5px #0a0a0a' }}
    >
      {word}
    </span>
  );
}

export default function AboutPage({ onReplayLanding }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full bg-gradient-to-tr from-[#122e20] via-[#1a442e] to-[#286644] text-[#0a0a0a] select-none font-sans">
      {/* Background Glows */}
      <div className="fixed bottom-0 left-0 w-[45vw] h-[45vw] bg-[radial-gradient(circle_at_0%_100%,rgba(37,226,103,0.3),transparent_70%)] pointer-events-none z-0" />
      <div className="fixed top-0 right-0 w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_100%_0%,rgba(33,82,57,0.55),transparent_70%)] pointer-events-none z-0" />

      <Navbar isMenuOpen={isMenuOpen} onMenuToggle={() => setIsMenuOpen(p => !p)} />
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* ─── HERO ─── */}
      <section className="relative w-full h-[120vh] min-h-[750px] flex flex-col items-center justify-start pt-24 overflow-visible z-10">
        <div
          style={{ transform: `translateY(${scrollY * 0.65}px)` }}
          className="absolute top-24 left-0 right-0 z-0 text-center pointer-events-none"
        >
          <h1 className="font-['Roslindale_Display_Condensed',serif] text-[13.5vw] leading-[0.82] text-[#0a0a0a] uppercase font-normal tracking-tight">TOPRAK</h1>
          <h1 className="font-['Roslindale_Display_Condensed',serif] text-[13.5vw] leading-[0.82] text-[#0a0a0a] uppercase font-normal tracking-tight">KARADEMIR</h1>
        </div>
        {/* Photo Container */}
        <div
          style={{ transform: `translateY(${scrollY * 0.45}px)` }}
          className="relative z-10 w-[72vw] max-w-[480px] aspect-[4/5] mt-[26vh] shadow-2xl rounded-sm overflow-hidden border border-[#0a0a0a]/20"
        >
          <img src="/Placeholderpp.png" alt="Toprak Karademir" className="w-full h-full object-cover filter contrast-[1.05]" />
        </div>
      </section>

      {/* ─── STATEMENT (Exact 3 Lines Layout) ─── */}
      <section className="relative z-20 w-full max-w-[1100px] mx-auto px-4 sm:px-8 pt-8 pb-16 flex flex-col items-center text-center">
        <img src="/logo.png" alt="Logo" className="w-16 h-16 sm:w-20 sm:h-20 mb-10" />
        <div className="w-full font-['Roslindale_Display_Condensed',serif] text-[8.5vw] sm:text-[7.5vw] md:text-[6.8vw] lg:text-[6.2vw] leading-[0.88] tracking-tight uppercase">
          {/* Line 1 (Outlined): CURRENTLY STUDYING */}
          <div className="text-transparent whitespace-nowrap" style={{ WebkitTextStroke: '1.8px #0a0a0a' }}>
            CURRENTLY STUDYING
          </div>
          {/* Line 2 (Solid): AEROSPACE ENGINEERING */}
          <div className="text-[#0a0a0a] font-normal my-2 whitespace-nowrap">
            AEROSPACE ENGINEERING
          </div>
          {/* Line 3: AT METU. */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 whitespace-nowrap">
            <span className="text-transparent" style={{ WebkitTextStroke: '1.8px #0a0a0a' }}>AT</span>
            <span className="text-[#0a0a0a] font-normal">METU.</span>
          </div>
        </div>
      </section>

      {/* ─── SKILLS & TOOLS (text block) ─── */}
      <section className="relative z-20 w-full max-w-[960px] mx-auto px-6 sm:px-12 pt-12 pb-16 flex flex-col items-center text-center border-t border-[#0a0a0a]/20">
        <div className="font-['Ayer',serif] text-2xl sm:text-4xl md:text-5xl leading-relaxed text-[#0a0a0a]/95 font-medium mb-6">
          My skills : CAD Design, FEA Analysis, Mechanical Integration, Manufacturing &amp; Prototyping, Team Leadership
        </div>
        <div className="font-['Ayer',serif] text-xl sm:text-3xl md:text-4xl leading-relaxed text-[#0a0a0a]/80 font-normal">
          Tools : SolidWorks, Siemens NX, Fusion 360, ANSYS, OpenFOAM, Pointwise, Python/OpenCV, FDM/SLA 3D Printing, CNC Machining
        </div>
      </section>

      {/* ─── PROFESSIONAL SUMMARY & EXPERIENCE ─── */}
      <section className="relative z-20 w-full max-w-[1050px] mx-auto px-6 sm:px-12 py-20 border-t border-[#0a0a0a]/20">
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Left heading */}
          <div className="w-full md:w-[280px] shrink-0 flex flex-col items-start gap-1">
            <span className="font-['Ayer',serif] text-[12vw] md:text-[6.5vw] leading-[0.85] text-[#0a0a0a] font-medium tracking-tight">
              EXPERIENCE
            </span>
            <span className="font-['Neue_Montreal',sans-serif] text-sm tracking-[0.12em] uppercase text-[#0a0a0a]/70">
              5+ YEARS IN DESIGN &amp; ROBOTICS
            </span>
          </div>

          {/* Right list */}
          <div className="flex-1 flex flex-col space-y-10">
            {EXPERIENCE.map((item, idx) => (
              <div key={idx} className="pb-8 border-b border-[#0a0a0a]/20 last:border-b-0">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                  <h3 className="font-['Ayer',serif] text-2xl sm:text-3xl text-[#0a0a0a] font-medium">
                    {item.role}
                  </h3>
                  <span className="font-['Roslindale_Display_Condensed',serif] text-xl text-[#0a0a0a]/60 shrink-0">
                    {item.period}
                  </span>
                </div>
                <p className="font-['Neue_Montreal',sans-serif] text-base sm:text-lg text-[#0a0a0a]/80 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MY ACHIEVEMENTS (Certificates) ─── */}
      <section className="relative z-20 w-full max-w-[1050px] mx-auto px-6 sm:px-12 py-24 border-t border-[#0a0a0a]/20">
        <div className="flex flex-col md:flex-row items-start gap-12">

          {/* Left – heading (Logo removed above MY) */}
          <div className="w-full md:w-[280px] shrink-0 flex flex-col items-start gap-1">
            <span className="font-['Ayer',serif] text-[14vw] md:text-[8vw] leading-[0.85] text-[#0a0a0a] font-medium tracking-tight">
              MY
            </span>
            <span className="font-['Neue_Montreal',sans-serif] text-base sm:text-lg tracking-[0.12em] uppercase text-[#0a0a0a]/80 leading-tight">
              ACHIEVEMENTS
            </span>
          </div>

          {/* Right – certificate items */}
          <div className="flex-1 flex flex-col">
            {CERTIFICATES.map(({ letter, title, org, year }, i) => (
              <div key={letter}>
                {i === 0 && <div className="w-full h-px bg-[#0a0a0a]/20 mb-8" />}
                <div className="flex items-start justify-between pb-10">
                  <div className="flex items-start gap-5">
                    <div className="w-11 h-11 rounded-full bg-[#0a0a0a] text-[#e5e3dc] flex items-center justify-center font-['Roslindale_Display_Condensed',serif] text-lg font-medium shrink-0 mt-1">
                      {letter}
                    </div>
                    <div>
                      <h3 className="font-['Ayer',serif] text-3xl sm:text-4xl text-[#0a0a0a] font-medium mb-2 leading-tight">
                        {title}
                      </h3>
                      <p className="font-['Neue_Montreal',sans-serif] text-base text-[#0a0a0a]/65">
                        {org}
                      </p>
                    </div>
                  </div>
                  <div className="font-['Roslindale_Display_Condensed',serif] text-2xl text-[#0a0a0a]/55 shrink-0 ml-6 mt-1">
                    {year}
                  </div>
                </div>
                <div className="w-full h-px bg-[#0a0a0a]/20 mb-8" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DECORATIVE SKILL ROWS ─── */}
      <div className="relative z-20 w-full overflow-hidden py-10">
        <div className="overflow-hidden w-full mb-2">
          <div style={{ transform: `translateX(${-scrollY * 0.25}px)` }} className="flex whitespace-nowrap w-max">
            {SKILLS_ROW1.map((w, idx) => <SkillWord key={idx} word={w} index={idx} />)}
          </div>
        </div>
        <div className="overflow-hidden w-full mb-2">
          <div style={{ transform: `translateX(${scrollY * 0.25 - 600}px)` }} className="flex whitespace-nowrap w-max">
            {SKILLS_ROW2.map((w, idx) => <SkillWord key={idx} word={w} index={idx} />)}
          </div>
        </div>
        <div className="overflow-hidden w-full">
          <div style={{ transform: `translateX(${-scrollY * 0.25}px)` }} className="flex whitespace-nowrap w-max">
            {SKILLS_ROW3.map((w, idx) => <SkillWord key={idx} word={w} index={idx} />)}
          </div>
        </div>
      </div>

      {/* ─── CONTACT ─── */}
      <section className="relative z-20 w-full pt-28 pb-36 flex flex-col items-center border-t border-[#0a0a0a]/20">
        <div className="relative w-full flex items-center">
          <div className="flex flex-col items-center ml-8 shrink-0">
            <div className="w-px h-5 bg-[#0a0a0a]/40" />
            <div className="w-px h-5 bg-transparent" />
            <div className="w-px h-5 bg-[#0a0a0a]/40" />
          </div>
          <div className="flex-1 flex flex-col gap-2 mx-2">
            <div className="w-full h-px bg-[#0a0a0a]/40" />
            <div className="w-full h-px bg-[#0a0a0a]/40" />
          </div>
          <div className="shrink-0">
            <img src="/logo.png" alt="Logo" className="w-14 h-14" />
          </div>
          <div className="flex-1 flex flex-col gap-2 mx-2">
            <div className="w-full h-px bg-[#0a0a0a]/40" />
            <div className="w-full h-px bg-[#0a0a0a]/40" />
          </div>
          <div className="flex flex-col items-center mr-8 shrink-0">
            <div className="w-px h-5 bg-[#0a0a0a]/40" />
            <div className="w-px h-5 bg-transparent" />
            <div className="w-px h-5 bg-[#0a0a0a]/40" />
          </div>
        </div>

        {/* 1.4x larger Contact link */}
        <div className="mt-10 flex flex-col items-center">
          <Link
            to="/contact"
            className="font-['Neue_Montreal',sans-serif] text-lg sm:text-xl tracking-[0.25em] uppercase text-[#0a0a0a]/70 hover:text-[#0a0a0a] transition-colors duration-300 cursor-pointer font-medium"
          >
            Contact
          </Link>
        </div>
      </section>
    </div>
  );
}
