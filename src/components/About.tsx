import React from 'react';
import { motion } from 'framer-motion';
import img5 from "../assets/images/img_5.jpg"

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-image-wrapper"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={img5}
              alt="Workspace"
              className="about-image"
            />
          </motion.div>

          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="section-title">ABOUT ME</h2>
            <p className="about-description">
              I’m a B.Tech Computer Science student who sees code as more than syntax — for me, it’s a way of thinking.
            </p>
            <p className="about-description">
              The MERN stack isn’t just a collection of technologies in my toolkit; it’s a space where logic meets experience. I enjoy building systems where the backend quietly carries complexity and the frontend translates it into something effortless for the user. I’m drawn to the invisible layers — the architecture, the flow of data, the subtle decisions that make a product feel intuitive rather than impressive.
            </p>
            <p className="about-description">
              I don’t chase trends. I try to understand foundations. Because frameworks change, libraries evolve, but the ability to think clearly — to break problems down and rebuild them better — stays.        </p>
            <p className="about-description">
              I’m not just interested in shipping features. I’m interested in crafting experiences that feel intentional.        </p>
            {/* <div className="about-stats">
                            <div className="stat">
                                <span className="stat-number">5+</span>
                                <span className="stat-label">Years Exp.</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">Projects</span>
                            </div>
                            <div className="stat">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Dedication</span>
                            </div>
                        </div> */}
          </motion.div>
        </div>
      </div>

      <style>{`
        .about-section {
          background-color: var(--bg-color);
          overflow: hidden;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: clamp(2rem, 8vw, 6rem);
          align-items: center;
        }

        .about-image-wrapper {
          border-radius: 3rem;
          overflow: hidden;
          box-shadow: 0 40px 80px rgba(0,0,0,0.3);
          border: 1px solid var(--border-color);
          position: relative;
        }

        .about-image {
          width: 100%;
          display: block;
          transition: transform 0.6s ease;
        }

        .about-image-wrapper:hover .about-image {
          transform: scale(1.05);
        }

        .about-text {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .section-title {
          color: var(--accent-color);
        }

        .about-description {
          font-size: clamp(1rem, 1.5vw, 1.2rem);
          line-height: 1.7;
          opacity: 0.8;
          max-width: 600px;
        }

        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
            text-align: left;
          }
          
          .about-image-wrapper {
            max-width: 500px;
            margin: 0 auto;
            border-radius: 2rem;
          }
          
          .about-description {
            max-width: 100%;
          }
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 4rem 0;
          }
          .about-grid {
            gap: 3rem;
          }
          .about-text {
            gap: 1.2rem;
          }
        }

        @media (max-width: 480px) {
          .about-image-wrapper {
            border-radius: 1.5rem;
          }
          .about-description {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
