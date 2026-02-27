import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import img2 from "../assets/images/img_2.png"
import img3 from "../assets/images/img_3.png"
import img4 from "../assets/images/img_4.png"

const projects = [
  {
    title: "E-Commerce Reimagined",
    description: "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
    tech: ["React", "Node.js", "express.js", "MongoDB"],
    image: img2,
    link: "https://comingsooonnn.netlify.app/",
    github: "https://github.com/Sumit797369/urbanfashin-ecommerce-"
  },
  {
    title: "HireNest – Job Portal",
    description: "Built a job portal web application that consumes REST APIs to fetch and display real-time job data.",
    tech: ["React.js", "API", "Tailwind CSS"],
    image: img3,
    link: "https://hirenestt.netlify.app/",
    github: "https://github.com/Sumit797369/HireNest"
  },
  {
    title: " KANBAN",
    description: "KanFlow is a simple and intuitive Kanban board application that helps users organize, track, and manage tasks efficiently through a visual workflow system.",
    tech: ["React.js", "Tailwind CSS"],
    image: img4,
    link: "https://kanflow11.netlify.app/",
    github: "https://github.com/Sumit797369/Kanban"
  },

];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title centered-title">FEATURED PROJECTS</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay glass">
                  <div className="project-overlay-content">
                    <p className="project-description-overlay">{project.description}</p>
                    <div className="project-links">
                      <a href={project.link} target='_blank' className="project-link-btn" title="Live Demo">
                        <ExternalLink size={24} />
                      </a>
                      <a href={project.github} target='_blank' className="project-link-btn" title="GitHub Repo">
                        <Github size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-tech">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-section {
          background-color: var(--bg-color);
          overflow: hidden;
        }

        .projects-grid {
          display: flex;
          overflow-x: auto;
          gap: 2.5rem;
          padding: 1rem var(--container-padding) 4rem;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          margin: 0 calc(-1 * var(--container-padding));
        }

        .projects-grid::-webkit-scrollbar {
          display: none;
        }

        .project-card {
          flex: 0 0 500px;
          scroll-snap-align: center;
          position: relative;
          border-radius: 2.5rem;
          overflow: hidden;
          background: var(--card-bg);
          border: 1px solid var(--border-color);
          transition: var(--transition-smooth);
        }

        .project-card:hover {
          border-color: var(--accent-color);
          box-shadow: 0 20px 40px rgba(0,0,0,0.3);
          transform: translateY(-5px);
        }

        .project-image-container {
          position: relative;
          height: 320px;
          overflow: hidden;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .project-card:hover .project-image {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: all 0.4s ease;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(4px);
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-links {
          display: flex;
          gap: 1.5rem;
          transform: translateY(20px);
          transition: all 0.4s ease;
        }

        .project-card:hover .project-links {
          transform: translateY(0);
        }

        .project-link-btn {
          width: 55px;
          height: 55px;
          border-radius: 50%;
          background: white;
          color: black;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease;
        }

        .project-link-btn:hover {
          transform: scale(1.1);
          background: var(--accent-color);
          color: white;
        }

        .project-info {
          padding: 2.5rem;
        }

        .project-title {
          font-size: 1.8rem;
          margin-bottom: 1.2rem;
          font-weight: 800;
          color: var(--text-color);
        }

        .project-overlay-content {
          text-align: center;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
        }

        .project-description-overlay {
          font-size: 1.1rem;
          color: white;
          line-height: 1.6;
          max-width: 80%;
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .tech-tag {
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.5rem 1.2rem;
          border-radius: 2rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          color: var(--text-color);
          opacity: 0.7;
        }

        @media (max-width: 1024px) {
          .project-card {
            flex: 0 0 400px;
          }
          .project-image-container {
            height: 280px;
          }
        }

        @media (max-width: 768px) {
          .projects-grid {
            gap: 1.5rem;
            padding-bottom: 3rem;
          }
          
          .project-card {
            flex: 0 0 85vw;
            border-radius: 2rem;
          }

          .project-image-container {
            height: 240px;
          }

          .project-overlay {
            opacity: 1;
            background: rgba(0, 0, 0, 0.2);
            backdrop-filter: none;
            align-items: flex-end;
            justify-content: flex-end;
            padding: 1.5rem;
            pointer-events: none;
          }
          
          .project-links {
            transform: none;
            pointer-events: auto;
          }

          .project-description-overlay {
            display: none;
          }

          .project-link-btn {
            width: 45px;
            height: 45px;
          }
          
          .project-info {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .project-card {
            flex: 0 0 calc(100vw - 2rem);
          }
          .project-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
