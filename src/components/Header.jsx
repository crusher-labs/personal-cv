import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-transparent sticky top-0 z-50 py-4"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex justify-center items-center">
          {/* Removed the "Business Resume" button */}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;