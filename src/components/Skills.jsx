import React from 'react'
import { Code, Database, Globe, Wrench } from 'lucide-react'
import './Skills.css'

const Skills = ({ isVisible }) => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code size={24} />,
      skills: ['Python', 'C', 'C++', 'Java', 'JavaScript']
    },
    {
      title: 'Web Technologies',
      icon: <Globe size={24} />,
      skills: ['HTML5', 'CSS3', 'React']
    },
    {
      title: 'Database & Backend',
      icon: <Database size={24} />,
      skills: ['MySQL']
    },
    {
      title: 'Tools & Technologies',
      icon: <Wrench size={24} />, 
      skills: ['Git', 'GitHub', 'VS Code']
    }
  ]

  return (
    <section id="skills" className={`section ${isVisible ? 'fade-in' : ''}`}>
      <div className="skills-container">
        <h2 className="section-title">
          My <span className="gradient-text">Skills</span>
        </h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category card">
              <div className="category-header">
                <div className="category-icon">{category.icon}</div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span className="skill-name">{skill}</span>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          animationDelay: `${skillIndex * 0.1}s`,
                          width: `${85 + Math.random() * 15}%`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
