import { motion } from 'motion/react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CTA } from '../components/CTA';

const tiers = [
  {
    name: "Core System",
    description: "Essential automation for growing businesses looking to save time.",
    price: "Custom",
    features: [
      "Custom High-Converting Website",
      "Basic SEO Optimization",
      "Contact Form Automations",
      "Mobile Responsive Design",
      "Standard Support"
    ]
  },
  {
    name: "Growth System",
    description: "Our most popular package. Full AI integration for maximum leverage.",
    price: "Custom",
    popular: true,
    features: [
      "Everything in Core System",
      "Automated Booking System",
      "Calendar Integration",
      "SMS & Email Reminders",
      "Voice AI Receptionist (Basic)",
      "Priority Support"
    ]
  },
  {
    name: "Scale System",
    description: "Enterprise-grade automation tailored to complex business logic.",
    price: "Custom",
    features: [
      "Everything in Growth System",
      "Advanced Voice AI Receptionist",
      "Custom Workflow Automations",
      "CRM & Payment Integrations",
      "Dedicated Account Manager",
      "24/7 Premium Support"
    ]
  }
];

export function PricingPage() {
  return (
    <div className="pt-24 pb-12 min-h-screen flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12 mb-16 relative z-10 w-full">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white font-display mb-6 leading-tight"
        >
          Simple <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600">Pricing</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed"
        >
          Stop paying for retainers with no ROI. We build real systems that pay for themselves.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (index * 0.1) }}
              className={`relative flex flex-col p-6 lg:p-8 rounded-3xl backdrop-blur-xl border ${
                tier.popular 
                  ? 'bg-brand-900/20 border-brand-500/50 shadow-[0_0_40px_rgba(14,165,233,0.15)]' 
                  : 'bg-black/40 border-white/10 hover:border-white/20'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-500 to-brand-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg shadow-brand-500/30">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl lg:text-2xl font-bold text-white font-display mb-2">{tier.name}</h3>
                <p className="text-slate-400 text-sm lg:text-base min-h-[3rem]">{tier.description}</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">{tier.price}</span>
                </div>
                <p className="text-brand-400 text-xs lg:text-sm font-medium mt-2">Tailored to your needs</p>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 lg:w-5 lg:h-5 mt-0.5 shrink-0 ${tier.popular ? 'text-brand-400' : 'text-slate-500'}`} />
                    <span className="text-slate-300 text-sm lg:text-base font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/contact" 
                className={`w-full py-3 lg:py-4 rounded-xl font-bold flex items-center justify-center transition-all duration-300 text-sm lg:text-base ${
                  tier.popular
                    ? 'bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-800 text-white shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40'
                    : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'
                }`}
              >
                Get a Quote
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      
      <CTA />
    </div>
  );
}
