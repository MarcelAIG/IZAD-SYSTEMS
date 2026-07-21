import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-left max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center py-2 px-5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-xl shadow-[0_0_20px_rgba(214,40,0,0.15)]">
              <span className="w-2 h-2 rounded-full bg-brand-500 mr-3 animate-pulse shadow-[0_0_8px_rgba(214,40,0,0.8)]"></span>
              Built For Scale
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-[6.5rem] font-extrabold tracking-tight text-white mb-8 leading-[1.05]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Scale Operations.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">
              Multiply Revenue.
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-zinc-400 mb-12 max-w-xl leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Automated systems for booking, lead generation, and growth.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-start gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <button className="w-full sm:w-auto bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-white px-10 py-5 rounded-full text-lg font-bold transition-all flex items-center justify-center group shadow-[0_0_30px_rgba(214,40,0,0.3)] border border-brand-400/50">
              Start Scaling
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
