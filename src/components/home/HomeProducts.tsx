import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BrandCheck } from '../BrandCheck';

const products = [
  {
    category: "Functional Website",
    title: "Not another online brochure.",
    description: "We build websites designed to turn visitors into calls, messages and quote requests.",
    features: [
      "Built for mobile",
      "Clear calls-to-action",
      "On-site local SEO foundation",
      "Instagram, Facebook & WhatsApp integration",
      "Google Business page integrated"
    ],
    buttonLink: "/products/website"
  },
  {
    category: "AI Voice Agent",
    title: "Never Miss Another Call — 24/7.",
    description: "An intelligent AI voice receptionist that answers every incoming call naturally, qualifies leads, and books appointments straight onto your calendar.",
    features: [
      "24/7 automated call handling",
      "Natural, human-like voice conversation",
      "Instant lead qualification & booking",
      "Seamless CRM & calendar integration"
    ],
    buttonLink: "/products/ai-voice"
  },
  {
    category: "Reputation & Reviews",
    title: "Turn Happy Customers Into Your Best Reputation",
    description: "Make it effortless for happy customers to leave 5-star Google reviews while catching private feedback before it goes public.",
    features: [
      "5-Star review funnel",
      "Automated review requests",
      "Easy customer experience",
      "Showcase your strongest reviews"
    ],
    buttonLink: "/products/reviews"
  }
];

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full transform transition-all duration-500 hover:-translate-y-2 flex justify-center">
      <div className="w-[300px] h-[550px] bg-black rounded-[3rem] p-3 shadow-[0_30px_60px_rgba(0,0,0,0.6)] border-[4px] border-[#333] relative overflow-hidden">
        <div 
          className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden flex flex-col font-sans relative isolate"
          style={{ maskImage: 'radial-gradient(white, black)', WebkitMaskImage: '-webkit-radial-gradient(white, black)' }}
        >
          {/* iOS Dynamic Island */}
          <div className="absolute top-5 inset-x-0 h-6 flex justify-center z-50 pointer-events-none">
            <div className="w-24 h-7 bg-black rounded-full"></div>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}

function InteractiveAIVoiceMockup() {
  const [step, setStep] = useState(1);

  useEffect(() => {
    let mounted = true;
    const runAnimation = async () => {
      while (mounted) {
        // SCENE 1: Native iOS Incoming Call
        setStep(1);
        await new Promise(r => setTimeout(r, 1500));
        if (!mounted) break;

        // AI presses Accept button
        setStep(2);
        await new Promise(r => setTimeout(r, 700));
        if (!mounted) break;

        // SCENE 2: Active Call — Caller speaks
        setStep(3);
        await new Promise(r => setTimeout(r, 1400));
        if (!mounted) break;

        // AI Voice responds with availability
        setStep(4);
        await new Promise(r => setTimeout(r, 1800));
        if (!mounted) break;

        // Caller confirms time
        setStep(5);
        await new Promise(r => setTimeout(r, 1400));
        if (!mounted) break;

        // SCENE 3: Clean iOS Booking & CRM Confirmation
        setStep(6);
        await new Promise(r => setTimeout(r, 3800));
      }
    };

    runAnimation();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <PhoneFrame>
      <div className="relative w-full h-full bg-[#0b1017] overflow-hidden flex flex-col">

        {/* SCENE 1: Native iOS Incoming Call */}
        <div className={`absolute inset-0 bg-gradient-to-b from-[#16202e] via-[#0d131c] to-[#080b10] transition-opacity duration-500 flex flex-col justify-between pt-20 pb-12 px-7 text-white ${step <= 2 ? 'opacity-100 z-30' : 'opacity-0 z-0 pointer-events-none'}`}>
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-white/15 flex items-center justify-center mb-4 shadow-inner border border-white/10">
              <svg className="w-11 h-11 text-white/80" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v2h20v-2c0-3.33-6.67-5-10-5z" />
              </svg>
            </div>
            <div className="text-[20px] font-bold tracking-tight text-white">Potential Customer</div>
            <div className="text-[13px] text-gray-300 mt-0.5 font-medium">(503) 555-0199</div>
            <div className="text-[12px] text-gray-400 mt-2">Incoming Call</div>

            <div className={`mt-5 px-3.5 py-1 rounded-full bg-red-600/20 border border-red-500/50 text-[10px] font-bold text-white uppercase tracking-wider transition-all duration-300 ${step === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              Instant Pickup • 24/7
            </div>
          </div>

          <div className="flex items-center justify-between px-4">
            <div className="flex flex-col items-center gap-2">
              <div className="w-14 h-14 rounded-full bg-[#eb3b30] flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white rotate-[135deg]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <span className="text-[11px] text-gray-300 font-medium">Decline</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className={`w-14 h-14 rounded-full bg-[#34c759] flex items-center justify-center shadow-lg transition-transform duration-300 ${step === 2 ? 'scale-90 ring-4 ring-[#34c759]/40' : 'animate-pulse'}`}>
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
              </div>
              <span className="text-[11px] text-gray-300 font-medium">Answer</span>
            </div>
          </div>
        </div>

        {/* SCENE 2: Active Call & Live Voice Equalizer */}
        <div className={`absolute inset-0 bg-[#080d14] transition-opacity duration-500 flex flex-col pt-16 pb-7 px-4 text-white ${step >= 3 && step <= 5 ? 'opacity-100 z-30' : 'opacity-0 z-0 pointer-events-none'}`}>
          <div className="text-center mb-3">
            <div className="text-[13px] font-bold text-white">AI Voice Agent • <span className="text-gray-400 font-normal">{step === 3 ? '00:06' : step === 4 ? '00:14' : '00:19'}</span></div>
          </div>

          {/* Glowing Ring & Thin Equalizer Bars matching ai-voice-demo.png */}
          <div className="flex justify-center my-2">
            <div className="w-28 h-28 rounded-full border-2 border-[#0ea5e9] shadow-[0_0_25px_rgba(14,165,233,0.45),inset_0_0_20px_rgba(14,165,233,0.25)] flex items-center justify-center gap-[3px] px-4">
              {[22, 40, 65, 35, 85, 55, 95, 60, 75, 40, 50, 25].map((h, i) => (
                <motion.div
                  key={i}
                  animate={{ height: ['20%', `${h}%`, '25%'] }}
                  transition={{ duration: 0.85, repeat: Infinity, ease: "easeInOut", delay: i * 0.07 }}
                  className="w-[2.5px] bg-[#38bdf8] rounded-full"
                />
              ))}
            </div>
          </div>

          {/* Native iOS Speech Bubbles */}
          <div className="flex-1 flex flex-col justify-center gap-2.5 px-1 mt-2">
            <div className={`transition-all duration-400 ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
              <div className="bg-[#232933] text-white text-[11.5px] px-3.5 py-2.5 rounded-2xl rounded-bl-sm max-w-[82%] leading-snug shadow">
                Need a repair quote this week.
              </div>
            </div>

            <div className={`transition-all duration-400 self-end ${step >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
              <div className="bg-[#007aff] text-white text-[11.5px] px-3.5 py-2.5 rounded-2xl rounded-br-sm max-w-[86%] ml-auto leading-snug shadow">
                I have tomorrow at 10:00 AM open. Want me to book it?
              </div>
            </div>

            <div className={`transition-all duration-400 ${step >= 5 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
              <div className="bg-[#232933] text-white text-[11.5px] px-3.5 py-2 rounded-2xl rounded-bl-sm max-w-[75%] leading-snug shadow">
                Yes, 10:00 AM works great!
              </div>
            </div>
          </div>

          {/* End Call Button */}
          <div className="flex justify-center pt-2">
            <div className="w-11 h-11 rounded-full bg-[#eb3b30] flex items-center justify-center shadow-md">
              <svg className="w-5 h-5 text-white rotate-[135deg]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>
          </div>
        </div>

        {/* SCENE 3: Appointment Booked & Synced to CRM */}
        <div className={`absolute inset-0 bg-[#f4f5f7] transition-opacity duration-500 flex flex-col ${step === 6 ? 'opacity-100 z-30' : 'opacity-0 z-0 pointer-events-none'}`}>
          <div className="bg-white pt-14 pb-3 px-5 border-b border-gray-200 flex items-center justify-between shrink-0">
            <span className="font-bold text-gray-900 text-[14px] tracking-tight">Calendar & CRM</span>
            <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2.5 py-0.5 rounded-full">Auto-Booked</span>
          </div>

          <div className="flex-1 p-4 flex flex-col justify-between">
            <div>
              <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 mb-3">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center text-white shrink-0">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="font-black text-gray-900 text-[15px] leading-tight">Appointment Booked</div>
                </div>

                <div className="bg-gray-50 rounded-xl p-3 border border-gray-100 space-y-1.5 text-[12px]">
                  <div className="font-bold text-gray-900">Tomorrow, 10:00 AM</div>
                  <div className="text-gray-600 font-medium">New Job — (503) 555-0199</div>
                  <div className="text-brand-600 font-bold text-[11px]">Qualified & Confirmed</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-3.5 shadow-sm border border-gray-200">
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1.5">Confirmation Text Sent</div>
                <div className="bg-[#007aff] text-white text-[11.5px] p-3 rounded-xl rounded-br-sm leading-snug">
                  Hi! Your appointment is confirmed for tomorrow at 10:00 AM. See you then!
                </div>
              </div>
            </div>

            <div className="w-full bg-[#cc2929] text-white font-bold text-[12px] py-3 rounded-xl text-center tracking-wide shadow-sm mb-2">
              SYNCED TO CRM
            </div>
          </div>
        </div>

      </div>
    </PhoneFrame>
  );
}

function InteractiveReviewMockup() {
  const [step, setStep] = useState(1);
  const [rating, setRating] = useState<number | null>(null);
  const [isNextHovered, setIsNextHovered] = useState(false);

  useEffect(() => {
    let mounted = true;
    const runAnimation = async () => {
      while (mounted) {
        // State 1: Reset
        setStep(1);
        setRating(null);
        setIsNextHovered(false);
        await new Promise(r => setTimeout(r, 1500));
        if (!mounted) break;
        
        // State 2: Select 3 stars
        setRating(3);
        await new Promise(r => setTimeout(r, 800));
        if (!mounted) break;

        // State 3: Hover Next button
        setIsNextHovered(true);
        await new Promise(r => setTimeout(r, 400));
        if (!mounted) break;

        // State 4: Go to step 2
        setStep(2);
        setIsNextHovered(false);
        await new Promise(r => setTimeout(r, 4000));
      }
    };
    
    runAnimation();
    
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <PhoneFrame>
      {/* Header */}
      <div className="bg-[#1a1a1a] pt-14 pb-4 flex items-center justify-center border-b-[3px] border-[#000] relative z-10 shrink-0">
         <span className="text-white font-bold tracking-widest uppercase text-sm">Feedback</span>
      </div>

      <div className="flex-1 bg-[#8b8d8f] flex flex-col relative overflow-hidden">
        {step === 1 ? (
          <div className="p-5 flex-1 flex flex-col">
            <h2 className="text-black font-black text-[22px] mb-6">Please Rate Us *</h2>
            <div className="flex flex-col gap-4">
              {[5, 4, 3, 2, 1].map((num) => (
                <label key={num} className="flex items-center gap-2 cursor-pointer group pointer-events-none">
                  <div className="w-4 h-4 rounded-full bg-white border border-gray-300 flex items-center justify-center shrink-0">
                    {rating === num && <div className="w-2 h-2 bg-black rounded-full"></div>}
                  </div>
                  <div className={`flex text-[#ffc107] text-lg tracking-widest leading-none drop-shadow-sm ml-1 transition-transform ${rating === num ? 'scale-110' : ''}`}>
                    {"★".repeat(num)}
                  </div>
                  <span className="text-black font-extrabold text-[15px] ml-1">
                    ({num} Star{num > 1 ? 's' : ''})
                  </span>
                </label>
              ))}
            </div>
            <div className="mt-8 text-white text-xs">Rating</div>
          </div>
        ) : (
          <div className="p-5 flex-1 flex flex-col overflow-y-auto">
            <h2 className="text-black font-black text-lg leading-tight mb-1">Sorry to hear that you're not satisfied.</h2>
            <p className="text-black text-[11px] mb-4 border-b border-gray-500 pb-3 font-semibold leading-relaxed">
              Please provide us with your feedback and we'll do our best to improve.
            </p>
            
            <div className="space-y-4">
              <div>
                <label className="text-black font-black text-xs mb-1 block">Name (optional)</label>
                <div className="w-full p-2.5 rounded shadow-sm text-xs bg-white text-gray-500 font-bold opacity-80">Name</div>
              </div>
              <div>
                <label className="text-black font-black text-xs mb-1 block">Email (optional)</label>
                <div className="w-full p-2.5 rounded shadow-sm text-xs bg-white text-gray-500 font-bold opacity-80">Email</div>
              </div>
              <div>
                <label className="text-black font-black text-xs mb-1 block leading-tight">Your Feedback (Please let us know what can we do to improve?)</label>
                <div className="w-full p-2.5 rounded shadow-sm text-xs bg-white text-gray-500 font-bold h-20 opacity-80">Your Feedback</div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        {step === 1 ? (
          <div className="bg-[#cc2929] h-12 flex shrink-0 border-t border-black/10">
            <div className="flex-1"></div>
            <button 
              className={`px-6 text-white font-bold text-[13px] flex items-center justify-center transition-colors ${!rating ? 'bg-[#cc2929] opacity-50' : isNextHovered ? 'bg-[#991f1f]' : 'bg-[#b32424]'}`}
            >
              NEXT →
            </button>
          </div>
        ) : (
          <div className="bg-[#cc2929] h-12 flex shrink-0 border-t border-black/10">
            <button 
              className="px-4 text-white font-bold text-[13px] flex items-center justify-center bg-[#cc2929]"
            >
              ← PREV
            </button>
            <div className="flex-1"></div>
            <button 
              className="bg-[#b32424] px-6 text-white font-bold text-[13px] flex items-center justify-center"
            >
              SUBMIT
            </button>
          </div>
        )}
      </div>
    </PhoneFrame>
  );
}

function InteractiveWebsiteMockup() {
  return (
    <PhoneFrame>
      {/* Mobile Browser Header */}
      <div className="bg-[#111] pt-14 pb-2 px-4 border-b border-gray-800 flex items-center justify-center relative z-20 shrink-0 overflow-hidden">
         <div className="bg-[#222] text-gray-400 text-[10px] px-6 py-1.5 rounded-full flex items-center gap-1.5 font-medium shadow-inner">
            <span className="opacity-70 text-[8px]">🔒</span> your-website.com
         </div>
      </div>
      
      {/* Mobile Website Content */}
      <div className="flex-1 bg-[#0a0a0a] overflow-hidden relative">
         <motion.div 
           animate={{ y: [0, -220, 0] }}
           transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 }}
           className="flex flex-col relative w-full pb-10"
         >
           {/* Background blur/gradient */}
           <div className="absolute top-0 inset-x-0 h-[400px] bg-[radial-gradient(ellipse_at_top,_rgba(30,58,138,0.4),_transparent_60%)] pointer-events-none"></div>
           
           {/* Nav */}
           <div className="flex justify-between items-center p-5 relative z-10">
              <div className="font-black text-lg tracking-tighter text-white flex items-center gap-1">
                 <span className="text-brand-500">LOGO</span>
              </div>
              <div className="w-5 h-4 flex flex-col justify-between opacity-80">
                 <div className="w-full h-0.5 bg-white rounded-full"></div>
                 <div className="w-full h-0.5 bg-white rounded-full"></div>
                 <div className="w-full h-0.5 bg-white rounded-full"></div>
              </div>
           </div>
           
           {/* Hero */}
           <div className="px-5 pt-2 pb-4 text-center relative z-10">
              <div className="text-brand-400 text-[8px] font-bold tracking-widest uppercase mb-2">Fast, Local Service Provider</div>
              <h4 className="text-[26px] font-black text-white mb-3 tracking-tight leading-[1.1] uppercase">Headline Here.<br/>Action Focused.</h4>
              <p className="text-gray-300 text-[11px] mb-5 leading-relaxed">Clear, compelling description of your services that drives visitors to take action immediately.</p>
              
              {/* Buttons */}
              <div className="flex flex-col gap-2">
                 <div className="bg-red-600 text-white font-bold px-4 py-3 rounded text-[11px] flex items-center justify-center gap-2 shadow-lg shadow-red-600/20">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    CALL NOW
                 </div>
                 <div className="bg-[#1a1a1a] border border-gray-700 text-white font-bold px-4 py-3 rounded text-[11px] text-center">
                    REQUEST SERVICE
                 </div>
              </div>
           </div>
           
           {/* Form snippet peeking */}
           <div className="mt-4 mx-4 bg-[#111] border border-gray-800 rounded-xl p-5 relative z-10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <div className="text-brand-500 font-bold text-[12px] text-center mb-4 uppercase tracking-wide">Request Service</div>
              <div className="space-y-3">
                 <div className="text-left">
                   <div className="text-[9px] text-gray-500 font-bold mb-1.5 uppercase tracking-wider">Full Name</div>
                   <div className="w-full h-9 bg-[#1a1a1a] border border-gray-800 rounded px-3 flex items-center text-gray-500 font-bold text-[11px]">John Doe</div>
                 </div>
                 <div className="text-left">
                   <div className="text-[9px] text-gray-500 font-bold mb-1.5 uppercase tracking-wider">Phone Number</div>
                   <div className="w-full h-9 bg-[#1a1a1a] border border-gray-800 rounded px-3 flex items-center text-gray-500 font-bold text-[11px]">(555) 123-4567</div>
                 </div>
                 <div className="w-full h-9 bg-brand-600 hover:bg-brand-500 transition-colors text-white font-bold text-[11px] rounded flex items-center justify-center mt-4">
                    Submit Request
                 </div>
              </div>
           </div>

           {/* Extra content for scrolling */}
           <div className="mt-8 px-5">
              <h5 className="text-white font-black text-[13px] mb-4 uppercase tracking-wider text-center">Our Services</h5>
              <div className="grid grid-cols-2 gap-3">
                 <div className="bg-[#111] border border-gray-800 rounded-xl p-4 text-center">
                   <div className="w-8 h-8 bg-blue-500/20 rounded-full mx-auto mb-2 flex items-center justify-center text-blue-500">⚡</div>
                   <div className="text-gray-300 text-[10px] font-bold uppercase">Service 1</div>
                 </div>
                 <div className="bg-[#111] border border-gray-800 rounded-xl p-4 text-center">
                   <div className="w-8 h-8 bg-red-500/20 rounded-full mx-auto mb-2 flex items-center justify-center text-red-500">🔧</div>
                   <div className="text-gray-300 text-[10px] font-bold uppercase">Service 2</div>
                 </div>
              </div>
           </div>
         </motion.div>
      </div>
    </PhoneFrame>
  );
}

function renderVisual(category: string) {
  switch (category) {
    case "Functional Website":
      return <InteractiveWebsiteMockup />;
    case "AI Voice Agent":
      return <InteractiveAIVoiceMockup />;
    case "Reputation & Reviews":
      return <InteractiveReviewMockup />;
    default:
      return null;
  }
}

export function HomeProducts() {
  return (
    <section className="py-24 relative z-10 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-display mb-6 tracking-tight max-w-4xl mx-auto">
            Everything Your Business Needs to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">Capture More Customers</span>
          </h2>
        </div>

        <div className="space-y-32 md:space-y-48">
          {products.map((product, index) => {
            const isEven = index % 2 === 1;
            return (
              <div key={index} className={`flex flex-col-reverse ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
                
                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col items-start justify-center">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-display mb-3 leading-tight">
                    {product.category}
                  </h3>
                  <h4 className="text-xl md:text-2xl font-bold text-brand-400 mb-6 tracking-wide">
                    {product.title}
                  </h4>
                  <p className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed max-w-lg">
                    {product.description}
                  </p>
                  
                  <ul className="space-y-4 mb-10">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <BrandCheck className="w-6 h-6 mr-3 shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to={product.buttonLink} 
                    className="inline-flex items-center justify-center bg-gradient-to-r from-brand-500 to-brand-600 hover:from-black hover:to-black text-white px-10 py-4 rounded-md text-lg font-extrabold transition-all duration-300 shadow-[0_0_30px_rgba(14,165,233,0.3)] border border-transparent hover:border-brand-500 group/btn"
                  >
                    See How It Works
                  </Link>
                </div>

                {/* Visual Side */}
                <div className="w-full lg:w-1/2 relative flex justify-center items-center">
                  <div className="absolute inset-0 bg-brand-500/10 blur-[100px] rounded-full opacity-50 pointer-events-none"></div>
                  {renderVisual(product.category)}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
