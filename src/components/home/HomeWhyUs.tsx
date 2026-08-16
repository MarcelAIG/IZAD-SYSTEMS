import { motion } from 'motion/react';
import { ThumbsUp, Link as LinkIcon, Building, FileX, Bot, LayoutDashboard } from 'lucide-react';

const reasons = [
  {
    title: "Built for Simplicity",
    description: "You don't need to become a marketing expert to use it.",
    icon: ThumbsUp
  },
  {
    title: "Everything Connected",
    description: "Website, messages, reviews and follow-ups work together.",
    icon: LinkIcon
  },
  {
    title: "Built for Small Businesses",
    description: "No massive enterprise setup or unnecessary complexity.",
    icon: Building
  },
  {
    title: "No Long Contracts",
    description: "Stay because the system makes sense for your business.",
    icon: FileX
  },
  {
    title: "Automation Where It Matters",
    description: "Remove repetitive work without making the customer experience robotic.",
    icon: Bot
  },
  {
    title: "One Place to Manage It",
    description: "See conversations, leads and customer activity without jumping between tools.",
    icon: LayoutDashboard
  }
];

export function HomeWhyUs() {
  return (
    <section className="py-24 relative overflow-hidden bg-black/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-display mb-6 tracking-tight max-w-4xl mx-auto">
            Less Software. Less Manual Work. <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">More Done.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 hover:bg-white/10 rounded-2xl p-8 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-500/20 flex items-center justify-center text-brand-400 mr-4 border border-brand-500/30">
                  <reason.icon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">{reason.title}</h3>
              </div>
              <p className="text-slate-400 text-lg leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
