import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { User, Play } from 'lucide-react';
import { BrandCheck } from '../BrandCheck';

const products = [
  {
    category: "Functional Website",
    title: "Not another online brochure.",
    description: "We build websites designed to turn visitors into calls, messages and quote requests.",
    features: [
      "Built for mobile",
      "Clear calls-to-action",
      "Fast contact options",
      "Local SEO foundation",
      "Connected to your follow-up system"
    ],
    buttonLink: "/products/website"
  },
  {
    category: "Reputation & Reviews",
    title: "Turn Happy Customers Into Your Best Marketing",
    description: "Make it simple for customers to leave feedback and keep your strongest reviews visible where future customers can see them.",
    features: [
      "Automated review requests",
      "Easy customer experience",
      "Showcase your best reviews",
      "Manage everything in one place"
    ],
    buttonLink: "/products/reviews"
  },
  {
    category: "Missed Call Text Back",
    title: "You Can't Answer Every Call. Your System Can.",
    description: "When someone calls and you don't answer, they automatically receive a text so the conversation doesn't disappear.",
    features: [
      "Instant response",
      "Works while you're busy",
      "Keeps leads from going cold",
      "Customers can text you back immediately"
    ],
    buttonLink: "/products/missed-call"
  },
  {
    category: "Automated Follow-Ups",
    title: "Stop Letting Good Leads Disappear",
    description: "Automatically follow up with customers who contacted you, requested a quote or haven't responded yet.",
    features: [
      "Automatic SMS follow-up",
      "Simple campaigns",
      "Re-engage old leads",
      "Less manual chasing"
    ],
    buttonLink: "/products/follow-up"
  },
  {
    category: "Local SEO",
    title: "Be Easier to Find When Customers Need You",
    description: "We optimize your online presence so your business has a stronger foundation for local Google searches.",
    features: [
      "Local search optimization",
      "Website SEO foundation",
      "Service-area targeting",
      "Google-friendly structure"
    ],
    buttonLink: "/products/seo"
  }
];

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full transform transition-all duration-500 hover:-translate-y-2 flex justify-center">
      <div className="w-[300px] h-[550px] bg-black rounded-[3rem] p-3 shadow-[0_30px_60px_rgba(0,0,0,0.6)] border-[4px] border-[#333] relative overflow-hidden">
        <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden flex flex-col font-sans relative">
          
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
      {/* Header - Fixed white gap with pt-14 and removed logo */}
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

function InteractiveMissedCallMockup() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    let mounted = true;
    const runAnimation = async () => {
      while (mounted) {
        // Reset
        setStep(0);
        await new Promise(r => setTimeout(r, 1000));
        if (!mounted) break;

        // Inbound missed call appears
        setStep(1);
        await new Promise(r => setTimeout(r, 1200));
        if (!mounted) break;

        // First automated text
        setStep(2);
        await new Promise(r => setTimeout(r, 2000));
        if (!mounted) break;

        // Second automated text
        setStep(3);
        await new Promise(r => setTimeout(r, 4000));
      }
    };
    
    runAnimation();
    return () => { mounted = false; };
  }, []);

  return (
    <PhoneFrame>
      {/* Header */}
      <div className="bg-white pt-14 pb-3 flex items-center justify-between px-5 border-b border-gray-200 relative z-10 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center font-bold text-[13px] shadow-sm">
            NL
          </div>
          <span className="font-bold text-gray-800 text-[14px] tracking-tight">New Lead</span>
        </div>
        <div className="flex gap-4 text-gray-400">
           <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
           <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
        </div>
      </div>

      <div className="flex-1 bg-[#f4f5f7] flex flex-col relative overflow-hidden p-4">
        {/* Date separator */}
        <div className="flex justify-center mb-6">
           <div className="bg-gray-200/80 text-gray-500 text-[10px] font-semibold px-3 py-1 rounded-full shadow-sm">Today</div>
        </div>

        {/* Step 1: Missed Call */}
        <div className={`transition-all duration-500 ${step >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="flex items-start gap-2.5 mb-6">
            <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center shrink-0 shadow-sm border border-red-200">
               <svg className="w-3.5 h-3.5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
            </div>
            <div>
              <div className="bg-white border border-gray-200 text-gray-800 text-[12px] font-bold px-3.5 py-2 rounded-xl flex items-center gap-2 shadow-sm">
                 <span className="text-red-500">Missed call</span>
              </div>
              <div className="text-gray-400 text-[9px] font-semibold mt-1.5 ml-1">10:19 AM</div>
            </div>
          </div>
        </div>

        {/* Step 2: First automated text */}
        <div className={`transition-all duration-500 ${step >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          <div className="flex flex-col items-end mb-4 relative">
            <div className="w-4 h-4 bg-[#1e3a8a] absolute -right-1 top-0 rounded-bl-full z-0"></div>
            <div className="bg-[#1e3a8a] text-white text-[12.5px] p-3.5 rounded-2xl rounded-tr-sm max-w-[85%] shadow-md leading-relaxed relative z-10">
               Hey, Sorry I missed you... in the middle of a job! <br/><br/>
               If you want to give me a few details about your inquiry, that would be awesome! I'll get right back to you :)
            </div>
            <div className="text-gray-400 text-[9px] font-semibold mt-1.5 mr-1 flex items-center gap-1">
               10:19 AM <span className="w-1 h-1 bg-gray-300 rounded-full"></span> Automated
            </div>
          </div>
        </div>

        {/* Step 3: Second automated text */}
        <div className={`transition-all duration-500 ${step >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          <div className="flex flex-col items-end mb-4 relative">
            <div className="w-4 h-4 bg-[#1e3a8a] absolute -right-1 top-0 rounded-bl-full z-0"></div>
            <div className="bg-[#1e3a8a] text-white text-[12.5px] p-3.5 rounded-2xl rounded-tr-sm max-w-[85%] shadow-md leading-relaxed relative z-10">
               Look forward to hearing from you!...<br/><br/>
               In the mean time are there any quick questions I can answer here for ya?
            </div>
            <div className="text-gray-400 text-[9px] font-semibold mt-1.5 mr-1 flex items-center gap-1">
               10:20 PM <span className="w-1 h-1 bg-gray-300 rounded-full"></span> Automated
            </div>
          </div>
        </div>
        
      </div>
      
      {/* Input Area */}
      <div className="p-3 border-t border-gray-200 bg-white pb-6 relative z-10 shrink-0">
        <div className="border border-gray-300 bg-gray-50 rounded-full h-10 px-4 flex items-center justify-between text-gray-400 text-[13px]">
          <span>Type a message...</span>
          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
        </div>
      </div>
    </PhoneFrame>
  );
}

function InteractiveFollowUpMockup() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    let mounted = true;
    const runAnimation = async () => {
      while (mounted) {
        // SCENE 1: Chat Widget
        setStep(1); // Show Chat Widget, empty
        await new Promise(r => setTimeout(r, 1000));
        if (!mounted) break;

        setStep(2); // Chat Widget, typing
        await new Promise(r => setTimeout(r, 1200));
        if (!mounted) break;

        // SCENE 2: Quote Form
        setStep(3); // Show Quote form
        await new Promise(r => setTimeout(r, 1500));
        if (!mounted) break;

        setStep(4); // Quote Form submitting
        await new Promise(r => setTimeout(r, 500));
        if (!mounted) break;

        // SCENE 3: Inbox
        setStep(5); // Empty Inbox
        await new Promise(r => setTimeout(r, 800));
        if (!mounted) break;

        setStep(6); // Customer message (from chat)
        await new Promise(r => setTimeout(r, 1200));
        if (!mounted) break;

        setStep(7); // Auto response to chat
        await new Promise(r => setTimeout(r, 1500));
        if (!mounted) break;

        setStep(8); // Quote request notification
        await new Promise(r => setTimeout(r, 1500));
        if (!mounted) break;

        setStep(9); // Quote auto response
        await new Promise(r => setTimeout(r, 4500));
      }
    };
    runAnimation();
    return () => { mounted = false; };
  }, []);

  return (
    <PhoneFrame>
      <div className="relative w-full h-full bg-[#0a0a0a] overflow-hidden flex flex-col rounded-[2.5rem]">
        
        {/* VIEW 1: Website & Chat Widget */}
        <div className={`absolute inset-0 transition-opacity duration-500 flex flex-col ${step <= 2 ? 'opacity-100 z-20' : 'opacity-0 z-0 pointer-events-none'}`}>
           {/* Fake Mobile Website Background */}
           <div className="flex-1 p-5 relative mt-6">
              <div className="absolute top-0 inset-x-0 h-64 bg-[radial-gradient(ellipse_at_top,_rgba(30,58,138,0.3),_transparent_70%)] pointer-events-none"></div>
              <div className="w-16 h-4 bg-brand-500 rounded mb-8"></div>
              <div className="w-5/6 h-8 bg-gray-200 rounded mb-4"></div>
              <div className="w-full h-4 bg-gray-700 rounded mb-2"></div>
              <div className="w-4/5 h-4 bg-gray-700 rounded mb-8"></div>
           </div>

           {/* Chat Widget */}
           <div className="absolute bottom-16 right-4 w-[250px] bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden origin-bottom-right scale-100">
              <div className="bg-[#0b5cff] text-white p-3 font-semibold text-[13px] flex items-center justify-between shadow-sm">
                 <div className="flex items-center gap-2.5">
                    <span>Have a question?</span>
                 </div>
                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </div>
              
              <div className="p-3.5 bg-white flex flex-col gap-2.5">
                 <div className="flex gap-2">
                   <div className="bg-[#f2f2f2] text-gray-800 text-[10px] p-2.5 rounded-lg rounded-tl-sm leading-relaxed">
                      This text goes straight to my personal phone. I'll get back to you ASAP!
                   </div>
                 </div>
                 
                 <div className="border border-gray-200 p-2.5 rounded-lg flex items-center mt-1">
                    <span className="text-[11px] text-gray-800 font-medium">John Doe</span>
                 </div>
                 <div className="border border-gray-200 p-2.5 rounded-lg h-16 relative">
                    <span className={`text-[11px] text-gray-800 absolute top-2.5 left-2.5 font-medium transition-opacity ${step >= 2 ? 'opacity-100' : 'opacity-0'}`}>
                       I want to know more...
                    </span>
                 </div>
                 
                 <div className="w-full bg-[#0b5cff] text-white text-[12px] font-bold py-2.5 rounded-lg mt-1 flex justify-center items-center gap-1.5">
                    Send :)
                 </div>
              </div>
           </div>
        </div>

        {/* VIEW 2: Quote Form */}
        <div className={`absolute inset-0 bg-[#111] transition-opacity duration-500 flex flex-col justify-center p-5 ${step >= 3 && step <= 4 ? 'opacity-100 z-20' : 'opacity-0 z-0 pointer-events-none'}`}>
           <div className="bg-[#1a1a1a] border border-gray-800 rounded-xl p-5 shadow-2xl relative z-10">
              <div className="text-brand-500 font-bold text-[14px] text-center mb-5 uppercase tracking-wide">Request a Quote</div>
              <div className="space-y-4">
                 <div>
                   <div className="text-[9px] text-gray-500 font-bold mb-1.5 uppercase tracking-wider">Full Name</div>
                   <div className="w-full h-10 bg-[#222] border border-gray-700 rounded px-3 flex items-center text-gray-300 font-bold text-[12px]">Jane Smith</div>
                 </div>
                 <div>
                   <div className="text-[9px] text-gray-500 font-bold mb-1.5 uppercase tracking-wider">Service Needed</div>
                   <div className="w-full h-10 bg-[#222] border border-gray-700 rounded px-3 flex items-center text-gray-300 font-bold text-[12px]">General Inquiry</div>
                 </div>
                 <div className={`w-full h-10 bg-brand-600 text-white font-bold text-[12px] rounded flex items-center justify-center mt-6 transition-transform ${step === 4 ? 'scale-[0.97] bg-brand-700' : ''}`}>
                    Submit Request
                 </div>
              </div>
           </div>
        </div>

        {/* VIEW 3: Business Inbox */}
        <div className={`absolute inset-0 bg-[#f4f5f7] transition-opacity duration-500 flex flex-col ${step >= 5 ? 'opacity-100 z-30' : 'opacity-0 z-0 pointer-events-none'}`}>
           <div className="bg-white pt-14 pb-3 flex items-center justify-between px-5 border-b border-gray-200 relative z-10 shrink-0">
             <div className="flex items-center gap-3">
               <div className="w-9 h-9 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center font-bold text-[13px]">
                 NL
               </div>
               <span className="font-bold text-gray-800 text-[14px] tracking-tight">New Leads</span>
             </div>
           </div>
           
           <div className="flex-1 p-4 flex flex-col relative overflow-hidden">
              <div className={`flex flex-col transition-transform duration-700 ease-in-out ${step >= 8 ? '-translate-y-44' : 'translate-y-0'}`}>
                <div className="flex justify-center mb-4">
                 <div className="bg-gray-200/80 text-gray-500 text-[10px] font-semibold px-3 py-1 rounded-full">Today</div>
              </div>

              {/* Chat Widget Message */}
              <div className={`transition-all duration-500 ${step >= 6 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                <div className="flex items-end gap-2.5 mb-3">
                  <div className="bg-[#e5e5ea] text-black text-[12px] px-3.5 py-2.5 rounded-2xl rounded-tl-[4px] max-w-[85%] shadow-sm">
                     <span className="font-bold text-[9px] text-blue-600 block mb-1">Via Web Chat</span>
                     I want to know more...
                  </div>
                </div>
              </div>

              {/* Chat Widget Auto Response */}
              <div className={`transition-all duration-500 ${step >= 7 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                <div className="flex flex-col items-end mb-4">
                  <div className="bg-[#e5e5ff] text-black text-[12px] px-3.5 py-2.5 rounded-2xl rounded-tr-[4px] max-w-[85%] shadow-sm leading-relaxed">
                     Just got your text through web chat! Thanks for reaching out :)<br/><br/>
                     I'll be in touch as soon as I'm free!<br/><br/>
                     - Your Business
                  </div>
                </div>
              </div>

              {/* Quote Form Notification */}
              <div className={`transition-all duration-500 ${step >= 8 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                <div className="flex items-end gap-2.5 mb-3">
                  <div className="bg-[#e5e5ea] text-black text-[12px] px-3.5 py-2.5 rounded-2xl rounded-tl-[4px] max-w-[85%] shadow-sm">
                     <span className="font-bold text-[9px] text-green-600 block mb-1">Via Quote Form</span>
                     New Quote Request from Jane Smith
                  </div>
                </div>
              </div>

              {/* Quote Form Auto Response */}
              <div className={`transition-all duration-500 ${step >= 9 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                <div className="flex flex-col items-end mb-4">
                  <div className="bg-[#e5e5ff] text-black text-[12px] px-3.5 py-2.5 rounded-2xl rounded-tr-[4px] max-w-[85%] shadow-sm leading-relaxed">
                     Hi Jane! We received your quote request. We're reviewing it now and will text you shortly.<br/><br/>
                     - Your Business
                  </div>
                </div>
               </div>
             </div>
           </div>
           
           <div className="p-3 border-t border-gray-200 bg-white pb-6 shrink-0 relative z-10">
             <div className="border border-gray-300 bg-gray-50 rounded-full h-10 px-4 flex items-center text-gray-400 text-[13px]">
               Type a message...
             </div>
           </div>
        </div>

      </div>
    </PhoneFrame>
  );
}

function InteractiveLocalSEOMockup() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    let mounted = true;
    const runAnimation = async () => {
      while (mounted) {
        setStep(1); // Empty search
        await new Promise(r => setTimeout(r, 800));
        if (!mounted) break;

        setStep(2); // Typing
        await new Promise(r => setTimeout(r, 1200));
        if (!mounted) break;

        setStep(3); // Results pop in
        await new Promise(r => setTimeout(r, 2500));
        if (!mounted) break;

        setStep(4); // Technical SEO Scan
        await new Promise(r => setTimeout(r, 2500));
        if (!mounted) break;

        setStep(5); // Dashboard Growth
        await new Promise(r => setTimeout(r, 4500));
      }
    };
    runAnimation();
    return () => { mounted = false; };
  }, []);

  return (
    <PhoneFrame>
      <div className="relative w-full h-full bg-white overflow-hidden flex flex-col">
        
        {/* SCENE 1: Google Search */}
        <div className={`absolute inset-0 bg-[#f8f9fa] transition-opacity duration-500 flex flex-col ${step <= 3 ? 'opacity-100 z-30' : 'opacity-0 z-0 pointer-events-none'}`}>
          <div className="pt-16 pb-3 px-6 shadow-[0_1px_4px_rgba(0,0,0,0.05)] bg-white relative z-10">
             <div className="flex items-center gap-2.5">
                {/* Search Bar */}
                <div className="flex-1 bg-white border border-gray-200 shadow-sm rounded-full h-10 flex items-center px-4 relative overflow-hidden">
                   <div className="text-lg font-bold text-[#4285F4] mr-2 -mt-0.5">G</div>
                   <div className="relative flex-1 h-full flex items-center">
                      <span className={`text-gray-800 text-[13px] absolute left-0 transition-opacity ${step >= 2 ? 'opacity-100' : 'opacity-0'}`}>
                         service near me
                      </span>
                   </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[11px] shrink-0">
                   M
                </div>
             </div>
             {/* Tabs */}
             <div className="flex gap-5 mt-4 overflow-hidden text-[12px] font-medium text-gray-500 px-1">
                <span className="text-gray-900 border-b-2 border-[#4285F4] pb-1">Overview</span>
                <span>Services</span>
                <span>Reviews</span>
             </div>
          </div>
          
          <div className={`flex-1 p-3 transition-all duration-500 relative z-0 overflow-y-auto ${step >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
             <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-4">
                {/* Fake Map */}
                <div className="w-full h-28 bg-[#e8eaed] relative overflow-hidden border-b border-gray-200">
                   <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(#9ca3af 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
                   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <svg className="w-8 h-8 text-[#EA4335] drop-shadow-md animate-bounce" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                   </div>
                </div>
                
                {/* #1 Ranking */}
                <div className="p-3.5 border-b border-gray-100">
                   <div className="font-bold text-[15px] text-blue-700 tracking-tight mb-0.5">Your Business</div>
                   <div className="flex items-center gap-1 mb-1">
                      <span className="text-[12px] font-bold text-gray-700">5.0</span>
                      <div className="flex text-yellow-500 gap-0">
                         {[1,2,3,4,5].map(i => (
                            <svg key={i} className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                         ))}
                      </div>
                      <span className="text-[11px] text-gray-500 ml-1">(248)</span>
                   </div>
                   <div className="text-[11px] text-gray-600 mb-3">Local Services ⋅ Open 24/7</div>
                   <div className="flex gap-2">
                      <div className="flex-1 bg-white border border-gray-300 text-blue-600 font-semibold text-[11px] py-1.5 rounded-full flex justify-center items-center gap-1.5 shadow-sm"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg> Call</div>
                      <div className="flex-1 bg-white border border-gray-300 text-blue-600 font-semibold text-[11px] py-1.5 rounded-full flex justify-center items-center gap-1.5 shadow-sm">Directions</div>
                   </div>
                </div>

                {/* #2 Ranking */}
                <div className="p-3.5 opacity-60">
                   <div className="font-bold text-[14px] text-blue-700 tracking-tight mb-0.5">Generic Competitor</div>
                   <div className="flex items-center gap-1 mb-1">
                      <span className="text-[12px] font-bold text-gray-700">3.8</span>
                      <div className="flex text-yellow-500 gap-0">
                         {[1,2,3].map(i => (
                            <svg key={i} className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                         ))}
                      </div>
                      <span className="text-[11px] text-gray-500 ml-1">(24)</span>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* SCENE 2: Technical SEO Scan */}
        <div className={`absolute inset-0 bg-[#111] transition-opacity duration-500 flex flex-col p-6 pt-24 ${step === 4 ? 'opacity-100 z-20' : 'opacity-0 z-0 pointer-events-none'}`}>
           <div className="w-full text-center mb-8">
              <div className="w-14 h-14 rounded-full bg-brand-500/10 flex items-center justify-center mx-auto mb-4 border border-brand-500/30">
                 <svg className="w-7 h-7 text-brand-500 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
              <h3 className="text-white font-bold text-[16px] mb-1">SEO Foundation</h3>
              <p className="text-gray-400 text-[11px]">Scanning website structure...</p>
           </div>

           <div className="w-full space-y-3">
              <div className="bg-[#1a1a1a] border border-green-500/30 p-3 rounded-lg flex items-center gap-3">
                 <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                 </div>
                 <span className="text-gray-200 font-medium text-[12px]">Google-friendly Structure</span>
              </div>
              <div className="bg-[#1a1a1a] border border-green-500/30 p-3 rounded-lg flex items-center gap-3 delay-100 transition-all">
                 <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                 </div>
                 <span className="text-gray-200 font-medium text-[12px]">Service-Area Targeting</span>
              </div>
              <div className="bg-[#1a1a1a] border border-green-500/30 p-3 rounded-lg flex items-center gap-3 delay-200 transition-all">
                 <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                    <svg className="w-3 h-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                 </div>
                 <span className="text-gray-200 font-medium text-[12px]">Lightning Fast Speeds</span>
              </div>
           </div>
        </div>

        {/* SCENE 3: Dashboard Results */}
        <div className={`absolute inset-0 bg-[#f4f5f7] transition-opacity duration-500 flex flex-col ${step === 5 ? 'opacity-100 z-30' : 'opacity-0 z-0 pointer-events-none'}`}>
          <div className="bg-brand-600 pt-12 pb-5 px-5 relative z-10 shadow-md">
             <div className="text-white font-bold text-[16px] mb-0.5">Local SEO Growth</div>
             <div className="text-brand-100 text-[11px] opacity-90">Visibility is skyrocketing</div>
          </div>
          
          <div className="flex-1 p-4 flex flex-col gap-3 overflow-y-auto">
             {/* Chart Card */}
             <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mt-2">
                <div className="flex justify-between items-center mb-4">
                   <div className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">Search Traffic</div>
                   <div className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M7 11l5-5m0 0l5 5m-5-5v12" /></svg>
                      342%
                   </div>
                </div>
                
                {/* Fake Chart */}
                <div className="h-28 flex items-end justify-between gap-1">
                   {[10, 20, 15, 30, 45, 60, 50, 75, 90, 100].map((height, i) => (
                      <div key={i} className="w-full bg-brand-50 rounded-t-sm relative overflow-hidden group">
                         <div 
                           className="absolute bottom-0 w-full bg-brand-500 transition-all duration-1000 ease-out rounded-t-sm" 
                           style={{ height: step === 5 ? `${height}%` : '0%', transitionDelay: `${i * 100}ms` }}
                         ></div>
                      </div>
                   ))}
                </div>
             </div>

             <div className="grid grid-cols-2 gap-3">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                   <div className="text-[9px] font-bold text-gray-400 uppercase mb-1 tracking-wide">Website Visits</div>
                   <div className="text-[20px] font-black text-gray-800 transition-all duration-1000">
                      {step === 5 ? '842' : '12'}
                   </div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center">
                   <div className="text-[9px] font-bold text-gray-400 uppercase mb-1 tracking-wide">Inbound Calls</div>
                   <div className="text-[20px] font-black text-brand-600 transition-all duration-1000">
                      {step === 5 ? '156' : '4'}
                   </div>
                </div>
             </div>
          </div>
        </div>

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
    
    case "Reputation & Reviews":
      return <InteractiveReviewMockup />;
      
    case "Missed Call Text Back":
      return <InteractiveMissedCallMockup />;
      
    case "Automated Follow-Ups":
      return <InteractiveFollowUpMockup />;

    case "Local SEO":
      return <InteractiveLocalSEOMockup />;

    default:
      return null;
  }
}

export function HomeProducts() {
  return (
    <section className="py-24 relative z-10 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white font-display mb-6 tracking-tight max-w-4xl mx-auto">
            Everything Your Business Needs to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">Capture More Customers</span>
          </h2>
        </motion.div>

        <div className="space-y-32 md:space-y-48">
          {products.map((product, index) => {
            const isEven = index % 2 === 1; // Alternating layout
            return (
              <div key={index} className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
                
                {/* Content Side */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="w-full lg:w-1/2 flex flex-col items-start justify-center"
                >
                  <h3 className="text-xl font-bold text-brand-400 mb-4 tracking-wide uppercase">
                    {product.category}
                  </h3>
                  <h4 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-display mb-6 leading-tight">
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
                </motion.div>

                {/* Visual Side (Realistic Tailwind UI mockups) */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                  className="w-full lg:w-1/2 relative flex justify-center items-center"
                >
                  <div className="absolute inset-0 bg-brand-500/10 blur-[100px] rounded-full opacity-50 pointer-events-none"></div>
                  {renderVisual(product.category)}
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
