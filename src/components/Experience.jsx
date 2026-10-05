import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink, Sparkles, CheckCircle2, Database, Cloud, Cpu } from 'lucide-react';

const experiences = [
  {
    company: 'Silicofeller',
    website: 'https://silicofeller.com',
    role: 'Software Developer Intern',
    period: 'June 2026 – September 2026',
    durationBadge: 'Past 4 Months',
    type: 'Internship',
    location: 'Gannavaram, Andhra Pradesh (Hybrid)',
    logo: '/silicofeller_logo.png',
    featured: true,
    tagline: 'AI-Powered Quantum Chip Design Platform & EDA',
    description:
      'Silicofeller is an AI-powered Electronic Design Automation (EDA) platform for designing and simulating superconducting quantum processors and circuits.',
    highlights: [
      {
        icon: <Cpu size={18} className="highlight-icon" />,
        text: 'Contributed to developing the cutting-edge AI-Quantum chip design and simulation platform, supporting visual schematic editing and layout workflows.'
      },
      {
        icon: <Cloud size={18} className="highlight-icon" />,
        text: 'Collaborated with engineering peers to successfully package and deploy the full-stack web application on AWS cloud infrastructure.'
      },
      {
        icon: <Database size={18} className="highlight-icon" />,
        text: 'Architected and actively managed PostgreSQL relational databases using AWS RDS, optimizing query execution and ensuring secure, scalable data storage.'
      },
      {
        icon: <Sparkles size={18} className="highlight-icon" />,
        text: 'Implemented intuitive frontend interfaces, interactive design tools, and integrated REST APIs for seamless quantum circuit simulation.'
      }
    ],
    skills: [
      'React',
      'JavaScript',
      'Node.js',
      'PostgreSQL',
      'AWS RDS',
      'AWS Cloud',
      'REST APIs',
      'Git'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="section-header-pill">
          <Briefcase size={16} />
          <span>Career Journey</span>
        </div>
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">
          Hands-on industry experience building scalable software solutions and quantum chip design platforms.
        </p>
      </motion.div>

      <div className="experience-list">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={`experience-card ${exp.featured ? 'featured' : ''}`}
          >
            {exp.featured && (
              <div className="experience-badge-banner">
                <Sparkles size={14} />
                <span>Featured Experience • Past 4 Months</span>
              </div>
            )}

            <div className="experience-header">
              <div className="experience-company-meta">
                {exp.logo ? (
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="company-logo-wrapper"
                    title={`Visit ${exp.company}`}
                  >
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="company-logo"
                    />
                  </a>
                ) : (
                  <div className="company-logo-placeholder">
                    <Briefcase size={28} />
                  </div>
                )}

                <div className="company-info-text">
                  <div className="company-name-row">
                    <h3 className="experience-role">{exp.role}</h3>
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="company-website-pill"
                    >
                      <span>{exp.company}</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                  <p className="experience-tagline">{exp.tagline}</p>
                </div>
              </div>

              <div className="experience-meta-details">
                <div className="meta-item">
                  <Calendar size={15} />
                  <span>{exp.period}</span>
                </div>
                <div className="meta-item">
                  <MapPin size={15} />
                  <span>{exp.location}</span>
                </div>
                <span className="duration-pill">{exp.durationBadge}</span>
              </div>
            </div>

            <p className="experience-description">{exp.description}</p>

            <div className="experience-highlights">
              <h4 className="highlights-title">Key Contributions & Impact</h4>
              <ul className="highlights-list">
                {exp.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="highlight-item">
                    <span className="highlight-icon-wrapper">{highlight.icon}</span>
                    <span className="highlight-text">{highlight.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="experience-skills-footer">
              <div className="skills-tags-list">
                {exp.skills.map((skill) => (
                  <span key={skill} className="experience-skill-tag">
                    {skill}
                  </span>
                ))}
              </div>

              {exp.website && (
                <a
                  href={exp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline experience-site-btn"
                >
                  Visit {exp.company} <ExternalLink size={15} />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
