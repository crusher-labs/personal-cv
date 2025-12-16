import React from 'react';
import { motion } from 'framer-motion';

const ExperienceItem = ({ title, company, location, period, responsibilities, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="mb-8 pb-8 border-b border-border/60 last:border-0"
  >
    <div className="flex justify-between items-start mb-3">
      <div>
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{company}</p>
        <p className="text-sm text-muted-foreground">{location}</p>
      </div>
      <span className="text-sm text-muted-foreground whitespace-nowrap">{period}</span>
    </div>
    <ul className="space-y-2">
      {responsibilities.map((item, index) => (
        <li key={index} className="text-sm text-muted-foreground flex items-start">
          <span className="mr-2">•</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const Experience = () => {
  return (
    <section id="resume" className="py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          <h2 className="text-sm font-semibold text-primary/80 tracking-wider uppercase">Professional Experience</h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/50 to-transparent"></div>
        </div>
        <ExperienceItem
          title="Business Intelligence Analyst"
          company="Company"
          location="New York"
          period="2022 - Present"
          responsibilities={[
            "This is the perfect spot to write about my experience.",
            "This is the perfect spot to write about my experience.",
            "This is the perfect spot to write about my experience."
          ]}
          delay={0.2}
        />
        <ExperienceItem
          title="Business Operations Consultant"
          company="Loneheart"
          location="New York"
          period="2018 - 2022"
          responsibilities={[
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

export default Experience;