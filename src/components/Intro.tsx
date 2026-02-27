import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Intro: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const introRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => onComplete(),
    });

    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power4.out',
    })
      .to(textRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: 'power4.in',
        delay: 1,
      })
      .to(introRef.current, {
        height: 0,
        duration: 1,
        ease: 'expo.inOut',
      });
  }, [onComplete]);

  return (
    <div className="intro-overlay" ref={introRef}>
      <div className="intro-content" ref={textRef} style={{ opacity: 0, transform: 'translateY(20px)' }}>
        <h1 className="intro-logo">PORTFOLIO</h1>
        <div className="intro-line"></div>
      </div>

      <style>{`
        .intro-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #0f0f0f;
          z-index: 9999;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        .intro-logo {
          font-family: var(--font-logo);
          font-size: 3.5rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          color: white;
          margin-bottom: 1rem;
          text-transform: uppercase;
        }

        .intro-line {
          width: 100%;
          height: 2px;
          background: var(--accent-color);
          transform-origin: left;
          animation: line-grow 2s ease-in-out infinite;
        }

        @keyframes line-grow {
          0% { transform: scaleX(0); }
          50% { transform: scaleX(1); }
          100% { transform: scaleX(0); transform-origin: right; }
        }

        @media (max-width: 480px) {
          .intro-logo {
            font-size: 2rem;
            letter-spacing: 0.1em;
          }
        }
      `}</style>
    </div>
  );
};

export default Intro;
