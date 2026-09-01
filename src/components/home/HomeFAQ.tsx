import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    question: "How long does setup take?",
    answer: "Most systems can be prepared within roughly 7–14 days once we have everything we need from you."
  },
  {
    question: "Do I need a new website?",
    answer: "Not necessarily. We'll look at what you already have and recommend the simplest option."
  },
  {
    question: "Can I keep my current phone number?",
    answer: "That depends on your setup, but in many cases we can integrate with your existing business process."
  },
  {
    question: "Do I have to understand automation?",
    answer: "No. That's the point. We build the system and show you the few things you actually need to use."
  },
  {
    question: "Can I cancel?",
    answer: "Yes. Our monthly services don't require you to stay locked into a long-term contract."
  }
];

export function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="border-t border-white/10">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="border-b border-white/10"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-8 flex items-center justify-between text-left focus:outline-none group"
              >
                <span className="text-xl md:text-2xl font-bold text-white group-hover:text-brand-400 transition-colors">
                  {faq.question}
                </span>
                <div className={`shrink-0 ml-6 transition-transform duration-500 ease-in-out ${openIndex === i ? 'rotate-45 text-brand-400' : 'text-slate-400 group-hover:text-white'}`}>
                  <Plus className="w-8 h-8" strokeWidth={1.5} />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 pr-12 text-slate-400 text-lg md:text-xl leading-relaxed font-medium">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
