import { motion } from 'motion/react';
import { Zap, RefreshCw, UserCheck, Calendar } from 'lucide-react';
import { CTA } from '../components/CTA';
import { Process } from '../components/Process';

export function FollowUpProductPage() {
  const stats = [
    {
      value: "70%",
      label: "of people reply within 24 hours to SMS follow-ups"
    },
    {
      value: "72%",
      label: "of contractors boost sales with automated follow-ups"
    },
    {
      value: "97%",
      label: "of people read SMS messages within 24 hours."
    }
  ];


  return (
    <div className="pt-32 pb-12 min-h-screen flex flex-col">
      {/* Hero & Demo Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-32 text-center">
        <div className="flex flex-col items-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold tracking-tighter text-white font-display mb-6 leading-tight max-w-none mx-auto xl:whitespace-nowrap">
            Automated SMS Lead Follow-Up
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 text-left">
          {/* Left Column: Vertical Stats */}
          <div className="flex flex-col gap-4 lg:col-span-1 h-full">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="bg-black/40 backdrop-blur-2xl border border-white/5 rounded-2xl p-5 lg:p-6 flex flex-col shadow-2xl relative overflow-hidden group hover:border-brand-500/30 transition-colors flex-1 justify-center"
              >
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-brand-500/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-brand-500/20 transition-colors"></div>
                <div className="text-4xl lg:text-5xl font-extrabold text-white mb-2 font-display relative z-10">
                  {stat.value}
                </div>
                <p className="text-slate-400 text-base leading-snug font-medium relative z-10">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Image */}
          <div className="lg:col-span-2 flex flex-col h-full">
            <div className="w-full aspect-video bg-black/40 backdrop-blur-2xl rounded-2xl overflow-hidden relative border border-white/10 shadow-2xl flex-1 min-h-[300px] flex items-center justify-center p-4">
              <img 
                src="/followup-demo.png" 
                alt="Automated SMS Lead Follow-Up Demo" 
                className="w-full h-full object-contain rounded-lg" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <Process />

      <CTA />
    </div>
  );
}
