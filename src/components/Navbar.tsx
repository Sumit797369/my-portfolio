import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');


  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const navLinks = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Skills', href: 'skills' },
    { name: 'Projects', href: 'projects' },
    { name: 'Contact', href: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Simple active section detection
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.getElementById(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="nav-container">
        <div className="logo">
          <span className="logo-text">SUMIT</span>
        </div>

        <div className="nav-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.href}`}
              className={`nav-link ${activeSection === link.href ? 'active' : ''}`}
              onClick={(e) => handleScrollClick(e, link.href)}
            >
              {link.name}
              <span className="link-underline"></span>
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle theme"
          >
            <motion.div
              initial={false}
              animate={{ rotate: isDark ? 0 : 180, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 10 }}
            >
              {isDark ? <Moon size={20} /> : <Sun size={20} />}
            </motion.div>
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu glass"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.href}`}
                className={`mobile-nav-link ${activeSection === link.href ? 'active' : ''}`}
                onClick={(e) => handleScrollClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 1.5rem 0;
          z-index: 1000;
          transition: var(--transition-smooth);
        }

        .navbar.scrolled {
          padding: 1rem 0;
          background: var(--nav-bg);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 var(--container-padding);
        }

        .logo-text {
          font-family: var(--font-logo);
          font-size: clamp(1.5rem, 3vw, 2rem);
          font-weight: 700;
          letter-spacing: 0.1em;
          color: var(--text-color);
          text-transform: uppercase;
        }

        .nav-links {
          display: flex;
          gap: clamp(1rem, 2vw, 2.5rem);
        }

        .nav-link {
          font-weight: 600;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          position: relative;
          padding: 0.5rem 0;
          opacity: 0.7;
        }

        .nav-link:hover,
        .nav-link.active {
          opacity: 1;
        }

        .link-underline {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--accent-color);
          transition: width 0.3s ease;
        }

        .nav-link:hover .link-underline,
        .nav-link.active .link-underline {
          width: 100%;
        }

        .nav-link.active {
          color: var(--accent-color);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .theme-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-color);
          padding: 0.5rem;
          border-radius: 50%;
          transition: background-color 0.3s ease;
          border: 1px solid var(--border-color);
        }

        .theme-toggle:hover {
          background-color: var(--border-color);
        }

        .mobile-menu-btn {
          display: none;
          color: var(--text-color);
          padding: 0.5rem;
          border-radius: 0.5rem;
          border: 1px solid var(--border-color);
        }

        .mobile-menu {
          position: fixed;
          top: 80px;
          left: 1rem;
          right: 1rem;
          padding: 2.5rem 1.5rem;
          border-radius: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          align-items: center;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          z-index: 999;
          border: 1px solid var(--border-color);
        }

        .mobile-nav-link {
          font-size: 1.5rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          width: 100%;
          text-align: center;
          padding: 0.8rem;
          border-radius: 1rem;
          transition: var(--transition-smooth);
        }

        .mobile-nav-link.active {
          color: var(--accent-color);
          background: rgba(59, 130, 246, 0.1);
        }

        @media (max-width: 968px) {
          .nav-links {
            display: none;
          }
          
          .mobile-menu-btn {
            display: flex;
          }
          
          .navbar {
            padding: 1rem 0;
          }
        }

        @media (max-width: 480px) {
          .mobile-menu {
            top: 70px;
            padding: 2rem 1rem;
          }
          
          .logo-text {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
