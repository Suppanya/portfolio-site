import React, { useEffect, useRef, useState } from 'react';

export default function OscilloscopeLine({ mouseX = null, mouseY = null, isHovering = false }) {
  const [pathD, setPathD] = useState("M 20 0 L 20 1000");
  const containerRef = useRef(null);
  const animRef = useRef(null);

  // Line Engagement State Machine
  const isEngagedRef = useRef(false);
  const timeRef = useRef(0);

  // Baseline Quadratic Curve Spring Physics
  const handleXRef = useRef(20);
  const handleYRef = useRef(500);
  const vxRef = useRef(0);
  const vyRef = useRef(0);

  // Triangle Wave Follow & Release Physics
  const triFollowAmpRef = useRef(0);
  const triReleaseAmpRef = useRef(0);
  const triReleaseVelRef = useRef(0);

  useEffect(() => {
    let running = true;

    const animate = () => {
      timeRef.current += 0.25;

      if (!containerRef.current) {
        if (running) animRef.current = requestAnimationFrame(animate);
        return;
      }

      const rect = containerRef.current.getBoundingClientRect();
      const lineCenterX = rect.left + rect.width / 2;
      const lineTop = rect.top;
      const lineHeight = rect.height || 1;

      const dX = (mouseX !== null && isHovering) ? (mouseX - lineCenterX) : 9999;
      const absDx = Math.abs(dX);
      const relY = (mouseY !== null) ? (((mouseY - lineTop) / lineHeight) * 1000) : handleYRef.current;

      const followZoneRadius = 140; // Max follow distance before snap-release

      // 1. Engage ONLY when cursor passes over line (within 20px of center)
      if (isHovering && absDx <= 20) {
        isEngagedRef.current = true;
      }

      // 2. Disengage when cursor pulls past follow zone boundary or leaves main container
      if (absDx > followZoneRadius || !isHovering) {
        isEngagedRef.current = false;
      }

      // 3. Render State Physics
      let targetX = 20;
      let targetYPos = handleYRef.current;

      if (isEngagedRef.current) {
        // Active tracking towards mouse
        const maxDisplacement = 65;
        const normDx = dX / followZoneRadius; // -1 to +1
        targetX = 20 + normDx * maxDisplacement;
        targetYPos = Math.max(20, Math.min(980, relY));

        // Triangle wave expands/wiggles outwards towards cursor
        const targetAmp = 3.5 + Math.abs(normDx) * 10;
        triFollowAmpRef.current += (targetAmp - triFollowAmpRef.current) * 0.28;

        // Charge release spring energy
        triReleaseAmpRef.current = triFollowAmpRef.current;
        triReleaseVelRef.current = 0;
      } else {
        // RELEASE STATE: Target X is 20, spring vibrates back-and-forth left-to-right
        targetX = 20;
        triFollowAmpRef.current = 0;

        // Triangle wave spring release vibration (damping reduced slightly for crisper bounce!)
        const springK = 0.38;
        const dampingC = 0.74; // reduced damping for crisper spring settling
        const triAx = (0 - triReleaseAmpRef.current) * springK;
        triReleaseVelRef.current = (triReleaseVelRef.current + triAx) * dampingC;
        triReleaseAmpRef.current += triReleaseVelRef.current;
      }

      // Baseline spring physics (underdamped release causes full line to vibrate back & forth)
      const baseSpringK = isEngagedRef.current ? 0.28 : 0.38;
      const baseDampingC = isEngagedRef.current ? 0.65 : 0.74; // reduced damping for fast crisp release

      const ax = (targetX - handleXRef.current) * baseSpringK;
      const ay = (targetYPos - handleYRef.current) * baseSpringK;

      vxRef.current = (vxRef.current + ax) * baseDampingC;
      vyRef.current = (vyRef.current + ay) * baseDampingC;

      handleXRef.current += vxRef.current;
      handleYRef.current += vyRef.current;

      const hX = handleXRef.current;
      const hY = handleYRef.current;
      const baseOffsetFromCenter = Math.abs(hX - 20);
      const currentTriAmp = isEngagedRef.current ? triFollowAmpRef.current : Math.abs(triReleaseAmpRef.current);

      // Check if line has completely come to rest
      if (!isEngagedRef.current && baseOffsetFromCenter < 0.05 && Math.abs(vxRef.current) < 0.05 && currentTriAmp < 0.08) {
        setPathD("M 20 0 L 20 1000");
      } else {
        // Generate Triangle Wave trace overlaid on bending quadratic baseline curve
        const numPoints = 80;
        const step = 1000 / numPoints;
        const points = [];

        for (let i = 0; i <= numPoints; i++) {
          const y = i * step;
          const u = y / 1000;

          // 1. Baseline quadratic curve bowing & vibrating back-and-forth across x=20
          const quadX = (1 - u) * (1 - u) * 20 + 2 * (1 - u) * u * hX + u * u * 20;

          // Fixed stationary endpoints damping
          const boundaryDamping = Math.sin(Math.PI * u);

          // Gaussian envelope peaking near mouse Y (hY)
          const distFromPeak = y - hY;
          const peakEnvelope = Math.exp(-(distFromPeak * distFromPeak) / (2 * 150 * 150));

          // 2. Triangle Wave function wiggling on top of the bowing curve
          const triFrequency = 0.09;
          const triWaveRaw = (2 / Math.PI) * Math.asin(Math.sin(y * triFrequency + timeRef.current));

          // Combined triangle wave offset overlaid on quadratic curve
          const triOffset = triWaveRaw * currentTriAmp * boundaryDamping * (0.3 + 0.7 * peakEnvelope);

          const finalX = (i === 0 || i === numPoints) ? 20 : quadX + triOffset;
          points.push(`${i === 0 ? 'M' : 'L'} ${finalX.toFixed(2)} ${y.toFixed(1)}`);
        }

        setPathD(points.join(' '));
      }

      if (running) {
        animRef.current = requestAnimationFrame(animate);
      }
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      running = false;
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [mouseX, mouseY, isHovering]);

  return (
    <div 
      ref={containerRef}
      className="relative h-full w-8 sm:w-10 md:w-12 flex items-center justify-center pointer-events-none shrink-0 z-50 overflow-visible"
      style={{ overflow: 'visible' }}
    >
      <svg 
        className="w-[40px] h-full text-[#0a0a0a] pointer-events-none" 
        viewBox="0 0 40 1000" 
        preserveAspectRatio="none"
        style={{ overflow: 'visible' }}
      >
        <path 
          d={pathD} 
          fill="none" 
          stroke="#0a0a0a" 
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
