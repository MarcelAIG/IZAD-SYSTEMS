import { motion } from 'motion/react';
import { Hexagon, Triangle, Circle, Square, Diamond, Star } from 'lucide-react';

const logos = [
  { icon: <Hexagon className="w-8 h-8" />, name: "ACME Corp" },
  { icon: <Triangle className="w-8 h-8" />, name: "GlobalTech" },
  { icon: <Circle className="w-8 h-8" />, name: "Nexus" },
  { icon: <Square className="w-8 h-8" />, name: "Apex Solutions" },
  { icon: <Diamond className="w-8 h-8" />, name: "Vanguard" },
  { icon: <Star className="w-8 h-8" />, name: "Stellar" },
];

export function TrustedBy() {
  return (
    <section className="py-6 md:py-8 overflow-hidden border-y border-white/5 bg-black/20 mt-6 mb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 md:mb-6 text-center">
        <p className="text-slate-500 font-medium tracking-widest uppercase text-xs md:text-sm font-display">
          Trusted by fast-growing companies
        </p>
      </div>

      <div className="relative flex overflow-x-hidden">
        {/* Left fade gradient */}
        <div className="absolute top-0 left-0 w-24 md:w-32 h-full bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>

        <motion.div
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          className="flex whitespace-nowrap gap-12 md:gap-20 px-8 items-center"
        >
          {/* Double the logos to create the infinite scroll effect */}
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex items-center gap-2 md:gap-3 text-slate-400 opacity-50 grayscale hover:opacity-100 hover:text-brand-400 hover:grayscale-0 transition-all duration-300 cursor-pointer">
              {/* Make icons slightly smaller */}
              <div className="scale-75 md:scale-90 origin-center flex items-center justify-center">
                {logo.icon}
              </div>
              <span className="text-lg md:text-xl font-bold font-display tracking-tighter">{logo.name}</span>
            </div>
          ))}
        </motion.div>

        {/* Right fade gradient */}
        <div className="absolute top-0 right-0 w-24 md:w-32 h-full bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}
