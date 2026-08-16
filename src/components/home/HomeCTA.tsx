import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function HomeCTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background with multiple gradients for a premium feel */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(14,165,233,0.15),_transparent_60%)] pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.1),_transparent_40%)] pointer-events-none z-0"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[3rem] p-12 md:p-16 lg:p-20 shadow-2xl relative overflow-hidden group hover:border-brand-500/30 transition-all duration-500"
        >
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-brand-500/20 blur-[80px] rounded-full pointer-events-none transition-all duration-700 group-hover:bg-brand-500/30"></div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-display mb-8 tracking-tight leading-tight">
            Your Next Customer Might Already Be <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">Looking for You.</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Make it easier for them to find you, contact you and hear back from you.
          </p>

          <div className="flex flex-col items-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center bg-gradient-to-r from-brand-500 to-brand-600 hover:from-black hover:to-black text-white hover:text-brand-500 px-10 py-5 rounded-full text-xl font-extrabold transition-all duration-300 shadow-[0_0_40px_rgba(14,165,233,0.4)] border border-transparent hover:border-brand-500 group/btn mb-6"
            >
              Book a Quick Demo
              <ArrowRight className="ml-3 w-6 h-6 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <p className="text-sm text-slate-500 max-w-xs mx-auto">
              See how the system could work for your business. No complicated presentation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
