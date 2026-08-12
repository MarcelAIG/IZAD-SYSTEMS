import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Globe, Plus, Minus, PhoneCall, Calendar } from 'lucide-react';

const systems = [
  {
    icon: <Globe className="w-5 h-5 text-brand-500" />,
    title: "Starter Package",
    description: "New modern website, reputation & review management system, mobile app access, website chat, and full mobile optimization."
  },
  {
    icon: <MessageSquare className="w-5 h-5 text-brand-500" />,
    title: "Professional Package",
    description: "Everything in Starter, plus automated review requests, Missed Call Text Back, dedicated service pages, monthly marketing, and Google Business optimization."
  },
  {
    icon: <Calendar className="w-5 h-5 text-brand-500" />,
    title: "Maximum Package",
    description: "Full automation with AI. Includes AI Voice Agent to answer calls, AI Website Chatbot to turn visitors into leads, and 3 Months of SEO Optimization."
  }
];

// 3D Animated Object for Website System (Layered glass planes isometric)
const MockupWebsite = () => (
  <div className="w-full h-full flex items-center justify-center relative">
    <motion.div 
      className="relative w-48 h-48 md:w-56 md:h-56"
      animate={{ y: [-10, 10, -10], rotateX: [55, 60, 55], rotateZ: [-40, -45, -40] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="absolute inset-0 bg-brand-500/20 backdrop-blur-xl border border-brand-400/40 rounded-3xl shadow-[0_20px_50px_rgba(14,165,233,0.4)] flex flex-col justify-between p-6" style={{ transform: 'translateZ(40px)' }}>
        <div className="w-1/2 h-2.5 bg-brand-300/80 rounded-full shadow-[0_0_10px_rgba(14,165,233,0.5)]"></div>
        <div className="w-3/4 h-2 bg-brand-400/40 rounded-full"></div>
      </div>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-lg border border-white/10 rounded-3xl" style={{ transform: 'translateZ(0px)' }}></div>
      <div className="absolute inset-0 bg-brand-600/30 rounded-3xl blur-2xl" style={{ transform: 'translateZ(-40px)' }}></div>
    </motion.div>
  </div>
);

// 3D Animated Object for Voice AI (Siri-like glowing blob with audio equalizer)
const MockupReceptionist = () => (
  <div className="w-full h-full flex items-center justify-center relative perspective-[1000px]">
    <motion.div 
      className="relative w-48 h-48 flex items-center justify-center"
      animate={{ y: [-10, 10, -10], rotateX: [50, 55, 50], rotateZ: [-15, -20, -15] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Siri-like AI Core Blob (Multi-colored shifting gradients) */}
      <div className="absolute inset-0 flex items-center justify-center mix-blend-screen pointer-events-none" style={{ transform: 'translateZ(-20px)' }}>
        <motion.div 
          animate={{ scale: [1, 1.4, 1], rotate: [0, 90, 360], borderRadius: ["50%", "40% 60%", "50%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-32 h-32 bg-brand-400/60 blur-[30px] rounded-full"
        ></motion.div>
        <motion.div 
          animate={{ scale: [1.3, 0.9, 1.3], rotate: [360, 180, 0], borderRadius: ["40% 60%", "50%", "60% 40%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-28 h-28 bg-blue-500/60 blur-[30px] rounded-full"
        ></motion.div>
        <motion.div 
          animate={{ scale: [0.9, 1.5, 0.9], rotate: [0, -180, -360] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute w-24 h-24 bg-cyan-300/50 blur-[30px] rounded-full"
        ></motion.div>
      </div>
      
      {/* Central Glass Core */}
      <div className="relative w-28 h-28 bg-black/40 backdrop-blur-xl rounded-full border border-white/20 shadow-[0_20px_40px_rgba(14,165,233,0.3)] flex items-center justify-center overflow-hidden z-10" style={{ transform: 'translateZ(40px)' }}>
        
        {/* Audio Visualizer Bars */}
        <div className="flex items-center gap-1.5 h-12">
          {[1, 2, 3, 4, 5].map((i) => (
            <motion.div
              key={i}
              animate={{ height: ['20%', '100%', '30%', '80%', '20%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
              className="w-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]"
              style={{ minHeight: '8px' }}
            ></motion.div>
          ))}
        </div>
      </div>
      
      {/* Outer Sound Rings emitting from the core */}
      <motion.div 
        animate={{ scale: [1, 2], opacity: [0.6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
        className="absolute inset-8 border border-brand-300/50 rounded-full z-0 pointer-events-none"
        style={{ transform: 'translateZ(0px)' }}
      ></motion.div>
      <motion.div 
        animate={{ scale: [1, 2], opacity: [0.6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }}
        className="absolute inset-8 border border-brand-300/50 rounded-full z-0 pointer-events-none"
        style={{ transform: 'translateZ(0px)' }}
      ></motion.div>

    </motion.div>
  </div>
);

// 3D Animated Object for Booking System (Floating 3D Grid)
const MockupBooking = () => (
  <div className="w-full h-full flex items-center justify-center relative perspective-[1000px]">
    <motion.div 
      className="relative w-48 h-48 md:w-56 md:h-56 grid grid-cols-3 grid-rows-3 gap-4"
      animate={{ y: [-10, 10, -10], rotateX: [50, 55, 50], rotateZ: [35, 40, 35] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {[...Array(9)].map((_, i) => (
        <motion.div 
          key={i}
          animate={{ z: [0, i === 4 ? 30 : (i % 2 === 0 ? 15 : 5), 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
          className={`rounded-2xl shadow-2xl border ${i === 4 ? 'bg-brand-500/40 border-brand-300 backdrop-blur-lg shadow-[0_10px_30px_rgba(14,165,233,0.5)]' : 'bg-black/60 border-white/10 backdrop-blur-md'}`}
        ></motion.div>
      ))}
      <div className="absolute -inset-10 bg-brand-500/20 rounded-full blur-3xl -z-10" style={{ transform: 'translateZ(-60px)' }}></div>
    </motion.div>
  </div>
);

export function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const getMockup = () => {
    switch(openIndex) {
      case 0: return <MockupWebsite />;
      case 1: return <MockupReceptionist />;
      case 2: return <MockupBooking />;
      default: return <MockupWebsite />;
    }
  }

  return (
    <section id="services" className="py-20 lg:py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col mb-12 max-w-3xl text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-3 font-display leading-[1.1]">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600">Services</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl font-medium">
            Click on a system to see exactly what you get.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Accordion */}
          <div className="space-y-3 w-full">
            {systems.map((system, index) => {
              const isOpen = openIndex === index;
              
              return (
                <div 
                  key={index} 
                  className={`border rounded-2xl overflow-hidden transition-colors duration-300 backdrop-blur-md ${isOpen ? 'bg-white/5 border-brand-500/30 shadow-[0_0_30px_rgba(14,165,233,0.1)]' : 'bg-black/20 border-white/10 hover:border-white/20'}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none cursor-pointer"
                  >
                    <div className="flex items-center gap-5">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-brand-500/20' : 'bg-white/5'}`}>
                        {system.icon}
                      </div>
                      <h3 className="text-xl md:text-2xl font-extrabold text-white font-display tracking-tight">{system.title}</h3>
                    </div>
                    <div className="shrink-0 ml-4">
                      {isOpen ? <Minus className="w-6 h-6 text-brand-500" /> : <Plus className="w-6 h-6 text-slate-500" />}
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
                        <div className="px-5 md:px-6 pb-6 pt-0 pl-[5.25rem]">
                          <p className="text-slate-400 text-base md:text-lg font-medium leading-relaxed">
                            {system.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Right Side: Dynamic UI Mockups */}
          <div className="hidden lg:block sticky top-32 w-full h-[450px]">
            <div className="w-full h-full relative">
              {/* Decorative glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-500/5 blur-[100px] rounded-full pointer-events-none"></div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={openIndex}
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full relative z-10"
                >
                  {getMockup()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
}
