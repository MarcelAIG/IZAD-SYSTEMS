import { motion } from 'motion/react';
import { About as AboutSection } from '../components/About';
import { CTA } from '../components/CTA';

export function AboutPage() {
  return (
    <div className="pt-24 pb-12 min-h-screen flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12 mb-8 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white font-display mb-6 leading-tight"
        >
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600">Us</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed"
        >
          We are a team of engineers and operators obsessed with killing inefficiency and building systems that scale.
        </motion.p>
      </div>

      <div className="relative z-10">
        {/* Reuse the homepage About section for consistency */}
        <AboutSection />
      </div>
      
      <CTA />
    </div>
  );
}
