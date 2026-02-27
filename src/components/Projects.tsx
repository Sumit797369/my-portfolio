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
    tech: ["React", "Node.js","express.js", "MongoDB"],
    image: img2,
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
        }

        .projects-grid {
          display: flex;
          overflow-x: auto;
          gap: 2rem;
          padding: 1rem 0 3rem;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none;  /* IE and Edge */
        }

        .projects-grid::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }

        .project-card {
          flex: 0 0 450px;
          scroll-snap-align: center;
          position: relative;
          border-radius: 2rem;
          overflow: hidden;
          background: var(--card-bg);
          border: 1px solid var(--border-color);
        }

        .project-image-container {
          position: relative;
          height: 300px;
          overflow: hidden;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-links {
          display: flex;
          gap: 2rem;
        }

        .project-link-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: var(--accent-color);
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 0.3s ease;
        }

        .project-link-btn:hover {
          transform: scale(1.1);
          background: var(--accent-secondary);
        }

        .project-info {
          padding: 2rem;
        }

        .project-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
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
          font-size: 1rem;
          color: white;
          line-height: 1.6;
          margin: 0;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }

        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .tech-tag {
          font-size: 0.8rem;
          padding: 0.4rem 1rem;
          border-radius: 2rem;
          background: var(--border-color);
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .project-card {
            flex: 0 0 85vw;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
