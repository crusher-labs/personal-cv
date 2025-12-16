import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Linkedin, Twitter } from 'lucide-react';
const Contact = () => {
  return <motion.section id="contact" initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} transition={{
    duration: 0.5
  }} className="py-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <h2 className="text-sm font-semibold text-primary/80 tracking-wider uppercase">Contact</h2>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-primary/50 to-transparent"></div>
      </div>
      <div className="space-y-3">
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-primary/70" />
          <div>
            <p className="text-sm font-medium text-foreground">Phone</p>
            <p className="text-sm text-muted-foreground">123-456-7890</p>
          </div>
        </motion.div>
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.5,
        delay: 0.3
      }} className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-primary/70" />
          <div>
            <p className="text-sm font-medium text-foreground">Email</p>
            <p className="text-sm text-muted-foreground">info@examplesite.com</p>
          </div>
        </motion.div>
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.5,
        delay: 0.4
      }} className="flex items-center gap-3">
          <Linkedin className="w-5 h-5 text-primary/70" />
          <div>
            <p className="text-sm font-medium text-foreground">LinkedIn</p>
            <a href="#" className="text-sm text-primary/80 hover:underline">linkedin.com/in/laureant-caesar</a>
          </div>
        </motion.div>
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.5,
        delay: 0.5
      }} className="flex items-center gap-3">
          <Twitter className="w-5 h-5 text-primary/70" />
          <div>
            <p className="text-sm font-medium text-foreground">Twitter</p>
            <a href="#" className="text-sm text-primary/80 hover:underline">@laureant_caesar</a>
          </div>
        </motion.div>
      </div>
      <motion.footer initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.5,
      delay: 0.6
    }} className="mt-16 pt-8 border-t border-border/60 text-center">
        <p className="text-xs text-muted-foreground">© 2025 by Laureant Caesar.</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="#" className="text-muted-foreground hover:text-primary/80 transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary/80 transition-colors">
            <Twitter className="w-4 h-4" />
          </a>
        </div>
      </motion.footer>
    </motion.section>;
};
export default Contact;