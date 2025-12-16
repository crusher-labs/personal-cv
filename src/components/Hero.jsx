import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Linkedin, Twitter, MapPin } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid md:grid-cols-3 gap-x-12 gap-y-8 items-start"
    >
      <div className="relative md:col-span-1">
        <motion.div variants={itemVariants} className="aspect-square rounded-full overflow-hidden border-4 border-card shadow-lg">
           <img alt="Portrait of Laureant Caesar" className="w-full h-full object-cover" src="https://horizons-cdn.hostinger.com/92c8232d-cbbb-4183-ba18-4980f0a412e8/gemini_generated_image_ro9hgaro9hgaro9h-0CtRJ.png" />
        </motion.div>
      </div>

      <div className="md:col-span-2 flex flex-col justify-center h-full">
        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
          Laureant Caesar
        </motion.h1>
        <motion.p variants={itemVariants} className="mt-2 text-lg text-muted-foreground">
          Market Research & IT Business Analyst
        </motion.p>
        
        <motion.div variants={itemVariants} className="mt-6 text-sm text-muted-foreground leading-relaxed">
          <p>
            This is the perfect spot to write about my experience. The paragraph can be longer to dive in depth into what really matters. That way we can all discuss the important topics and dive deeper into the most enticing ideas during our talk. This CV is a good opportunity for us to highlight our strengths and move the conversation forward.
          </p>
        </motion.div>

        <motion.div 
          variants={itemVariants} 
          className="mt-8 pt-6 border-t border-border/60 flex flex-wrap gap-x-6 gap-y-3 text-sm"
        >
          <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="w-4 h-4" />
            <span>123-456-7890</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="w-4 h-4" />
            <span>info@examplesite.com</span>
          </div>
          <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="w-4 h-4" />
            <span>Laurent Caesar</span> {/* Updated LinkedIn text */}
          </a>
          <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <Twitter className="w-4 h-4" />
            <span>@laureant_caesar</span>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;