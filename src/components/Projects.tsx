import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "E-Commerce Reimagined",
        tech: ["React", "TypeScript", "Node.js", "MongoDB"],
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2089&auto=format&fit=crop",
        link: "#",
        github: "#"
    },
    {
        title: "Present Sirr!",
        tech: ["Next.js", "Mongodb", "React.js"],
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
        link: "#",
        github: "#"
    },
    {
        title: "Job Portal",
        tech: ["React", "GSAP", "Tailwind CSS"],
        image: "https://images.unsplash.com/photo-1454165833267-0c7f07e5cd3f?q=80&w=2070&auto=format&fit=crop",
        link: "#",
        github: "#"
    },
    {
        title: "Crypto Dashboard",
        tech: ["TypeScript", "D3.js", "Firebase"],
        image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1974&auto=format&fit=crop",
        link: "#",
        github: "#"
    }
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
                                    <div className="project-links">
                                        <a href={project.link} className="project-link-btn" title="Live Demo">
                                            <ExternalLink size={24} />
                                        </a>
                                        <a href={project.github} className="project-link-btn" title="GitHub Repo">
                                            <Github size={24} />
                                        </a>
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
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
          gap: 3rem;
        }

        .project-card {
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
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
};

export default Projects;
