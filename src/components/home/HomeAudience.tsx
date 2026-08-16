import { motion } from 'motion/react';

const industries = [
  "Plumbers",
  "Roofers",
  "Electricians",
  "HVAC",
  "Landscapers",
  "Painters",
  "Handymen",
  "Cleaning Companies",
  "Remodelers",
  "Other Local Services"
];

export function HomeAudience() {
  return (
    <section className="py-24 relative overflow-hidden bg-black/40 border-y border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(14,165,233,0.05),_transparent_50%)] pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-6 tracking-tight">
            Built for Local Service Businesses
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white/5 border border-white/10 hover:border-brand-500/50 hover:bg-white/10 px-6 py-3 rounded-xl text-lg font-medium text-slate-300 transition-all duration-300 cursor-default shadow-lg shadow-black/20"
            >
              {industry}
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-xl md:text-2xl text-slate-400 font-medium max-w-3xl mx-auto"
        >
          If your business depends on calls, quotes and local customers, <strong className="text-white">the system is built for you.</strong>
        </motion.p>
      </div>
    </section>
  );
}
