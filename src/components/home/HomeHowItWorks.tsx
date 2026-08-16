import { motion } from 'motion/react';

const steps = [
  {
    num: "1",
    title: "Quick Demo",
    desc: "We learn about your business and show you exactly how the system would work for you."
  },
  {
    num: "2",
    title: "We Build It",
    desc: "Send us your business information and we handle the website, setup and automations."
  },
  {
    num: "3",
    title: "Go Live",
    desc: "We connect everything, walk you through it and launch your system."
  }
];

export function HomeHowItWorks() {
  return (
    <section className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white font-display tracking-tight">
            Getting Started Is Simple
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent z-0"></div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-black border-4 border-brand-500 flex items-center justify-center text-4xl font-extrabold text-white mb-6 shadow-[0_0_30px_rgba(14,165,233,0.3)]">
                {step.num}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 text-lg leading-relaxed max-w-sm">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
