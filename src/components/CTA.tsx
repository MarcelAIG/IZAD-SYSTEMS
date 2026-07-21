import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-32 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-10">
            Start Scaling.
          </h2>
          <button className="w-full sm:w-auto bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-white px-12 py-6 rounded-full text-xl font-bold transition-all flex items-center justify-center mx-auto group shadow-[0_0_50px_rgba(214,40,0,0.5)] border border-brand-400/50">
            Book Call
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
