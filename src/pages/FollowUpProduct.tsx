import { motion } from 'motion/react';
import { Zap, RefreshCw, UserCheck, Calendar } from 'lucide-react';
import { CTA } from '../components/CTA';

export function FollowUpProductPage() {
  const stats = [
    {
      value: "5m",
      label: "the critical window to follow up before conversion drops 400%."
    },
    {
      value: "7-12",
      label: "touchpoints required to close the average local lead."
    },
    {
      value: "100%",
      label: "automated follow-up sequence with zero manual work."
    }
  ];

  const features = [
    {
      title: "Speed-to-Lead Automation",
      description: "Text leads the exact second they submit a form or request a quote.",
      icon: Zap
    },
    {
      title: "Multi-channel Sequences",
      description: "Combine texts, emails, and voicemails into one seamless flow.",
      icon: RefreshCw
    },
    {
      title: "Conditional Logic",
      description: "Automatically stop sending follow-ups the moment they reply.",
      icon: UserCheck
    },
    {
      title: "Calendar Integration",
      description: "Push leads directly to book an appointment on your schedule.",
      icon: Calendar
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
            Never Let a Lead Slip Through the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">Cracks</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            Instantly and persistently follow up with every new lead automatically via text and email until they book.
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-6">Convert More Leads</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Beat your competitors by being the first to respond.</p>
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
