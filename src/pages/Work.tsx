import { motion } from 'motion/react';
import { CTA } from '../components/CTA';

export function Work() {
  const images = [
    '/our-work/work-img-1.png',
    '/our-work/work-img-2.png',
    '/our-work/work-img-3.png',
    '/our-work/work-img-4.png',
    '/our-work/work-img-5.png'
  ];

  return (
    <div className="pt-24 pb-12 min-h-screen flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12 mb-16 relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white font-display mb-6 leading-tight"
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600">Work</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-400 max-w-2xl mx-auto font-medium leading-relaxed"
        >
          Look at what we've done for other businesses
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="overflow-hidden shadow-2xl"
            >
              <img 
                src={img} 
                alt={`Our Work ${index + 1}`} 
                className="w-full h-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
      
      <CTA />
    </div>
  );
}
