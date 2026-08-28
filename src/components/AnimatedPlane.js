"use client";

import { useEffect, useState, useRef } from 'react';

export default function AnimatedPlane() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollY = window.scrollY;
      // We want the plane to animate across the hero section
      // Let's say the hero section is roughly window.innerHeight
      // We start at 0, and finish when scrollY reaches 80% of window.innerHeight
      const maxScroll = window.innerHeight * 0.8;
      
      let progress = scrollY / maxScroll;
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;
      
      // Use requestAnimationFrame for smoother updates if needed, 
      // but standard state update is usually fine for simple transforms
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Calculate transform values based on progress
  // Desktop:
  // Move X from 0 to 60vw
  // Move Y from 0 to -80vh
  // Scale from 1 to 1.3
  // Rotate from 10deg to 0deg
  
  // Mobile:
  // Move X from 0 to 80vw
  // Move Y from 0 to -60vh
  // Scale from 1 to 1.2
  // Rotate from 15deg to -5deg
  
  // Easing function to make it not strictly linear (ease out quad)
  const easeProgress = scrollProgress * (2 - scrollProgress);

  const startX = isMobile ? 5 : 15; // vw (slightly indented from the left)
  const startY = isMobile ? 30 : 30; // vh (off-screen below the hero boundary)

  const targetX = isMobile ? 80 : 70; // vw
  const targetY = isMobile ? -60 : -80; // vh

  const xMove = startX + (easeProgress * (targetX - startX));
  const yMove = startY + (easeProgress * (targetY - startY));
  
  const scale = isMobile ? 1 + (easeProgress * 0.2) : 1 + (easeProgress * 0.3);
  const rotate = isMobile ? 15 - (easeProgress * 20) : 10 - (easeProgress * 10);
  
  // Opacity fades out right at the end (from 0.8 progress to 1.0)
  let opacity = 1;
  if (scrollProgress > 0.8) {
    opacity = 1 - ((scrollProgress - 0.8) * 5); // 0.8 -> 1, 0.9 -> 0.5, 1.0 -> 0
  }

  // Base styles for the image container
  const baseWidth = isMobile ? "120px" : "180px";
  const bottomOffset = isMobile ? "20px" : "40px";
  const leftOffset = isMobile ? "-10px" : "10px";

  return (
    <div 
      ref={containerRef}
      style={{
        position: 'absolute',
        bottom: bottomOffset,
        left: leftOffset,
        width: baseWidth,
        pointerEvents: 'none',
        zIndex: 5,
        transform: `translate(${xMove}vw, ${yMove}vh) scale(${scale}) rotate(${rotate}deg)`,
        opacity: opacity,
        willChange: 'transform, opacity',
        transition: isMobile ? 'none' : 'transform 1.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 1.5s linear', // Lazy tracking para scroll rápido
      }}
      aria-hidden="true"
    >
      <img 
        src="/aviao_animation.png" 
        alt="" 
        style={{
          width: '100%',
          height: 'auto',
          display: 'block'
        }}
        loading="eager"
      />
    </div>
  );
}
