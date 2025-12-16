import React from 'react';
import { motion } from 'framer-motion';

const EducationItem = ({ degree, field, school, location, period, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="mb-6 last:mb-0"
  >
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-lg font-semibold text-foreground">{degree}</h3>
        <p className="text-sm text-muted-foreground">{field}</p>
        <p className="text-sm text-muted-foreground">{school}</p>
        <p className="text-sm text-muted-foreground">{location}</p>
      </div>
      <span className="text-sm text-muted-foreground whitespace-nowrap">{period}</span>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
          <h2 className="text-sm font-semibold text-primary/80 tracking-wider uppercase">Education</h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/50 to-transparent"></div>
        </div>
        <EducationItem
          degree="MBA"
          field="Business"
          school="Oxford University"
          location="Oxford, United Kingdom"
          period="2017"
          delay={0.2}
        />
        <EducationItem
          degree="Business Management"
          field="Business"
          school="UCLA"
          location="Los Angeles, California"
          period="2014 - 2016"
          delay={0.3}
        />
      </motion.div>
    </section>
  );
};

export default Education;