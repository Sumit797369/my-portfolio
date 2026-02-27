import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowDown } from 'lucide-react';
import img1 from "../assets/images/img_1.jpeg"
const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.fromTo(headingRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 0.5 }
    )
      .fromTo(subtextRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        '-=0.8'
      )
      .fromTo(imageRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5 },
        '-=1'
      );
  }, []);

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 ref={headingRef} className="hero-title">
            FULLSTACK<br />DEVELOPER
          </h1>
          <p ref={subtextRef} className="hero-subtext">
            Between logic and chaos &mdash; I choose structure.
          </p>
        </div>

        <div ref={imageRef} className="hero-image-container">
          <div className="hero-image-wrapper">
            <img
              src={img1}
              alt="Profile"
              className="hero-image"
            />
          </div>
          <div className="hero-blob"></div>
        </div>

        <div className="scroll-indicator">
          <span>Scroll</span>
          <ArrowDown size={20} className="scroll-icon" />
        </div>
      </div>

      <style>{`
        .hero-section {
          position: relative;
          overflow: hidden;
          background: radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 40%),
                      radial-gradient(circle at 90% 80%, rgba(168, 85, 247, 0.05) 0%, transparent 40%);
        }

        .hero-container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          gap: 4rem;
          padding-top: 5rem;
        }

        .hero-content {
          flex: 1;
          text-align: left;
          z-index: 5;
        }

        .hero-title {
          font-size: clamp(3.5rem, 8vw, 7rem);
          line-height: 0.95;
          margin-bottom: 2rem;
          background: linear-gradient(135deg, var(--text-color) 30%, var(--accent-color) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 900;
        }

        .hero-subtext {
          font-size: clamp(1.1rem, 2vw, 1.5rem);
          color: var(--text-color);
          opacity: 0.8;
          max-width: 500px;
          margin-bottom: 3rem;
        }

        .hero-image-container {
          position: relative;
          flex: 0 0 clamp(300px, 35vw, 500px);
          aspect-ratio: 1/1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-image-wrapper {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          border-radius: 3rem;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0,0,0,0.5);
          border: 1px solid var(--border-color);
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .hero-image-wrapper:hover .hero-image {
          transform: scale(1.05);
        }

        .hero-blob {
          position: absolute;
          top: -20%;
          left: -20%;
          width: 140%;
          height: 140%;
          background: radial-gradient(circle, var(--accent-color) 0%, var(--accent-secondary) 50%, transparent 70%);
          opacity: 0.15;
          filter: blur(60px);
          z-index: 1;
          animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .scroll-indicator {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          opacity: 0.5;
          animation: bounce 2s infinite;
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translate(-50%, 0); }
          40% { transform: translate(-50%, -10px); }
          60% { transform: translate(-50%, -5px); }
        }

        @media (max-width: 1024px) {
          .hero-container {
            flex-direction: column-reverse;
            text-align: center;
            gap: 3rem;
            padding-top: 2rem;
          }
          
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .hero-title {
            font-size: clamp(3rem, 10vw, 5.5rem);
          }
          
          .hero-subtext {
            max-width: 100%;
          }

          .hero-image-container {
            flex: 0 0 350px;
            aspect-ratio:auto;
          }
        }

        @media (max-width: 768px) {
          .hero-image-container {
            flex: 0 0 280px;
          }
          .hero-image-wrapper {
            border-radius: 2rem;
          }
          .scroll-indicator {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 3rem;
          }
          .hero-image-container {
            flex: 0 0 220px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
