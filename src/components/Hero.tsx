import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TrustedBy } from './TrustedBy';

export function Hero() {
  return (
    <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden flex flex-col justify-center min-h-[90vh]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full h-full flex items-center">


        <div className="text-left max-w-4xl flex flex-col items-start mt-8 relative z-10">
          <h1 className="text-5xl md:text-[3.5rem] lg:text-[4.5rem] font-extrabold tracking-tighter text-white mb-6 leading-[1.05] font-display">
            Website Design & Marketing Systems for <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600 inline-block mt-2 lg:mt-0">
              Local Service Businesses
            </span>
          </h1>
          
          <motion.div 
            className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 mb-12 w-full max-w-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          >
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium max-w-2xl">
              Local Service Businesses Trust Us To Transform Their Business With Marketing Systems, Website Design, Reputation Management And Automation.
            </p>
            <Link to="/contact" className="w-full md:w-auto shrink-0 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-black hover:to-black text-white px-10 py-5 rounded-md text-lg font-extrabold transition-all duration-300 flex items-center justify-center shadow-lg shadow-brand-500/30 border border-transparent hover:border-brand-500 hover:text-brand-500">
              Book A Call
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
