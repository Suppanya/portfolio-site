import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * CustomCursor — 
 * • Dot removed.
 * • Circle 1.6x larger: 42px idle / 67px hover.
 * • Direct high-precision transform tracking with zero lag after splash screen.
 * • Resets hover state on clicks & route changes.
 */
export default function CustomCursor() {
  const ringRef = useRef(null);
  const mouse = useRef({ x: -500, y: -500 });
  const [hovering, setHovering] = useState(false);
  const hoverRef = useRef(false);
  const initialized = useRef(false);
  const location = useLocation();

  // Reset hover state whenever route changes
  useEffect(() => {
    hoverRef.current = false;
    setHovering(false);
  }, [location.pathname]);

  useEffect(() => {
    let animationFrameId;

    const isInteractive = (el) => {
      if (!el || !el.isConnected) return false;
      return Boolean(
        el.closest('a, button, [data-cursor], input, select, textarea, [role="button"], label, .cursor-pointer')
      );
    };

    const updatePosition = () => {
      if (ringRef.current && initialized.current) {
        ringRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0) translate(-50%, -50%)`;
      }
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (!initialized.current) {
        initialized.current = true;
      }
    };

    const onOver = (e) => {
      if (isInteractive(e.target)) {
        hoverRef.current = true;
        setHovering(true);
      }
    };

    const onOut = (e) => {
      if (isInteractive(e.target)) {
        hoverRef.current = false;
        setHovering(false);
      }
    };

    const onClick = () => {
      setTimeout(() => {
        const elem = document.elementFromPoint(mouse.current.x, mouse.current.y);
        if (!isInteractive(elem)) {
          hoverRef.current = false;
          setHovering(false);
        }
      }, 50);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('click', onClick);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);

    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('click', onClick);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={ringRef}
      className="fixed top-0 left-0 z-[9999] pointer-events-none will-change-transform"
      style={{
        width: hovering ? 67 : 42,
        height: hovering ? 67 : 42,
        borderRadius: '50%',
        border: `1.5px solid ${hovering ? 'rgba(229,227,220,0.85)' : 'rgba(229,227,220,0.5)'}`,
        backgroundColor: hovering ? 'rgba(229,227,220,0.05)' : 'transparent',
        transition: 'width 0.2s ease-out, height 0.2s ease-out, border-color 0.2s ease, background-color 0.2s ease',
        mixBlendMode: 'difference',
      }}
    />
  );
}
