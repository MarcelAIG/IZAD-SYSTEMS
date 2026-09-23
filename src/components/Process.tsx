import { motion } from 'motion/react';

export function Process() {
  const steps = [
    {
      number: "1",
      title: "Quick Call",
      description: "Tell us about your business and what you want to improve. We’ll show you how the website and follow-up system would work for you and answer your questions."
    },
    {
      number: "2",
      title: "We Build Your System",
      description: "Send us your services, photos, and business details. We’ll build everything and give you a first version to review."
    },
    {
      number: "3",
      title: "Launch & Walkthrough",
      description: "We’ll test and launch your system together, then show you how to handle new leads, messages, and reviews."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-6">
          What working with us looks like
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative max-w-5xl mx-auto">
        {/* Connecting Line (desktop only) */}
        <div className="hidden md:block absolute top-[40px] left-[16%] right-[16%] h-[1px] bg-[#1e293b] z-0"></div>

        {steps.map((step, index) => (
          <div
            key={index}
            className="relative z-10 flex flex-col items-center text-center"
          >
            {/* Number Circle */}
            <div className="w-20 h-20 rounded-full bg-black border-[3px] border-[#0ea5e9] flex items-center justify-center text-3xl font-bold text-white mb-8 shadow-[0_0_20px_rgba(14,165,233,0.3)] z-10 relative">
              {step.number}
            </div>

            {/* Content */}
            <div className="px-4">
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-[#94a3b8] text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
