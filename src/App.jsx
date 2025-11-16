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
    // Create floating particles across entire page
    const container = particlesRef.current;
    if (!container) return;

    const particleCount = 80;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      const size = Math.random() * 5 + 2;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 30 + 25;
      const delay = Math.random() * 8;
      const opacity = Math.random() * 0.6 + 0.2;

      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${x}%;
        top: ${y}%;
        background: radial-gradient(circle, rgba(56, 189, 248, ${opacity}) 0%, transparent 70%);
        animation: float ${duration}s ease-in-out ${delay}s infinite;
        filter: blur(${Math.random() * 1.5}px);
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
