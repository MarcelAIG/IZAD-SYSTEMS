import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <section className="py-16 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-10 md:p-16 lg:p-20 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-500/10 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 space-y-8 text-xl md:text-2xl text-slate-300 font-medium leading-relaxed">
            <p>
              We’re a team that builds websites and customer follow-up systems for local service businesses.
            </p>
            <p>
              We make it easy for customers to see what you do, request service, and get a quick response. Our work brings together professional website design, instant lead replies, missed-call texts, and review requests.
            </p>
            <p>
              We start by learning how your business works. Then we build the system around your needs and show you how to use it. Our goal is to help you look professional, respond faster, and win more jobs.
            </p>
          </div>

        </div>
        
      </div>
    </section>
  );
}
