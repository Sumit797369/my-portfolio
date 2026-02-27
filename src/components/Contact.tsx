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
          transition: var(--transition-smooth);
          border: none;
          min-width: 180px;
        }

        .btn-content {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .submit-btn:disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }

        .submit-btn:hover:not(:disabled) {
          background: var(--accent-secondary);
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        .submit-btn.success {
          background: #22c55e;
        }

        .error-message {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #ef4444;
          font-size: 0.9rem;
          margin-top: -1rem;
        }

        .spin {
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 968px) {
          .contact-section {
            padding-bottom: 5rem;
          }
          .contact-container {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .contact-subtitle {
            font-size: 1.8rem;
          }
          .contact-text {
            margin-bottom: 2rem;
          }
          .contact-form {
            padding: 2rem;
          }
        }

        @media (max-width: 480px) {
          .contact-form {
            padding: 1.5rem;
            gap: 2rem;
          }
          .social-item {
            padding: 1rem 1.5rem;
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
