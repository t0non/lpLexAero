"use client";
import { useEffect, useRef, useState } from "react";

export default function StepsWrapper({ children }) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const { top, height } = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const start = windowHeight / 2;
      
      let p = 0;
      if (top <= start) {
        // We use height / 1.5 to finish filling before the very bottom
        p = ((start - top) / (height / 1.5)) * 100;
        p = Math.min(100, Math.max(0, p));
      }
      setProgress(p);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={ref} style={{ "--progress": `${progress}%`, position: "relative", width: "100%" }}>
      {children}
    </div>
  );
}
