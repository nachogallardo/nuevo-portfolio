"use client";

import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', updateMousePosition);

    // Añadir event listeners a elementos interactivos
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        className={`fixed pointer-events-none z-[9999] transition-transform duration-300 ease-out ${
          isHovering ? 'scale-150' : 'scale-100'
        }`}
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
        }}
      >
        <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full shadow-lg shadow-primary/50" />
      </div>
      
      <div
        className={`fixed pointer-events-none z-[9998] transition-all duration-500 ease-out ${
          isHovering ? 'scale-0 opacity-0' : 'scale-100 opacity-30'
        }`}
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
        }}
      >
        <div className="w-10 h-10 border border-primary/30 rounded-full" />
      </div>
    </>
  );
}

