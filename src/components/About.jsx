import React from 'react'
import { Download, Code, Coffee, Heart } from 'lucide-react'
import './About.css'
import resume from '../assets/resume.pdf';

const About = ({ isVisible }) => {
  return (
    <section id="about" className={`section ${isVisible ? 'fade-in' : ''}`}>
      <div className="about-container">
        <h2 className="section-title">
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div className="about-content">
          {/* LEFT SIDE — Description */}
          <div className="about-left">
            <p className="about-description">
              I'm a passionate Computer Science Engineering student with a love for creating 
              digital experiences that matter. Currently in my 2nd year, I'm constantly 
              exploring new technologies and pushing the boundaries of what's possible with code.
            </p>
            <p className="about-description">
              When I'm not coding, you'll find me experimenting with new frameworks, 
              contributing to open-source projects, or learning about the latest trends 
              in web development. I believe in writing clean, efficient code that not 
              only works but also tells a story.
            </p>
            <p className="about-description">
              My goal is to bridge the gap between design and functionality, creating 
              web applications that are both beautiful and performant.
            </p>
          </div>

          {/* RIGHT SIDE — Stats + Button */}
          <div className="about-right">
            <div className="about-stats">
              <div className="stat-item">
                <Code className="stat-icon" />
                <div>
                  <h4>Clean Code</h4>
                  <p>Writing maintainable solutions</p>
                </div>
              </div>
              <div className="stat-item">
                <Coffee className="stat-icon" />
                <div>
                  <h4>Problem Solver</h4>
                  <p>Turning ideas into reality</p>
                </div>
              </div>
              <div className="stat-item">
                <Heart className="stat-icon" />
                <div>
                  <h4>Passionate</h4>
                  <p>Love what I do</p>
                </div>
              </div>
            </div>

            <a href={resume} className="btn btn-primary" download>
              <Download size={20} />
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
