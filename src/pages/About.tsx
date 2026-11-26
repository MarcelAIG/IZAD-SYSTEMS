import { Globe, Mic, Star } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="pt-40 pb-12 min-h-screen flex flex-col bg-[#050505]">
      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        
        {/* Intro Section: Text Led */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tighter text-white font-display mb-8 leading-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600">Us</span>
          </h1>
          
          <div className="space-y-6">
            <p className="text-2xl text-white font-semibold leading-snug">
              We build high-converting websites, 24/7 AI voice agents, and reputation systems for local service businesses.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed font-medium">
              We make it easy for customers to find your business online, get an immediate human-like answer every time they call, and see your strongest 5-star reviews.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed font-medium">
              We start by learning how your business operates. Then we custom-build everything around your needs and walk you through it step by step. Our goal is to help you look professional, never miss a call, and win more jobs.
            </p>
          </div>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* Card 1 */}
          <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl flex flex-col items-start hover:border-brand-500/30 transition-colors shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-brand-500" />
            </div>
            <h3 className="text-white text-lg font-bold mb-3">Functional Website</h3>
            <p className="text-slate-400 text-sm font-medium leading-relaxed">
              Professional, mobile-ready websites built with SEO and social integrations to turn visitors into booked jobs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl flex flex-col items-start hover:border-brand-500/30 transition-colors shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-6">
              <Mic className="w-6 h-6 text-brand-500" />
            </div>
            <h3 className="text-white text-lg font-bold mb-3">AI Voice Agent</h3>
            <p className="text-slate-400 text-sm font-medium leading-relaxed">
              24/7 AI voice receptionist that answers calls naturally, qualifies leads, and books appointments automatically.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0a0a0a] border border-white/5 p-8 rounded-2xl flex flex-col items-start hover:border-brand-500/30 transition-colors shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center mb-6">
              <Star className="w-6 h-6 text-brand-500" />
            </div>
            <h3 className="text-white text-lg font-bold mb-3">Reputation System</h3>
            <p className="text-slate-400 text-sm font-medium leading-relaxed">
              5-star review funnel and automated review requests to boost your Google ranking and local trust.
            </p>
          </div>

        </div>

        {/* Wide CTA Section */}
        <div className="bg-[#0a0a0a] border border-brand-500/20 rounded-3xl p-10 md:p-14 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-[0_0_40px_rgba(14,165,233,0.1)] mb-12">
          <div className="text-left max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white font-display mb-4">
              Want more calls and booked jobs?
            </h2>
            <p className="text-lg text-slate-400 font-medium leading-relaxed">
              Let’s look at your business and show you how a high-converting website, a 24/7 AI voice agent, and stronger 5-star reviews can help you win more customers.
            </p>
          </div>
          <div className="flex-shrink-0 w-full lg:w-auto">
            <a 
              href="https://cal.com/marcel-izadpanah-fa6ual/demo-call" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full lg:w-auto bg-gradient-to-r from-brand-500 to-brand-600 hover:from-black hover:to-black text-white hover:text-brand-500 px-10 py-5 rounded-md text-lg font-extrabold transition-all duration-300 flex items-center justify-center border border-transparent hover:border-brand-500 shadow-lg shadow-brand-500/30"
            >
              Book a Call
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
