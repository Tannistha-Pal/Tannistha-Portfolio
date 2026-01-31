import React from 'react'
import { ArrowRight, Download } from 'lucide-react'
import './Hero.css'
import profileImage from '../assets/profile.jpg';

const Hero = ({ isVisible }) => {
  return (
    <section id="home" className={`hero ${isVisible ? 'fade-in' : ''}`}>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Tannistha Pal</span>
            </h1>
            <h2 className="hero-subtitle">
              2nd Year Computer Science Engineering Student
            </h2>
            <p className="hero-description">
              I love building creative and functional web experiences that bring ideas to life through clean code and innovative design.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                View My Work <ArrowRight size={20} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Hire Me
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-container">
              <img
                  src={profileImage}
                  alt="Tannistha Pal"
                  className="profile-image"
                  onError={(e) => {
                  e.target.src = 'https://dummyimage.com/400x400/e5e5e5/666666?text=Profile+Photo';
                  }}
                  />
              <div className="profile-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
