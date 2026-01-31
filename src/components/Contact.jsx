import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react'
import './Contact.css'

const Contact = ({ isVisible }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'tannisthapal6@gmail.com',
      link: 'mailto:tannisthapal6@gmail.com'
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: '+91 77973 92600',
      link: 'tel:+917797392600'
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'Kolkata, India',
      link: '#'
    }
  ]

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      url: 'https://github.com/Tannistha-Pal'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/tannistha-pal/'
    },
    {
      icon: <Instagram size={24} />,
      label: 'Instagram',
      url: 'https://www.instagram.com/tannistha_24/'
    }
  ]

  return (
    <section id="contact" className={`section ${isVisible ? 'fade-in' : ''}`}>
      <div className="contact-container">
        <h2 className="section-title">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-subtitle">Let's work together</h3>
            <p className="contact-description">
              I'm always open to discussing new opportunities, creative projects, 
              or just having a chat about technology. Feel free to reach out!
            </p>
            
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <a 
                  key={index} 
                  href={info.link} 
                  className="contact-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">{info.label}</span>
                    <span className="contact-value">{info.value}</span>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="social-links">
              <h4>Follow me on</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="social-link"
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
          
          <div className="contact-form-container">
            <form className="contact-form card" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
