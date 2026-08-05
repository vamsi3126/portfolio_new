import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero container">
      <div className="hero-content">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-text"
        >
          <span className="hero-greeting">Hello, it's me</span>
          <h1 className="hero-title">
            <span className="text-gradient">Vamsi</span><br />
            Gattikoppula
          </h1>
          <h2 className="hero-subtitle">
            And I'm a <span className="text-gradient">Software Developer</span> looking forward<br />
            to crafting responsive, user-friendly websites<br />
            and applications.
          </h2>
          <div className="hero-actions">
            <a href="https://www.linkedin.com/in/vamsi-gattikoppula-838v2" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <img src="/linkedin-logo.webp" alt="LinkedIn" style={{ width: 20, height: 20, borderRadius: '4px' }} /> LinkedIn
            </a>
            <a href="https://github.com/vamsi3126" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              GitHub <ChevronRight size={20} />
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="hero-image"
        >
          <div className="hero-img-wrapper">
            <img src="/8382.jpeg" alt="Vamsi Gattikoppula" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
