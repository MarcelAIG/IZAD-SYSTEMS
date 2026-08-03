import { motion } from 'motion/react';
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const crmTiers = [
  {
    name: "The Basics",
    price: "297",
    features: [
      "Full Calendar Setup",
      "Basic Automated Texting"
    ]
  },
  {
    name: "The Growth System",
    price: "497",
    popular: true,
    features: [
      "Custom AI CRM Built For You",
      "Calendar Integration",
      "Priority VIP Support"
    ]
  },
  {
    name: "The Global Empire",
    price: "697",
    features: [
      "Fully Custom Everything",
      "Multiple Languages",
      "Dedicated Account Manager"
    ]
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 relative z-10 border-t border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter text-slate-900 mb-6 font-display">
            Here is <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600">What It Costs</span>
          </h2>
          <p className="text-slate-600 text-xl font-medium">
            No hidden fees. No bullshit. Just powerful systems that pay for themselves by closing the gaps in your revenue.
          </p>
        </div>

        <div className="mb-32">
          <h3 className="text-3xl font-bold text-slate-900 mb-12 text-center font-display">Monthly Software & Hosting</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {crmTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className={`relative bg-white border ${tier.popular ? 'border-brand-500/50 shadow-xl shadow-brand-500/10' : 'border-slate-200 shadow-sm'} p-10 lg:p-12 rounded-[2.5rem] flex flex-col group hover:border-brand-300 transition-colors duration-500`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-500 to-brand-600 text-white px-4 py-1.5 rounded-full text-sm font-bold flex items-center shadow-lg shadow-brand-500/30 whitespace-nowrap">
                    <Star className="w-4 h-4 mr-1.5 fill-current" /> Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-slate-900 mb-2 font-display">{tier.name}</h4>
                </div>
                <div className="mb-10 flex items-baseline">
                  <span className="text-6xl font-extrabold text-slate-900 tracking-tighter">${tier.price}</span>
                  <span className="text-slate-500 font-bold text-lg ml-2">/mo</span>
                </div>
                <ul className="space-y-6 mb-12 flex-1">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-brand-50 flex items-center justify-center shrink-0 mr-4 border border-brand-100 group-hover:bg-brand-100 transition-colors duration-300">
                        <Check className="w-3.5 h-3.5 text-brand-500" />
                      </div>
                      <span className="text-slate-700 font-bold text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`w-full py-4 rounded-full text-center font-bold text-lg transition-all ${tier.popular ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-md' : 'bg-white text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-sm'}`}>
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
