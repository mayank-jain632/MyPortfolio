import React, { useEffect, useRef } from "react";
import { Navbar } from "./components/Navbar.jsx";
import { Hero } from "./components/Hero.jsx";
import { About } from "./components/About.jsx";
import { Education } from "./components/Education.jsx";
import { Experience } from "./components/Experience.jsx";
import { Projects } from "./components/Projects.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  const particlesRef = useRef(null);

  useEffect(() => {
    // Create floating particles - fewer on mobile for performance
    const container = particlesRef.current;
    if (!container) return;

    // Detect mobile and reduce particle count
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 20 : 80;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';

      // Randomized attributes
      const size = Math.random() * 5 + 2; // 2px - 7px
      const x = Math.random() * 100; // percentage
      const y = Math.random() * 100; // percentage
      const driftDuration = Math.random() * 25 + 25; // 25s - 50s slow wandering
      const twinkleDuration = Math.random() * 4 + 3; // 3s - 7s for opacity pulsing
      const driftDelay = Math.random() * driftDuration;
      const twinkleDelay = Math.random() * twinkleDuration;
      const opacity = Math.random() * 0.5 + 0.25; // 0.25 - 0.75
      const ampX = (Math.random() * 40 - 20).toFixed(1); // -20px to 20px
      const ampY = (Math.random() * 40 - 20).toFixed(1); // -20px to 20px
      const blur = Math.random() * 1.2; // subtle blur

      // Build style
      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${x}%;
        top: ${y}%;
        background: radial-gradient(circle, rgba(56, 189, 248, ${opacity}) 0%, transparent 70%);
        --amp-x: ${ampX}px;
        --amp-y: ${ampY}px;
        --base-opacity: ${opacity};
        animation: particle-drift ${driftDuration}s linear ${driftDelay}s infinite, particle-twinkle ${twinkleDuration}s ease-in-out ${twinkleDelay}s infinite;
        filter: ${isMobile ? 'none' : `blur(${blur}px)`};
        will-change: transform, opacity;
      `;

      container.appendChild(particle);
      particles.push(particle);
    }

    return () => {
      particles.forEach(p => p.remove());
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      {/* Global floating particles */}
      <div ref={particlesRef} className="fixed inset-0 pointer-events-none overflow-hidden z-0" />
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
