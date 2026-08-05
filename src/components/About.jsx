import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section container">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">A passionate developer with a knack for building beautiful web applications.</p>
        
        <div className="about-grid">
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">2026</div>
              <div className="stat-text">Graduation Year</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">8.07</div>
              <div className="stat-text">CGPA</div>
            </div>
          </div>
          
          <div className="about-text">
            <p>
              I am a B.Tech Computer Science graduate from VIT-AP University, passionate about frontend development, UI/UX, and building impactful web applications.
            </p>
            <p>
              My journey involves exploring the vast landscape of web technologies, solving complex problems, and continuously upgrading my skills to craft seamless user experiences. 
            </p>
            <p>
              Beyond coding, I am an active member of the Photography and Machine Learning Clubs, which helps me maintain a creative and analytical perspective in everything I do.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
