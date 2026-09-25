import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CTA() {
  return (
    <section className="py-32 relative z-10 overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className="text-center bg-black/20 backdrop-blur-xl border border-white/10 p-12 md:p-16 lg:p-24 rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tighter text-white mb-8 font-display sm:whitespace-nowrap">
              Want more calls and booked jobs?
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
              Let’s look at your business and show you how a better website, stronger reviews, and faster follow-up can help you win more customers.
            </p>
            <a href="https://cal.com/marcel-izadpanah-fa6ual/demo-call" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-gradient-to-r from-brand-500 to-brand-600 hover:from-black hover:to-black text-white hover:text-brand-500 px-14 py-6 rounded-md text-xl font-extrabold transition-all duration-300 flex items-center justify-center mx-auto group shadow-lg shadow-brand-500/30 border border-transparent hover:border-brand-500">
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
