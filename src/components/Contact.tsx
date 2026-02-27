import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setStatus('sending');

    // Note: You will need to replace these with your actual IDs from EmailJS
    // Service ID, Template ID, and Public Key
    emailjs.sendForm(
      'service_52wksy5',
      'template_ockz5k8',
      formRef.current,
      'SOhu1JA6uOFOskMCu'
    )
      .then(() => {
        setStatus('success');
        formRef.current?.reset();
        setTimeout(() => setStatus('idle'), 5000);
      }, (error: any) => {
        console.log(error);
        setStatus('error');
        setErrorMessage('Something went wrong. Please try again or email me directly.');
        setTimeout(() => setStatus('idle'), 5000);
      });
  };

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
              <a href="https://www.linkedin.com/in/sumit-kumar-aab043312/" target='_blank' className="social-item glass">
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/Sumit797369" target='_blank' className="social-item glass">
                <Github size={24} />
                <span>GitHub</span>
              </a>
              <a href="mailto:sk5040027@gmail.com" target='_blank' className="social-item glass">
                <Mail size={24} />
                <span>Email</span>
              </a>
            </div>
          </motion.div>

          <motion.form
            ref={formRef}
            className="contact-form glass"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={sendEmail}
          >
            <div className="form-group">
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                className="form-input"
                required
                disabled={status === 'sending'}
              />
              <div className="input-line"></div>
            </div>
            <div className="form-group">
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                className="form-input"
                required
                disabled={status === 'sending'}
              />
              <div className="input-line"></div>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Message"
                className="form-input"
                rows={5}
                required
                disabled={status === 'sending'}
              ></textarea>
              <div className="input-line"></div>
            </div>

            <button
              type="submit"
              className={`submit-btn ${status === 'sending' ? 'loading' : ''} ${status === 'success' ? 'success' : ''}`}
              disabled={status !== 'idle'}
            >
              <AnimatePresence mode="wait">
                {status === 'idle' && (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="btn-content"
                  >
                    <span>Send Message</span>
                    <Send size={18} />
                  </motion.div>
                )}
                {status === 'sending' && (
                  <motion.div
                    key="sending"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="btn-content"
                  >
                    <span>Sending...</span>
                    <Loader2 size={18} className="spin" />
                  </motion.div>
                )}
                {status === 'success' && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="btn-content"
                  >
                    <span>Sent!</span>
                    <CheckCircle size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>

            <AnimatePresence>
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="error-message"
                >
                  <AlertCircle size={16} />
                  <span>{errorMessage}</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.form>
        </div>
      </div>

      <style>{`
        .contact-section {
          background-color: var(--bg-color);
          padding-bottom: clamp(5rem, 10vh, 10rem);
          overflow: hidden;
        }

        .contact-container {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: clamp(2rem, 5vw, 6rem);
          align-items: start;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .contact-subtitle {
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 800;
          line-height: 1.2;
        }

        .contact-text {
          font-size: clamp(1rem, 1.5vw, 1.2rem);
          opacity: 0.7;
          max-width: 500px;
          line-height: 1.6;
        }

        .social-links-big {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1.2rem;
          margin-top: 1rem;
        }

        .social-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.2rem 1.5rem;
          border-radius: 1.2rem;
          font-weight: 700;
          transition: var(--transition-smooth);
          border: 1px solid var(--border-color);
        }

        .social-item:hover {
          background: var(--accent-color);
          color: white;
          transform: translateY(-5px);
          border-color: var(--accent-color);
          box-shadow: 0 10px 20px rgba(59, 130, 246, 0.2);
        }

        .contact-form {
          padding: clamp(1.5rem, 5vw, 4rem);
          border-radius: 2.5rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
          box-shadow: 0 30px 60px rgba(0,0,0,0.2);
        }

        .form-group {
          position: relative;
        }

        .form-input {
          width: 100%;
          padding: 1.2rem 0;
          background: transparent;
          border: none;
          color: var(--text-color);
          font-size: 1.1rem;
          font-family: inherit;
          outline: none;
          border-bottom: 1px solid var(--border-color);
          transition: var(--transition-smooth);
        }

        .form-input:focus {
          border-bottom-color: var(--accent-color);
        }

        .submit-btn {
          margin-top: 1rem;
          padding: 1.2rem 2.5rem;
          background: var(--accent-color);
          color: white;
          border-radius: 1.2rem;
          font-weight: 800;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-smooth);
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
        }

        .submit-btn:hover:not(:disabled) {
          background: var(--accent-secondary);
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(168, 85, 247, 0.4);
        }

        @media (max-width: 1024px) {
          .contact-container {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .contact-info {
            text-align: left;
          }
          .social-links-big {
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .contact-form {
            border-radius: 2rem;
          }
        }

        @media (max-width: 480px) {
          .social-links-big {
            grid-template-columns: 1fr;
          }
          .submit-btn {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
