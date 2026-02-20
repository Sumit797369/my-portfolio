import React from 'react';
import { motion } from 'framer-motion';

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
                            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
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
                            I am a passionate Frontend Developer with a keen eye for design and performance.
                            My journey in web development started with a curiosity for how things work on the internet,
                            and it has evolved into a career where I build beautiful, functional, and user-centric applications.
                        </p>
                        <p className="about-description">
                            I specialize in React, TypeScript, and modern CSS frameworks, always striving to stay
                            updated with the latest industry trends. I believe in writing clean, maintainable code
                            and creating experiences that leave a lasting impression.
                        </p>
                        <div className="about-stats">
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
                        </div>
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
            text-align: center;
          }
          .about-stats {
            justify-content: center;
          }
        }
      `}</style>
        </section>
    );
};

export default About;
