import React from 'react';
import { motion } from 'framer-motion';

const education = [
  {
    title: 'Bachelor of Science in Computer Science',
    institution: 'VIT-AP University',
    date: '2022 - 2026',
    details: 'CGPA: 8.07'
  },
  {
    title: 'Class 12 (MPC)',
    institution: 'Tirumala Junior College',
    date: '2020 - 2022',
    details: '95.4%'
  },
  {
    title: 'Class 10',
    institution: 'Chaitanya E.M. High School',
    date: '2020 Pass-out',
    details: '79%'
  }
];

const certifications = [
  {
    title: 'MERN Stack Certificate',
    issuer: 'Ethnus',
    image: '/mern_certificate.png',
    link: 'https://ethnus.com/certverify'
  },
  {
    title: 'AI Skill Certificate',
    issuer: 'EY and Microsoft',
    image: '/ai_skill_certificate.png',
    link: 'https://gsp.ey.com/'
  },
  {
    title: '1M1B Green Internship',
    issuer: 'AICTE supported by Salesforce',
    image: '/green_intern_certificate.png',
    link: '#'
  }
];

const Education = () => {
  return (
    <section id="education" className="section container">
      <h2 className="section-title">Education & Certifications</h2>
      <p className="section-subtitle">My academic journey and professional certifications.</p>
      
      <div className="timeline">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="timeline-content">
              <div className="timeline-date">{edu.date}</div>
              <h3 className="timeline-title">{edu.title}</h3>
              <p className="timeline-subtitle">{edu.institution}</p>
              <p className="text-sm text-secondary" style={{ marginTop: '8px' }}>{edu.details}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <h3 className="section-title" style={{ fontSize: '2rem', marginTop: '80px' }}>Certifications</h3>
      <div className="projects-grid">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="project-card"
          >
            <img src={cert.image} alt={cert.title} className="project-image" style={{ objectFit: 'contain', background: '#fff' }} />
            <div className="project-content">
              <h4 className="project-title" style={{ fontSize: '1.25rem' }}>{cert.title}</h4>
              <p className="project-desc">Issued by {cert.issuer}</p>
              {cert.link !== '#' && (
                <a href={cert.link} target="_blank" rel="noreferrer" className="project-link">
                  Verify Credential
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
