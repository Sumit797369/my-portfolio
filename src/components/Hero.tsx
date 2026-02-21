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
        }

        .hero-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 2rem;
        }

        .hero-title {
          font-size: clamp(3rem, 10vw, 8rem);
          line-height: 0.9;
          margin-bottom: 2rem;
          background: linear-gradient(135deg, var(--text-color) 0%, var(--accent-color) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtext {
          font-size: 1.25rem;
          color: var(--text-color);
          opacity: 0.8;
          max-width: 600px;
          margin: 0 auto;
        }

        .hero-image-container {
          position: relative;
          margin-top: 2rem;
          width: 300px;
          height: 300px;
        }

        .hero-image-wrapper {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          border-radius: 2rem;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hero-blob {
          position: absolute;
          top: -10%;
          left: -10%;
          width: 120%;
          height: 120%;
          background: radial-gradient(circle, var(--accent-color) 0%, transparent 70%);
          opacity: 0.2;
          filter: blur(40px);
          z-index: 1;
          animation: float 6s ease-in-out infinite;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          opacity: 0.6;
          animation: bounce 2s infinite;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(10px, 20px); }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }

        @media (max-width: 768px) {
          .hero-image-container {
            width: 250px;
            height: 250px;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
