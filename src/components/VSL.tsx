import { Play } from 'lucide-react';
import { motion } from 'motion/react';

export function VSL() {
  return (
    <section className="py-12 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
          className="relative w-full aspect-video rounded-3xl md:rounded-[2.5rem] overflow-hidden bg-black/40 border border-white/10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] group cursor-pointer"
        >
          {/* Subtle glow behind the player */}
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-900/20 to-brand-500/10 pointer-events-none"></div>
          
          {/* The Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-2xl group-hover:bg-brand-500 group-hover:scale-110 group-hover:border-brand-400 group-hover:shadow-[0_0_40px_rgba(14,165,233,0.4)] transition-all duration-500">
              <Play className="w-8 h-8 md:w-12 md:h-12 text-white ml-2 md:ml-3" fill="currentColor" />
            </div>
          </div>

          {/* Placeholder text at bottom left */}
          <div className="absolute bottom-6 left-8 md:bottom-10 md:left-12">
            <p className="text-white/50 font-medium tracking-wide text-sm md:text-base font-display">
              01:00 / WHY WE EXIST
            </p>
          </div>
          
        </motion.div>

      </div>
    </section>
  );
}
