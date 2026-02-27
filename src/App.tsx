import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Reset scroll position when route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (isLoading) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const cursor = document.querySelector('.custom-cursor') as HTMLElement;
    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    const handleHover = () => cursor?.classList.add('cursor-hover');
    const handleUnhover = () => cursor?.classList.remove('cursor-hover');

    const interactiveElements = document.querySelectorAll('a, button, .project-card, .skill-card');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleHover);
      el.addEventListener('mouseleave', handleUnhover);
    });

    window.addEventListener('mousemove', moveCursor);

    return () => {
      lenis.destroy();
      window.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleUnhover);
      });
    };
  }, [isLoading]);

  return (
    <main className="app-wrapper">
      {isLoading ? (
        <Intro onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <div className="custom-cursor"></div>
          <Navbar />

          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <footer className="footer-simple">
            <p>&copy; {new Date().getFullYear()} Designed & Built by Sumit</p>
          </footer>
        </>
      )}

      <style>{`
        .custom-cursor {
          width: 20px;
          height: 20px;
          background: var(--accent-color);
          border-radius: 50%;
          position: fixed;
          pointer-events: none;
          z-index: 10000;
          mix-blend-mode: difference;
          transform: translate(-50%, -50%);
          transition: transform 0.1s ease-out, width 0.3s ease, height 0.3s ease;
        }

        .custom-cursor.cursor-hover {
          width: 80px;
          height: 80px;
          background: var(--accent-color);
          opacity: 0.15;
          mix-blend-mode: normal;
        }

        .footer-simple {
          text-align: center;
          padding: 4rem 0;
          opacity: 0.6;
          font-size: 0.9rem;
          border-top: 1px solid var(--border-color);
        }

        @media (max-width: 768px) {
          .custom-cursor {
            display: none;
          }
        }
      `}</style>
    </main>
  );
};

export default App;
