import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.5 6-6.76 0-1.46-.5-2.68-1.3-3.62.13-.34.56-1.72-.13-3.58 0 0-1.07-.34-3.5 1.3A12.3 12.3 12.3 0 0 0 12 4c-1.34.03-2.7.2-4 .58-2.43-1.64-3.5-1.3-3.5-1.3-.7 1.86-.26 3.24-.13 3.58A5.3 5.3 5.3 0 0 0 3 9.76c0 5.26 3 6.42 6 6.76-.8.2-1.2 1-1.2 2.2V22" />
    <path d="M3 19c-2 .5-3-1-3-1" />
  </svg>
);

const projects = [
  {
    title: 'Hospital Management System',
    description: 'A Web Portal showcasing an intuitive management interface.',
    image: '/HMS.png',
    github: 'https://github.com/vamsi3126/HOSPITAL_MANAGEMENT_SYSTEM_111',
    demo: 'https://hospital-management-system-111-vams.vercel.app/'
  },
  {
    title: 'Attendance Management',
    description: 'System for institutions to track and manage student attendance.',
    image: '/attendanceImage.png',
    github: 'https://github.com/vamsi3126/AttendanceManagementSystem',
    demo: 'https://attendance-management-system-vamsi.vercel.app/'
  },
  {
    title: 'Secure File Transfer',
    description: 'A secure and efficient file transfer system with encryption.',
    image: '/secure-file-transfer.png',
    github: 'https://github.com/vamsi3126/secure-file-transfer_vamsi',
    demo: 'https://secure-file-transfer-vamsi.vercel.app/'
  },
  {
    title: 'Smart Green Tracker',
    description: 'CO2 emission tracking system for vehicles supporting green initiatives.',
    image: '/smart-image.png',
    github: 'https://github.com/vamsi3126/smart_green_compute_tracker',
    demo: 'https://smart-green-system-tracker.vercel.app/'
  },
  {
    title: 'Tic-Tac-Toe & RPS',
    description: 'Classic web games built with clean front-end code.',
    image: '/tic-tac-toe.png',
    github: 'https://github.com/vamsi3126/TTT',
    demo: 'https://tic-tac-toe-sigma-taupe.vercel.app/'
  },
  {
    title: 'Basic Calculator',
    description: 'A beautifully designed web calculator for arithmetic operations.',
    image: '/calculator.png',
    github: 'https://github.com/vamsi3126/01.Basic-Calculator',
    demo: 'https://01-basic-calculator.vercel.app/'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section container">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">A selection of some of my recent work and creations.</p>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="project-card"
          >
            <a href={project.demo} target="_blank" rel="noreferrer" style={{ display: 'block' }}>
              <img src={project.image} alt={project.title} className="project-image" />
            </a>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                  <GithubIcon size={18} /> GitHub
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="project-link">
                  <ExternalLink size={18} /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
