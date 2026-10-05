import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 100px bottom offset + 24px top stick offset
      const threshold = window.innerHeight - 124;
      setIsSticky(window.scrollY >= threshold);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="navbar-content">
        <a href="#home" className="nav-logo">
          <img src="/logo.png" alt="Logo" />
          <span>Vamsi Gattikoppula</span>
        </a>

        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
          <a href="/vamsi_resume.pdf" download className="btn btn-outline" style={{ marginLeft: '16px' }}>Download CV</a>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="nav-link">
            {link.name}
          </a>
        ))}
        <a href="/vamsi_resume.pdf" download className="btn btn-outline" style={{ width: 'fit-content', marginTop: '8px' }}>Download CV</a>
      </div>
    </nav>
  );
};

export default Navbar;
