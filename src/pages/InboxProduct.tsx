import { motion } from 'motion/react';
import { Inbox, MessageSquare, Smartphone, Users } from 'lucide-react';
import { BrandCheck } from '../components/BrandCheck';
import { CTA } from '../components/CTA';

export function InboxProductPage() {
  const stats = [
    {
      value: "89%",
      label: "of customers prefer messaging over calling."
    },
    {
      value: "3x",
      label: "faster response times when using a unified inbox."
    },
    {
      value: "0",
      label: "lost leads from scattered communications."
    }
  ];

  const features = [
    {
      title: "Unified Dashboard",
      description: "See all your texts, emails, and social messages in one place.",
      icon: Inbox
    },
    {
      title: "Facebook & IG Integration",
      description: "Reply to social media direct messages without opening the apps.",
      icon: Smartphone
    },
    {
      title: "SMS & Email Sync",
      description: "Seamlessly transition between texting and emailing a client.",
      icon: MessageSquare
    },
    {
      title: "Team Collaboration",
      description: "Assign conversations to team members so nothing is missed.",
      icon: Users
    }
  ];

  return (
    <div className="pt-32 pb-12 min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center"
        >

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white font-display mb-6 leading-tight max-w-4xl mx-auto">
            Unify Your Customer <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">Communications</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            Stop jumping between texts, emails, and social media. Get all your messages in one centralized inbox.
          </p>
          <a href="https://cal.com/marcel-izadpanah-fa6ual/demo-call" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-gradient-to-r from-brand-500 to-brand-600 hover:from-black hover:to-black text-white px-10 py-5 rounded-md text-lg font-extrabold transition-all duration-300 flex items-center justify-center shadow-lg shadow-brand-500/30 border border-transparent hover:border-brand-500 group">
            Book A Call
          </a>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-black/40 backdrop-blur-2xl border border-white/5 rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl relative overflow-hidden group hover:border-brand-500/30 transition-colors"
            >
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-brand-500/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-brand-500/20 transition-colors"></div>
              <div className="text-6xl lg:text-7xl font-extrabold text-white mb-4 font-display">
                {stat.value}
              </div>
              <p className="text-slate-400 text-lg leading-relaxed font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-6">Total Control</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Everything you need to stay on top of your conversations.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-500/20 flex items-center justify-center text-brand-400 mb-6 border border-brand-500/30">
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <CTA />
    </div>
  );
}
