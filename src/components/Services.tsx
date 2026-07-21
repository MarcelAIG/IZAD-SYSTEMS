import { motion } from 'motion/react';
import { CalendarCheck, Megaphone, MessageSquare, Globe } from 'lucide-react';

const systems = [
  {
    icon: <CalendarCheck className="w-8 h-8 text-brand-400" />,
    title: "Booking & CRM"
  },
  {
    icon: <Megaphone className="w-8 h-8 text-brand-400" />,
    title: "Lead Generation"
  },
  {
    icon: <MessageSquare className="w-8 h-8 text-brand-400" />,
    title: "Intelligent Voice"
  },
  {
    icon: <Globe className="w-8 h-8 text-brand-400" />,
    title: "Web Infrastructure"
  }
];

export function Services() {
  return (
    <section id="services" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">Systems</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {systems.map((system, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/[0.02] backdrop-blur-3xl border border-white/[0.06] p-8 rounded-3xl hover:bg-white/[0.04] transition-all duration-300 group shadow-[inset_0_0_60px_rgba(255,255,255,0.015)]"
            >
              <div className="w-16 h-16 bg-brand-500/10 rounded-2xl flex items-center justify-center mb-6 border border-brand-500/20 backdrop-blur-xl shadow-[0_0_30px_rgba(214,40,0,0.15)] group-hover:bg-brand-500/20 transition-colors">
                {system.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{system.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
