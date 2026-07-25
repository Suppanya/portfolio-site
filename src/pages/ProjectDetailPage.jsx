import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import MenuOverlay from '../components/MenuOverlay';

const projectData = {
  'metu-rover': {
    titleLines: ['METU ROVER', 'TEAM'],
    sub: 'ROBOTIC ARM & ROVER SYSTEMS | 2023-2025',
    image: '/rover.jpg',
    story: [
      'The European Rover Challenge and ARC demand a rover capable of traversing rugged terrain while executing sub-millimeter scientific tasks. Leading the 19-member mechanical team at METU, my primary focus was designing the 6-DOF manipulator subsystem capable of handling 90Nm of torque.',
      'To achieve zero backlash in critical joints, we engineered custom tensioning mechanisms and conducted rigorous structural FEA validation. Beyond pure mechanics, I took charge of integrating the science module, mobility suspension, and chassis assemblies to ensure full range clearance.',
      'Transitioning into team lead reinforced the value of clear documentation and mentorship. I developed a training curriculum for over 20 team members, teaching CAD methodology and manufacturing standards to ensure long-term team continuity.'
    ],
    next: { name: 'Industrial Solutions', slug: 'industrial-solutions' }
  },
  'industrial-solutions': {
    titleLines: ['INDUSTRIAL', 'SOLUTIONS'],
    sub: 'RAPID PROTOTYPING & LEGACY PART REPLACEMENT | 2020-2026',
    image: '/industry.jpg',
    story: [
      'Clients in the Ostim industrial zone frequently face costly machine downtime when critical OEM parts break—especially when those parts are obsolete or take weeks to ship from overseas. Working directly with factory owners, I reverse-engineered broken physical artifacts into precise parametric CAD models without initial technical drawings.',
      'Rather than simply copying failing geometries, I optimized the parts for additive manufacturing using engineering-grade thermoplastics like Nylon and ASA. Redesigning multi-part assemblies into single compliant mechanisms drastically reduced assembly times and structural failure points.',
      'Delivering functional replacements in days instead of weeks brought down machinery downtime significantly, instilling a deeply practical, client-focused approach to engineering under strict real-world constraints.'
    ],
    next: { name: 'Aerial Systems', slug: 'aerial-systems' }
  },
  'aerial-systems': {
    titleLines: ['AERIAL', 'SYSTEMS'],
    sub: 'CUSTOM QUADCOPTER PLATFORM | 2021',
    image: '/aerial.jpg',
    story: [
      'Built as a hands-on passion project outside academic constraints, this custom quadcopter platform allowed me to explore the core principles of flight dynamics, airframe structural optimization, and embedded computer vision.',
      'I designed and fabricated a carbon fiber airframe prioritized for high thrust-to-weight ratio and quick field serviceability. On the software side, I integrated an onboard vision pipeline in Python and OpenCV to detect and track specific ground targets efficiently on limited hardware.',
      'Iterative prototyping with PID tuning and vision algorithms in a low-stakes environment reinforced the importance of rapid physical testing and software-hardware co-design.'
    ],
    next: { name: 'Marine Systems', slug: 'marine-systems' }
  },
  'marine-systems': {
    titleLines: ['MARINE', 'SYSTEMS'],
    sub: "'KRAKEN' MODULAR ROV | 2019",
    image: '/marine.jpg',
    story: [
      "Working with 'KRAKEN'—an open-source modular underwater ROV platform—required solving critical sealing and maneuverability challenges at depth.",
      'I redesigned the electronics enclosure (WKM) to enhance thermal dissipation and waterproofing reliability using upgraded O-ring grooves and potting compounds. To enable object retrieval missions, I designed and 3D printed a custom gripper mechanism integrated directly into the vehicle control stack.',
      'Retrofitting existing systems taught me to respect legacy mounting points, electronic limits, and environmental constraints while extending capability.'
    ],
    next: { name: 'Control Systems', slug: 'control-systems' }
  },
  'control-systems': {
    titleLines: ['CONTROL', 'SYSTEMS'],
    sub: 'CURRENT FOCUS & ONGOING LEARNING | 2026',
    image: '/control.jpg',
    story: [
      'Control Systems represents my current technical focus and active area of exploration. Rather than a past client project, I am actively deepening my understanding of real-time embedded actuation, closed-loop feedback mechanisms, and sensor fusion for robotic hardware.',
      'My current learning is centered around implementing PID position and velocity feedback control loops, encoder integration, and deterministic CAN-bus communication protocols for high-torque manipulators.',
      'This ongoing focus aims to bridge my mechanical engineering foundation with embedded mechatronic intelligence, building hardware-in-the-loop benches for precise real-time actuation.'
    ],
    next: { name: 'METU Rover Team', slug: 'metu-rover' }
  }
};

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const project = projectData[projectId] || projectData['metu-rover'];

  return (
    <div className="relative w-full min-h-screen overflow-y-auto bg-gradient-to-tr from-[#122e20] via-[#1a442e] via-50% to-[#286644] text-[#e5e3dc] flex flex-col justify-between font-sans select-none">
      {/* Background Glows */}
      <div className="fixed bottom-0 left-0 w-[45vw] h-[45vw] bg-[radial-gradient(circle_at_0%_100%,rgba(37,226,103,0.3),transparent_70%)] pointer-events-none z-0" />
      <div className="fixed top-0 right-0 w-[60vw] h-[60vw] bg-[radial-gradient(circle_at_100%_0%,rgba(33,82,57,0.55),transparent_70%)] pointer-events-none z-0" />

      {/* Navbar */}
      <Navbar isMenuOpen={isMenuOpen} onMenuToggle={() => setIsMenuOpen((prev) => !prev)} />

      {/* Menu Overlay */}
      <MenuOverlay isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-[960px] mx-auto px-6 sm:px-12 pt-28 pb-24 flex flex-col items-center">
        
        {/* Giant Header Title */}
        <h1 className="font-['Roslindale_Display_Condensed',serif] text-6xl sm:text-8xl md:text-[9rem] lg:text-[10rem] leading-[0.82] text-[#e5e3dc] text-center tracking-tight uppercase mb-3 font-normal">
          {project.titleLines.map((line, lIdx) => (
            <span key={lIdx} className="block">
              {line}
            </span>
          ))}
        </h1>

        {/* Emerald Sub-caption */}
        <div className="font-['Ayer',serif] text-[#25e267] text-lg sm:text-xl md:text-2xl font-medium tracking-[0.08em] uppercase text-center mb-10">
          {project.sub}
        </div>

        {/* Story Intro Paragraph 1 */}
        <p className="font-['Neue_Montreal',sans-serif] text-lg sm:text-xl md:text-2xl leading-[1.6] text-[#e5e3dc]/95 text-left font-normal mb-10 w-full max-w-[840px]">
          {project.story[0]}
        </p>

        {/* Project Image Card */}
        <div className="w-full max-w-[880px] aspect-[16/9] bg-[#0a0a0a] border border-[#ffffff]/10 rounded-sm overflow-hidden mb-12 shadow-2xl relative group">
          <img 
            src={project.image} 
            alt={project.titleLines.join(' ')} 
            className="w-full h-full object-cover filter grayscale-[10%] contrast-[1.05] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          />
        </div>

        {/* Story Paragraph 2 & 3 */}
        <div className="w-full max-w-[840px] mb-16 space-y-8">
          {project.story.slice(1).map((para, idx) => (
            <p key={idx} className="font-['Neue_Montreal',sans-serif] text-lg sm:text-xl md:text-2xl leading-[1.6] text-[#e5e3dc]/95 text-left font-normal">
              {para}
            </p>
          ))}
        </div>

        {/* Bottom Navigation Row */}
        <div className="w-full flex items-center justify-between flex-wrap gap-6 pt-8 border-t border-[#e5e3dc]/20 text-xl sm:text-2xl md:text-3xl font-serif">
          <Link 
            to="/work"
            className="text-[#e5e3dc] hover:text-[#25e267] transition-colors duration-300 font-['Ayer',serif] not-italic"
          >
            ← Works
          </Link>

          <Link 
            to={`/work/${project.next.slug}`}
            className="text-[#e5e3dc] hover:text-[#25e267] transition-colors duration-300 font-['Ayer',serif] not-italic"
          >
            Next Project ({project.next.name}) →
          </Link>
        </div>
      </main>
    </div>
  );
}
