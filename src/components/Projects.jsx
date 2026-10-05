import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Shield, Lock, Zap, Sparkles, Clock } from 'lucide-react';

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
    title: 'Secure File Transfer',
    description: 'A secure and efficient file transfer system with robust encryption, role-based access control, and REST APIs.',
    image: '/secure-file-transfer.png',
    github: 'https://github.com/vamsi3126/secure-file-transfer_vamsi',
    demo: 'http://xulfmedia.online/',
    demoLabel: 'Live Demo',
    extraLinks: [
      {
        label: 'Mirror Demo',
        url: 'https://xulf-file-media.vercel.app/',
        icon: 'external'
      }
    ]
  },
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
    title: 'Chrome Extensions',
    description: 'Custom browser tools engineered for security and privacy, featuring Chrome Profile Lock with password-protected browsing.',
    image: '/chrome-profile-lock.png',
    github: 'https://github.com/vamsi3126/chrome-profile-lock',
    isExtension: true
  },
  {
    title: 'Smart Green Tracker',
    description: 'CO2 emission tracking system for vehicles supporting green initiatives.',
    image: '/smart-image.png',
    github: 'https://github.com/vamsi3126/smart_green_compute_tracker',
    demo: 'https://smart-green-system-tracker.vercel.app/'
  },
  {
    title: 'Web Games & Calculator Utilities',
    description: "The very first programs I wrote when starting out in web development — interactive implementations of classic Tic-Tac-Toe and a clean arithmetic calculator. It's a good memory of where my coding journey began!",
    image: '/games-and-calculator.png',
    github: 'https://github.com/vamsi3126/tic-tac-toe',
    githubLabel: 'Tic-Tac-Toe Repo',
    demo: 'https://tic-tac-toe-sigma-taupe.vercel.app/',
    demoLabel: 'Tic-Tac-Toe Demo',
    extraLinks: [
      {
        label: 'Calculator Repo',
        url: 'https://github.com/vamsi3126/01.Basic-Calculator',
        icon: 'github'
      },
      {
        label: 'Calculator Demo',
        url: 'https://01-basic-calculator.vercel.app/',
        icon: 'external'
      }
    ]
  }
];

const Projects = () => {
  const [showExtensionModal, setShowExtensionModal] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowExtensionModal(false);
      }
    };

    if (showExtensionModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [showExtensionModal]);

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
            {project.isExtension ? (
              <div
                className="project-image-container cursor-pointer"
                onClick={() => setShowExtensionModal(true)}
                style={{ cursor: 'pointer' }}
                title="Click to view extension details & screenshot"
              >
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-image-badge">Click for Details</div>
              </div>
            ) : (
              <a href={project.demo} target="_blank" rel="noreferrer" style={{ display: 'block' }}>
                <img src={project.image} alt={project.title} className="project-image" />
              </a>
            )}

            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-links">
                {project.isExtension ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setShowExtensionModal(true)}
                      className="project-link"
                      style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', padding: 0 }}
                    >
                      <ExternalLink size={18} /> View Extension
                    </button>
                    <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                      <GithubIcon size={18} /> GitHub
                    </a>
                  </>
                ) : (
                  <>
                    <a href={project.github} target="_blank" rel="noreferrer" className="project-link">
                      <GithubIcon size={18} /> {project.githubLabel || 'GitHub'}
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer" className="project-link">
                      <ExternalLink size={18} /> {project.demoLabel || 'Live Demo'}
                    </a>
                    {project.extraLinks && project.extraLinks.map((extra, idx) => (
                      <a key={idx} href={extra.url} target="_blank" rel="noreferrer" className="project-link">
                        {extra.icon === 'github' ? <GithubIcon size={18} /> : <ExternalLink size={18} />} {extra.label}
                      </a>
                    ))}
                  </>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Extension Details Pop-up Modal */}
      <AnimatePresence>
        {showExtensionModal && (
          <div className="modal-backdrop" onClick={() => setShowExtensionModal(false)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close-btn"
                onClick={() => setShowExtensionModal(false)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="modal-header">
                <span className="modal-badge">
                  <Shield size={14} /> Chrome Extension • Security
                </span>
                <h3 className="modal-title">Chrome Profile Lock</h3>
                <p className="modal-subtitle">
                  A modern browser security extension designed to lock and password-protect your Google Chrome profile, safeguarding sensitive tabs, history, and active sessions from prying eyes.
                </p>
              </div>

              <div className="modal-image-wrapper">
                <img
                  src="/chrome-profile-lock.png"
                  alt="Chrome Profile Lock Screen Preview"
                  className="modal-image"
                />
              </div>

              <div className="modal-features">
                <div className="modal-feature-card">
                  <h4 className="modal-feature-title">
                    <Lock size={16} className="text-accent" /> Password Protection
                  </h4>
                  <p className="modal-feature-desc">
                    Immediately locks the browser upon launch or idle, requiring user credentials to continue browsing.
                  </p>
                </div>
                <div className="modal-feature-card">
                  <h4 className="modal-feature-title">
                    <Zap size={16} className="text-accent" /> Stealth &amp; Panic Exit
                  </h4>
                  <p className="modal-feature-desc">
                    Quick keyboard shortcuts (<kbd>Esc</kbd>) to instantly blur or safely exit private sessions in real-time.
                  </p>
                </div>
                <div className="modal-feature-card">
                  <h4 className="modal-feature-title">
                    <Sparkles size={16} className="text-accent" /> Sleek Lock UI
                  </h4>
                  <p className="modal-feature-desc">
                    A customized dark lockscreen with dynamic live clock, personalized greeting, and password visibility toggle.
                  </p>
                </div>
              </div>

              <div className="modal-future-banner">
                <Clock size={18} style={{ flexShrink: 0, color: 'var(--accent-light)' }} />
                <span>
                  <strong>More in the pipeline:</strong> A second Chrome extension is actively in progress and will be featured here upon release.
                </span>
              </div>

              <div className="modal-actions">
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setShowExtensionModal(false)}
                >
                  Close
                </button>
                <a
                  href="https://github.com/vamsi3126/chrome-profile-lock"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  <GithubIcon size={18} /> View on GitHub <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
