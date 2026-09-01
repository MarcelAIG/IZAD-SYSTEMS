import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BrandCheck } from './BrandCheck';

const crmTiers = [
  {
    name: "Starter Package",
    price: "197",
    features: [
      "New modern website",
      "Reputation & review management",
      "Mobile app access",
      "Website chat integration",
      "Full mobile optimization"
    ]
  },
  {
    name: "Professional Package",
    price: "297",
    popular: true,
    features: [
      "Everything in Starter",
      "Automatic review requests",
      "Missed Call Text Back",
      "Dedicated service pages",
      "Monthly marketing messages",
      "Google Business Profile updates"
    ]
  },
  {
    name: "Maximum Package",
    price: "497",
    features: [
      "Everything in Professional",
      "AI Voice Agent",
      "AI Website Chatbot",
      "3 Months SEO Optimization"
    ]
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 relative z-10 border-t border-slate-200 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-slate-900 mb-6 font-display">
            Here is <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600">What It Costs</span>
          </h2>
          <p className="text-slate-600 text-lg font-medium">
            No hidden fees. No bullshit. Just powerful systems that pay for themselves by closing the gaps in your revenue.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-10 text-center font-display">Monthly Software & Hosting</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {crmTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className={`relative bg-white border ${tier.popular ? 'border-brand-500/50 shadow-lg shadow-brand-500/10' : 'border-slate-200 shadow-sm'} p-8 rounded-2xl flex flex-col group hover:border-brand-300 transition-colors duration-500 w-full h-full`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-500 to-brand-600 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center shadow-md shadow-brand-500/30 whitespace-nowrap">
                    <Star className="w-3 h-3 mr-1 fill-current" /> Most Popular
                  </div>
                )}
                <div className="mb-6 mt-2">
                  <h4 className="text-xl font-bold text-slate-900 mb-2 font-display">{tier.name}</h4>
                </div>
                <div className="mb-8 flex items-baseline">
                  <span className="text-5xl font-extrabold text-slate-900 tracking-tighter">${tier.price}</span>
                  <span className="text-slate-500 font-bold text-lg ml-1">/month</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start">
                      <BrandCheck className="w-5 h-5 shrink-0 mr-3 mt-0.5" />
                      <span className="text-slate-700 font-bold text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`w-full py-3 rounded-md text-center font-bold text-base transition-all mt-auto ${tier.popular ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-md' : 'bg-white text-slate-900 hover:bg-slate-50 border border-slate-200 shadow-sm'}`}>
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
