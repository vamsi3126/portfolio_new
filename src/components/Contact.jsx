import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <footer id="contact" className="section container" style={{ paddingBottom: '0' }}>
      <div className="contact-section">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="social-links">
          <a href="mailto:vamsigattikoppula@gmail.com" className="social-link" title="Email">
            <Mail size={24} />
          </a>
          <a href="tel:+919392407273" className="social-link" title="Phone">
            <Phone size={24} />
          </a>
          <a href="https://wa.me/9392407273" target="_blank" rel="noreferrer" className="social-link" title="WhatsApp">
            <FaWhatsapp size={28} />
          </a>
          <a href="https://www.linkedin.com/in/vamsi-gattikoppula-838v2" target="_blank" rel="noreferrer" className="social-link" title="LinkedIn">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
      
      <div className="footer">
        <p>&copy; {new Date().getFullYear()} Vamsi Gattikoppula. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Contact;
