import React from 'react';
import { motion } from 'framer-motion';

const SkillCategory = ({ title, skills, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="mb-6"
  >
    <h3 className="text-base font-semibold text-foreground mb-3">{title}</h3>
    <ul className="grid grid-cols-2 gap-2">
      {skills.map((skill, index) => (
        <li key={index} className="text-sm text-muted-foreground flex items-center">
          <span className="mr-2">•</span>
          <span>{skill}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const Skills = () => {
  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          <h2 className="text-sm font-semibold text-primary/80 tracking-wider uppercase">Skills & Expertise</h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/50 to-transparent"></div>
        </div>
        <SkillCategory
          title="Data management"
          skills={[
            "This is the perfect spot to write about my experience.",
            "This is the perfect spot to write about my experience.",
            "This is the perfect spot to write about my experience.",
            "This is the perfect spot to write about my experience."
          ]}
          delay={0.2}
        />
        <SkillCategory
          title="Data management"
          skills={[
            "This is the perfect spot to write about my experience.",
            "This is the perfect spot to write about my experience.",
            "This is the perfect spot to write about my experience.",
            "This is the perfect spot to write about my experience."
          ]}
          delay={0.3}
        />
      </motion.div>
    </section>
  );
};

export default Skills;