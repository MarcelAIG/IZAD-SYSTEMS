import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, MessageSquare, Zap, Star, Smartphone } from 'lucide-react';
import { CTA } from '../components/CTA';

export function WebsiteProductPage() {
  const stats = [
    {
      value: "75%",
      label: "of customers judge a business by its website."
    },
    {
      value: "78%",
      label: "of small businesses say their website helps them grow."
    },
    {
      value: "67%",
      label: "of customers are more likely to trust a business with a smooth online experience."
    }
  ];

  const features = [
    {
      title: "Get Found",
      description: "Built with local SEO fundamentals.",
      icon: Search
    },
    {
      title: "Get Contacted",
      description: "Calls, quote forms and website chat.",
      icon: MessageSquare
    },
    {
      title: "Respond Faster",
      description: "Automatic SMS follow-ups when leads reach out.",
      icon: Zap
    },
    {
      title: "Build Trust",
      description: "Showcase your best reviews where customers can see them.",
      icon: Star
    },
    {
      title: "Works Everywhere",
      description: "Fast and fully optimized for mobile.",
      icon: Smartphone
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
          <span className="bg-brand-500/20 text-brand-400 font-bold tracking-widest uppercase text-xs px-4 py-1.5 rounded-full mb-6 border border-brand-500/30">
            Functional Website
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-white font-display mb-6 leading-tight max-w-4xl mx-auto">
            More Than Just a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">Website</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
            Your website is built to turn visitors into real customer conversations.
          </p>
          <Link to="/contact" className="w-full sm:w-auto bg-gradient-to-r from-brand-500 to-brand-600 hover:from-black hover:to-black text-white px-10 py-5 rounded-md text-lg font-extrabold transition-all duration-300 flex items-center justify-center shadow-lg shadow-brand-500/30 border border-transparent hover:border-brand-500 group">
            Book A Call
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-6">Built for Growth</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Everything you need to turn clicks into clients.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
