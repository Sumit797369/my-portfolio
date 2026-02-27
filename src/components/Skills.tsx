import React from 'react';
import { motion } from 'framer-motion';
import {
  FileCode,
  Palette,
  Blocks,
  Atom,
  Wind,
  Layers3,
  Layout,
  Server,
  Cpu,
  Zap,
  Database
} from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="category-icon" />,
    skills: [
      { name: 'HTML', icon: <FileCode size={20} /> },
      { name: 'CSS', icon: <Palette size={20} /> },
      { name: 'JavaScript', icon: <Blocks size={20} /> },
      { name: 'React', icon: <Atom size={20} /> },
      { name: 'Tailwind CSS', icon: <Wind size={20} /> },
      { name: 'Redux', icon: <Layers3 size={20} /> },
    ],
  },
  {
    title: "Backend",
    icon: <Server className="category-icon" />,
    skills: [
      { name: 'Node.js', icon: <Cpu size={20} /> },
      { name: 'Express.js', icon: <Zap size={20} /> },
      { name: 'MongoDB', icon: <Database size={20} /> },
    ],
  },
];

const Skills: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  } as any;

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title centered-title">MY TOOLKIT</h2>
        </motion.div>

        <div className="categories-grid">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className="skill-category-container"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <div className="category-header">
                {category.icon}
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="skill-item-card glass"
                    variants={itemVariants}
                    whileHover={{
                      y: -5,
                      backgroundColor: "var(--border-color)",
                      borderColor: "var(--accent-color)"
                    }}
                  >
                    <div className="skill-icon-box">
                      {skill.icon}
                    </div>
                    <span className="skill-name-text">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          background-color: var(--bg-color);
          position: relative;
          overflow: hidden;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: clamp(2rem, 5vw, 4rem);
          align-items: start;
        }

        .category-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: clamp(1.5rem, 3vh, 2.5rem);
          padding-left: 0.5rem;
        }

        .category-icon {
          color: var(--accent-color);
          width: 32px;
          height: 32px;
        }

        .category-title {
          font-size: clamp(1.5rem, 2.5vw, 2.2rem);
          font-weight: 800;
          letter-spacing: -0.01em;
          color: var(--text-color);
        }

        .skills-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 1rem;
        }

        .skill-item-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding: 1.5rem 1rem;
          border-radius: 1.5rem;
          transition: var(--transition-smooth);
          cursor: default;
          text-align: center;
        }

        .skill-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 1rem;
          background: rgba(59, 130, 246, 0.08);
          color: var(--accent-color);
          transition: var(--transition-smooth);
        }

        .skill-item-card:hover {
          background: var(--card-bg);
          border-color: var(--accent-color);
          transform: translateY(-5px);
        }

        .skill-item-card:hover .skill-icon-box {
          background: var(--accent-color);
          color: white;
          transform: scale(1.1) rotate(5deg);
        }

        .skill-name-text {
          font-weight: 600;
          font-size: 0.95rem;
          color: var(--text-color);
          opacity: 0.9;
        }

        @media (max-width: 1024px) {
          .categories-grid {
            gap: 3rem;
          }
          .skills-list {
            grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .categories-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
          .skills-list {
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
            gap: 0.8rem;
          }
          .skill-item-card {
            padding: 1.2rem 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .skills-list {
            grid-template-columns: repeat(2, 1fr);
          }
          .category-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
