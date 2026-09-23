import { motion } from 'motion/react';

import { Link } from 'react-router-dom';
import { TrustedBy } from './TrustedBy';

export function Hero() {
  return (
    <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden flex flex-col justify-center min-h-[90vh]">
      
      {/* Background Graphic */}
      <div className="absolute top-[49%] -translate-y-1/2 right-0 translate-x-[53%] lg:translate-x-[36%] w-[800px] lg:w-[1200px] pointer-events-none z-0 hidden md:block opacity-30">
        <img 
          src="/hero-graphic.png" 
          alt="Hero decorative graphic" 
          className="w-full h-auto object-contain brightness-50 contrast-125"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full h-full flex items-center">


        <div className="text-left max-w-4xl flex flex-col items-start mt-8 relative z-10">
          <h1 className="text-5xl md:text-[3.5rem] lg:text-[4.5rem] font-extrabold tracking-tighter text-white mb-6 leading-[1.05] font-display">
            Website Design & Marketing Systems for <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600 inline-block mt-2 lg:mt-0">
              Local Service Businesses
            </span>
          </h1>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 mb-12 w-full max-w-5xl">
            <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium max-w-2xl">
              Local Service Businesses Trust Us To Transform Their Business With Marketing Systems, Website Design, Reputation Management And Automation.
            </p>
            <a href="https://cal.com/marcel-izadpanah-fa6ual/demo-call" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto shrink-0 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-black hover:to-black text-white px-10 py-5 rounded-md text-lg font-extrabold transition-all duration-300 flex items-center justify-center shadow-lg shadow-brand-500/30 border border-transparent hover:border-brand-500 hover:text-brand-500">
              Book A Call
            </a>
          </div>
          
          <div className="w-full">
            <TrustedBy />
          </div>
        </div>
      </div>
    </section>
  );
}
