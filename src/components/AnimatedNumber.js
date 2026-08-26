"use client";

import { useState, useEffect, useRef } from "react";

export default function AnimatedNumber({ value, suffix = "", prefix = "" }) {
  const [displayValue, setDisplayValue] = useState("0");
  const nodeRef = useRef(null);

  useEffect(() => {
    let observer;
    let startTimestamp = null;
    let animationFrame;
    const duration = 2000; // 2 seconds

    // Extract numeric value
    const numericTarget = parseFloat(value.replace(/[^0-9.]/g, ''));
    
    const animate = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function (easeOutExpo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      const currentVal = Math.floor(easeProgress * numericTarget);
      
      setDisplayValue(currentVal.toString());
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value); // Set exact target at the end to restore non-numeric characters if any (or keep exact format)
      }
    };

    observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animationFrame = requestAnimationFrame(animate);
        observer.disconnect(); // Only animate once
      }
    }, { threshold: 0.1 });

    if (nodeRef.current) {
      observer.observe(nodeRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, [value]);

  return (
    <span ref={nodeRef}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}
