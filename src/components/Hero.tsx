import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TrustedBy } from './TrustedBy';

export function Hero() {
  return (
    <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden flex flex-col justify-center min-h-[90vh]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full h-full flex items-center">


        <div className="text-left max-w-4xl flex flex-col items-start mt-8 relative z-10">
          <h1 className="text-6xl md:text-[4.25rem] lg:text-[5.25rem] font-extrabold tracking-tighter text-white mb-6 leading-[1.05] font-display">
            Website Design & Marketing Systems For <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600 inline-block mt-2 lg:mt-0">
              Contractors
            </span>
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          >
            Real systems that make you <strong className="font-bold text-white">more money</strong>, save you <strong className="font-bold text-white">more time</strong>, and <strong className="font-bold text-white">remove the risks</strong> of manual human error.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
          >
            <Link to="/contact" className="w-full sm:w-auto bg-gradient-to-r from-brand-500 to-brand-600 hover:from-black hover:to-black text-white px-10 py-5 rounded-md text-lg font-extrabold transition-all duration-300 flex items-center justify-center shadow-lg shadow-brand-500/30 border border-transparent hover:border-brand-500 hover:text-brand-500">
              Book A Call
            </Link>
            <Link to="/pricing" className="w-full sm:w-auto px-10 py-5 rounded-md text-lg font-extrabold text-white transition-colors duration-75 flex items-center justify-center border border-white/20 hover:bg-brand-500 hover:border-brand-500 bg-white/5 shadow-sm">
              Products
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
            className="w-full"
          >
            <TrustedBy />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
