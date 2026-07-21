import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const crmTiers = [
  {
    name: "Starter",
    price: "297",
    features: [
      "Calendar Integration",
      "FAQ Automation"
    ]
  },
  {
    name: "Growth",
    price: "497",
    popular: true,
    features: [
      "Customized CRM",
      "Calendar Integration"
    ]
  },
  {
    name: "Global",
    price: "697",
    features: [
      "Fully Customized Plan",
      "Additional Language"
    ]
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-32 relative z-10 border-t border-white/[0.05] bg-black/40 backdrop-blur-3xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Booking & CRM</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {crmTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white/[0.02] backdrop-blur-3xl border ${tier.popular ? 'border-brand-500/50 shadow-[0_0_50px_rgba(214,40,0,0.15)]' : 'border-white/[0.06] shadow-[inset_0_0_40px_rgba(255,255,255,0.015)]'} p-10 rounded-[2.5rem] flex flex-col`}
              >
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-white mb-2">{tier.name}</h4>
                </div>
                <div className="mb-10">
                  <span className="text-6xl font-extrabold text-white">${tier.price}</span>
                  <span className="text-zinc-500 font-bold text-lg">/mo</span>
                </div>
                <ul className="space-y-6 mb-12 flex-1">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-brand-500/20 flex items-center justify-center shrink-0 mr-4 border border-brand-500/30">
                        <Check className="w-3 h-3 text-brand-400" />
                      </div>
                      <span className="text-zinc-300 font-bold text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-brand-500/20 via-brand-900/20 to-transparent border border-brand-500/30 rounded-[3.2rem] p-1 overflow-hidden relative shadow-[0_0_60px_rgba(214,40,0,0.1)]"
        >
          <div className="absolute inset-0 bg-white/[0.01] backdrop-blur-3xl"></div>
          <div className="relative p-10 md:p-16 lg:flex items-center justify-between z-10 bg-black/70 rounded-[3rem]">
            <div className="lg:w-2/3 mb-8 lg:mb-0">
              <h3 className="text-3xl font-extrabold text-white mb-8">Web Infrastructure</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center font-bold text-zinc-300 text-lg">
                  <div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center shrink-0 mr-4 border border-brand-500/30">
                    <Check className="w-3.5 h-3.5 text-brand-400" />
                  </div>
                  Website
                </div>
                <div className="flex items-center font-bold text-zinc-300 text-lg">
                  <div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center shrink-0 mr-4 border border-brand-500/30">
                    <Check className="w-3.5 h-3.5 text-brand-400" />
                  </div>
                  Missed Call Text Back
                </div>
                <div className="flex items-center font-bold text-zinc-300 text-lg">
                  <div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center shrink-0 mr-4 border border-brand-500/30">
                    <Check className="w-3.5 h-3.5 text-brand-400" />
                  </div>
                  Review Protection
                </div>
                <div className="flex items-center font-bold text-zinc-300 text-lg">
                  <div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center shrink-0 mr-4 border border-brand-500/30">
                    <Check className="w-3.5 h-3.5 text-brand-400" />
                  </div>
                  Mobile App
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 flex flex-col items-start lg:items-end lg:pl-16 lg:border-l border-white/[0.08]">
              <div className="mb-2">
                <span className="text-6xl font-extrabold text-white">$297</span>
                <span className="text-zinc-500 font-bold text-xl">/mo</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
