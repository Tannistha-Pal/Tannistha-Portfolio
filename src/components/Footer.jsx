import React from 'react'
import { Heart, Github, Linkedin, Instagram, Mail } from 'lucide-react'
import './Footer.css'

const Footer = () => {
  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/Tannistha-Pal', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/tannistha-pal/', label: 'LinkedIn' },
    { icon: <Instagram size={20} />, url: 'https://www.instagram.com/tannistha_24/', label: 'Instagram' },
    { icon: <Mail size={20} />, url: 'mailto:tannisthapal6@email.com', label: 'Email' }
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="gradient-text">Tannistha Pal</h3>
            <p>Building the future, one line of code at a time.</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Connect</h4>
              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="footer-social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              © 2025 Tannistha Pal. Built with <Heart size={16} className="heart-icon" /> using React
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
