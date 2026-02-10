import React from 'react'
import { ExternalLink, Github, Code, Smartphone, Globe } from 'lucide-react'
import './Projects.css'

const Projects = ({ isVisible }) => {
  const projects = [
    {
      title: 'Melodic Beats: Web Music Player',
      description: 'A clean, functional web music player built with HTML, CSS, and JavaScript. Features play/pause, volume control, progress tracking, and playlist management, showcasing core front-end skills.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoByvnfggCTHOdTPTlsJPWyk63xgfGY3ZHew&s',
      tech: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation', 'GitHub'],
      liveUrl: 'https://tannistha-pal.github.io/MelodicBeats/',
      githubUrl: 'https://github.com/Tannistha-Pal/MelodicBeats',
      icon: <Globe size={20} />
    },
    {
      title: 'FlyEase - Travel Tour Booking Platform',
      description: 'A responsive travel website built with HTML, CSS, and JavaScript to let users explore destinations and tour packages effortlessly. Features interactive design, smooth navigation, and a clean, modern UI showcasing strong front-end skills.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVG-EQKFS-nejc4z6zYzSVHywQnPrIAiobKg&s',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Responsive Design'],
      liveUrl: 'https://tannistha-pal.github.io/flyease-vanilla-html-css-js-version/',
      githubUrl: 'https://github.com/Tannistha-Pal/flyease-vanilla-html-css-js-version',
      icon: <Code size={20} />
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing my projects and skills. Built with React and modern CSS techniques, featuring smooth animations and dark theme.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'CSS3', 'JavaScript', 'Responsive Design'],
      liveUrl: 'https://tannistha-portfolio.vercel.app/',
      githubUrl: 'https://github.com/Tannistha-Pal/Tannistha-Portfolio',
      icon: <Globe size={20} />
    },
    {
      title: 'ExpenseWise – Expense Tracker Web App',
      description: 'A full-featured expense tracking web application built with React, TypeScript, Tailwind CSS, Node.js, and Express. Includes authentication, dashboards, budgeting, analytics, and transaction management.',
      image: 'https://images.pexels.com/photos/4386375/pexels-photo-4386375.jpeg?auto=compress&cs=tinysrgb&w=600',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'REST API'],
      liveUrl: 'https://expensewise.vercel.app/', // replace with your actual deployed link
      githubUrl: 'https://github.com/Tannistha-Pal/expensewise', // replace if different
      icon: <Globe size={20} />
    }
  ]

  return (
    <section id="projects" className={`section ${isVisible ? 'fade-in' : ''}`}>
      <div className="projects-container">
        <h2 className="section-title">
          My <span className="gradient-text">Projects</span>
        </h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card gradient-border">
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  onError={(e) => {
                    e.target.src = `https://dummyimage.com/600x300/e5e5e5/666666?text=${project.title.replace(/\s+/g, '+')}`;
                  }}
                />
                <div className="project-overlay">
                  <div className="project-icon">
                    {project.icon}
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a 
                    href={project.liveUrl} 
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl} 
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
