import { motion } from 'motion/react';
import { Monitor, Star, PhoneForwarded, MessageSquare, RefreshCw, Search } from 'lucide-react';

const systemFeatures = [
  {
    title: "Website Built to Convert",
    description: "Fast, mobile-friendly and designed around getting calls and inquiries.",
    icon: Monitor
  },
  {
    title: "Review System",
    description: "Collect more reviews and showcase your best ones automatically.",
    icon: Star
  },
  {
    title: "Missed Call Text Back",
    description: "Miss a call? Your customer gets an instant text while you're still busy.",
    icon: PhoneForwarded
  },
  {
    title: "Website Chat + SMS",
    description: "Turn website visitors into real text conversations with your business.",
    icon: MessageSquare
  },
  {
    title: "Follow-Up Automation",
    description: "Stay in touch with leads without manually chasing every conversation.",
    icon: RefreshCw
  },
  {
    title: "Local SEO",
    description: "Build a stronger presence when customers search for your services nearby.",
    icon: Search
  }
];

export function HomeSystem() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.05),_transparent_40%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-display mb-6 tracking-tight">
            A Website That Actually <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">Does Something</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Your website shouldn't just sit there looking good. It should help people find you, contact you, trust you, and become customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {systemFeatures.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-black/40 backdrop-blur-xl border border-white/10 hover:border-brand-500/50 rounded-2xl p-8 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400 mb-6 border border-brand-500/20 group-hover:scale-110 group-hover:bg-brand-500/20 transition-all duration-300">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
