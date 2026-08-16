import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CTA() {
  return (
    <section className="py-32 relative z-10 overflow-hidden">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center bg-black/20 backdrop-blur-xl border border-white/10 p-16 md:p-24 rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-white mb-8 font-display">
              Ready to build the <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600">
                most important structure of your business?
              </span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              If you want to keep doing everything manually, that's on you. If you want to scale up without burning out, let's talk.
            </p>
            <Link to="/contact" className="w-full sm:w-auto bg-gradient-to-r from-brand-500 to-brand-600 hover:from-black hover:to-black text-white hover:text-brand-500 px-14 py-6 rounded-md text-xl font-extrabold transition-all duration-300 flex items-center justify-center mx-auto group shadow-lg shadow-brand-500/30 border border-transparent hover:border-brand-500">
              Book a call with us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
