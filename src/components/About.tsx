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
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .about-image-wrapper {
          border-radius: 2rem;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0,0,0,0.2);
        }

        .about-image {
          width: 100%;
          display: block;
        }

        .section-title {
          font-size: 3rem;
          margin-bottom: 2rem;
          color: var(--accent-color);
        }

        .about-description {
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          opacity: 0.8;
        }

        .about-stats {
          display: flex;
          gap: 3rem;
          margin-top: 3rem;
        }

        .stat {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--text-color);
        }

        .stat-label {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          opacity: 0.6;
        }

        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
            text-align: center;
          }
          .section-title {
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
          }
          .about-description {
            font-size: 1rem;
            margin-bottom: 1.2rem;
          }
          .about-stats {
            justify-content: center;
            gap: 2rem;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 2.2rem;
          }
          .about-image-wrapper {
            border-radius: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
