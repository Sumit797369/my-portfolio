import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title centered-title">GET IN TOUCH</h2>

                <div className="contact-container">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="contact-subtitle">Let's talk about your project</h3>
                        <p className="contact-text">
                            I'm always open to discussing new projects, creative ideas or
                            opportunities to be part of your visions.
                        </p>

                        <div className="social-links-big">
                            <a href="#" className="social-item glass">
                                <Linkedin size={24} />
                                <span>LinkedIn</span>
                            </a>
                            <a href="#" className="social-item glass">
                                <Github size={24} />
                                <span>GitHub</span>
                            </a>
                            <a href="mailto:hello@example.com" className="social-item glass">
                                <Mail size={24} />
                                <span>Email</span>
                            </a>
                        </div>
                    </motion.div>

                    <motion.form
                        className="contact-form glass"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="form-group">
                            <input type="text" placeholder="Name" className="form-input" required />
                            <div className="input-line"></div>
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Email" className="form-input" required />
                            <div className="input-line"></div>
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Message" className="form-input" rows={5} required></textarea>
                            <div className="input-line"></div>
                        </div>

                        <button type="submit" className="submit-btn">
                            <span>Send Message</span>
                            <Send size={18} />
                        </button>
                    </motion.form>
                </div>
            </div>

            <style>{`
        .contact-section {
          background-color: var(--bg-color);
          padding-bottom: 10rem;
        }

        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 5rem;
          align-items: start;
        }

        .contact-subtitle {
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }

        .contact-text {
          font-size: 1.1rem;
          opacity: 0.7;
          margin-bottom: 3rem;
          max-width: 450px;
        }

        .social-links-big {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .social-item {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.2rem 2rem;
          border-radius: 1rem;
          font-weight: 600;
          transition: var(--transition-smooth);
        }

        .social-item:hover {
          background: var(--accent-color);
          color: white;
          transform: translateX(10px);
        }

        .contact-form {
          padding: 3rem;
          border-radius: 2rem;
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .form-group {
          position: relative;
        }

        .form-input {
          width: 100%;
          padding: 1rem 0;
          background: transparent;
          border: none;
          color: var(--text-color);
          font-size: 1.1rem;
          font-family: inherit;
          outline: none;
        }

        .input-line {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          background: var(--border-color);
          transition: var(--transition-smooth);
        }

        .form-input:focus ~ .input-line {
          background: var(--accent-color);
          height: 2px;
        }

        .submit-btn {
          margin-top: 1rem;
          padding: 1.2rem 2.5rem;
          background: var(--accent-color);
          color: white;
          border-radius: 1rem;
          font-weight: 700;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          transition: var(--transition-smooth);
        }

        .submit-btn:hover {
          background: var(--accent-secondary);
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        @media (max-width: 968px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Contact;
