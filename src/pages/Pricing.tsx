import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Sparkles } from 'lucide-react';
import { BrandCheck } from '../components/BrandCheck';
import { Link } from 'react-router-dom';
import { CTA } from '../components/CTA';

export function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [annualPhase, setAnnualPhase] = useState(0);

  useEffect(() => {
    if (isAnnual) {
      setAnnualPhase(0);
      const t1 = setTimeout(() => {
        setAnnualPhase(1); // Strikethrough and scale down
        const t2 = setTimeout(() => {
          setAnnualPhase(2); // Slide in discount
        }, 100);
        return () => clearTimeout(t2);
      }, 1000);
      return () => clearTimeout(t1);
    } else {
      setAnnualPhase(0);
    }
  }, [isAnnual]);

  const tiers = [
    {
      name: "Starter",
      monthlyPrice: "$197",
      annualOriginal: "$2,364",
      annualDiscounted: "$1,773",
      features: [
        "Functional Website — 10–20 Pages",
        "Automated Lead Follow-Up",
        "5-Star Review Funnel",
        "On-Site SEO"
      ],
      popular: false,
      buttonStyles: "bg-transparent border-2 border-brand-500 text-white hover:bg-brand-500 hover:text-white transition-none",
    },
    {
      name: "Advanced",
      monthlyPrice: "$297",
      annualOriginal: "$3,564",
      annualDiscounted: "$2,673",
      features: [
        "Functional Website — 10–20 Pages",
        "Automated Lead Follow-Up",
        "Missed Call Text Back",
        "5-Star Review Funnel",
        "One-Click Marketing Campaigns",
        "On-Site SEO"
      ],
      popular: true,
      buttonStyles: "bg-brand-500 border-2 border-brand-500 text-white hover:bg-white hover:text-brand-500 hover:border-white transition-none",
    }
  ];

  return (
    <div className="pt-24 pb-12 min-h-screen flex flex-col bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12 mb-12 relative z-10 w-full">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-10 font-display">
          Our pricing
        </h1>
        
        {/* Toggle */}
        <div className="flex justify-center items-center gap-4 mb-4">
          <span className={`text-lg font-medium transition-colors ${!isAnnual ? 'text-white' : 'text-slate-500'}`}>Monthly</span>
          <button 
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-16 h-8 bg-[#222] border border-[#333] rounded-full p-1 relative flex items-center shadow-inner"
          >
            <motion.div 
              layout
              className="w-6 h-6 bg-brand-500 rounded-full shadow-[0_0_10px_rgba(14,165,233,0.5)]"
              animate={{ x: isAnnual ? 32 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </button>
          <span className={`text-lg font-medium transition-colors ${isAnnual ? 'text-white' : 'text-slate-500'}`}>Annually</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {tiers.map((tier, index) => (
            <div 
              key={index}
              className={`relative flex flex-col p-8 lg:p-10 rounded-2xl border transition-none ${
                tier.popular 
                  ? 'bg-[#111] border-brand-500 shadow-[0_0_30px_rgba(14,165,233,0.25)]' 
                  : 'bg-[#111] border-brand-500/20'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-xs font-bold px-5 py-1.5 rounded-md uppercase tracking-widest shadow-[0_0_15px_rgba(14,165,233,0.4)]">
                  MOST POPULAR
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-white mb-2 font-display">{tier.name}</h3>
              </div>
              
              <div className="mb-10 min-h-[140px] flex flex-col justify-center">
                {!isAnnual ? (
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-extrabold text-white tracking-tight">{tier.monthlyPrice}</span>
                    <span className="text-slate-400 font-bold text-xl">/mo</span>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2">
                    <motion.div 
                      animate={{ 
                        scale: annualPhase > 0 ? 0.65 : 1,
                        opacity: annualPhase > 0 ? 0.5 : 1,
                        originX: 0,
                        originY: 0.5
                      }}
                      transition={{ duration: 0.3 }}
                      className="relative inline-flex items-baseline gap-2 w-fit"
                    >
                      <span className="text-6xl font-extrabold tracking-tight text-white">{tier.annualOriginal}</span>
                      <span className="font-bold text-xl text-slate-400">/yr</span>
                      
                      {/* Red Strikethrough Line */}
                      {annualPhase > 0 && (
                        <motion.div 
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="absolute left-0 top-1/2 w-full h-2 bg-red-600 origin-left -translate-y-1/2 rounded-full"
                        />
                      )}
                    </motion.div>
                    
                    <AnimatePresence>
                      {annualPhase === 2 && (
                        <motion.div 
                          initial={{ opacity: 0, y: -20, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: 'auto' }}
                          className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2"
                        >
                          <div className="flex items-baseline gap-1">
                            <span className="text-5xl font-extrabold text-white tracking-tight">{tier.annualDiscounted}</span>
                            <span className="text-slate-400 font-bold text-lg">/yr</span>
                          </div>
                          <span className="animate-pulse bg-red-500/10 text-red-500 font-bold px-3 py-1.5 rounded-md text-sm border border-red-500/30 whitespace-nowrap self-start sm:self-auto">
                            3 months FREE
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <BrandCheck className="w-6 h-6 mt-0.5 shrink-0 text-brand-500" />
                    <span className="text-slate-200 text-lg font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a href="https://cal.com/marcel-izadpanah-fa6ual/demo-call" target="_blank" rel="noopener noreferrer" 
                className={`w-full py-4 rounded-md font-extrabold flex items-center justify-center text-lg uppercase tracking-wide ${tier.buttonStyles}`}
              >
                BOOK A CALL
              </a>
            </div>
          ))}
        </div>
      </div>
      
      <CTA />
    </div>
  );
}
