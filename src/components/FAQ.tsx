import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Do I need to be technical to use these systems?",
    answer: "Not at all. We build the systems specifically so you don't have to touch a single line of code. We handle the integration, the testing, and the deployment. You just get the results delivered to your inbox, CRM, or phone."
  },
  {
    question: "How long does it take to get a system live?",
    answer: "Depending on the complexity, most of our systems are live within 7 to 14 days. We move fast because we've built these architectures dozens of times. We don't drag out retainers."
  },
  {
    question: "Will the AI say something wrong to my clients?",
    answer: "We tightly constrain our AI models. They are trained exclusively on your business data and are given strict 'guardrails' on what they can and cannot say. If a client asks a question it doesn't know, it automatically routes them to a human."
  },
  {
    question: "What happens if something breaks?",
    answer: "We offer ongoing maintenance packages to ensure 99.9% uptime. If an API changes or a system needs an update, we handle it before you even notice."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-4 font-display leading-[1.1]">
            Common <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600">Questions</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Everything you need to know before we start building.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`border rounded-2xl overflow-hidden transition-all duration-300 backdrop-blur-md ${isOpen ? 'bg-white/5 border-brand-500/30' : 'bg-black/20 border-white/10 hover:border-white/20'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none cursor-pointer"
                >
                  <span className="text-lg md:text-xl font-bold text-white font-display tracking-tight pr-8">
                    {faq.question}
                  </span>
                  <div className="shrink-0">
                    {isOpen ? (
                      <div className="w-8 h-8 rounded-full bg-brand-500/20 flex items-center justify-center">
                        <Minus className="w-5 h-5 text-brand-500" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                        <Plus className="w-5 h-5 text-slate-400" />
                      </div>
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
