import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Web Building Languages & Tools',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Figma']
  },
  {
    title: 'Problem Solving with Java',
    skills: ['Java', 'Data Structures', 'Algorithms']
  },
  {
    title: 'Data Analysis',
    skills: ['SQL', 'Power BI', 'Python', 'NumPy', 'Pandas']
  },
  {
    title: 'White Coding (AI Assisted)',
    skills: ['Prompt Engineering', 'ChatGPT', 'AI Pair Programming']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section container">
      <h2 className="section-title">My Skills</h2>
      <p className="section-subtitle">Technologies and tools I work with to bring ideas to life.</p>
      
      <div className="skills-container">
        {skillCategories.map((category, catIndex) => (
          <div key={catIndex} className="skill-category">
            <h3 className="skill-category-title">{category.title}</h3>
            <div className="skills-grid">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="skill-badge"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
