import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mic } from 'lucide-react';
import { useLocation } from 'react-router-dom';

type CallState = 'idle' | 'connecting' | 'listening' | 'speaking' | 'ended';

export function AIVoiceButton() {
  const [callState, setCallState] = useState<CallState>('idle');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Handle scroll sizing
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle call simulation sequence
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (callState === 'connecting') {
      timeout = setTimeout(() => setCallState('listening'), 2000);
    } else if (callState === 'listening') {
      timeout = setTimeout(() => setCallState('speaking'), 4000);
    } else if (callState === 'speaking') {
      timeout = setTimeout(() => setCallState('ended'), 5000);
    }

    return () => clearTimeout(timeout);
  }, [callState]);

  const handleClick = () => {
    if (callState === 'idle' || callState === 'ended') {
      setCallState('connecting');
    } else {
      // Click to cancel/hang up early
      setCallState('ended');
    }
  };

  const isActive = callState === 'connecting' || callState === 'listening' || callState === 'speaking';

  // Dynamic text and color logic
  const getDisplayDetails = () => {
    switch (callState) {
      case 'connecting':
        return { text: "CONNECTING...", colorClass: "text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.6)]" };
      case 'listening':
        return { text: "LISTENING...", colorClass: "text-red-400 drop-shadow-[0_0_8px_rgba(248,113,113,0.6)]" };
      case 'speaking':
        return { 
          text: <><span className="text-brand-400 drop-shadow-[0_0_8px_rgba(14,165,233,0.5)]">ASSISTANT</span><br/>IS SPEAKING...</>, 
          colorClass: "text-white/90" 
        };
      case 'ended':
        return { text: "SPEAK AGAIN", colorClass: "text-white/90" };
      default:
        return { 
          text: <>Just talk<br/>in <span className="text-brand-400 font-normal drop-shadow-[0_0_8px_rgba(14,165,233,0.5)]">english</span></>, 
          colorClass: "text-white/70" 
        };
    }
  };

  const { text, colorClass } = getDisplayDetails();

  let containerSizeClass = "";
  let iconSizeClass = "";
  let textSizeClass = "";

  if (isHomePage) {
    if (isScrolled) {
      containerSizeClass = "w-28 h-28 md:w-36 md:h-36";
      iconSizeClass = "w-7 h-7 md:w-8 md:h-8";
      textSizeClass = "text-[8px] md:text-[9px]";
    } else {
      containerSizeClass = "w-48 h-48 md:w-56 md:h-56";
      iconSizeClass = "w-10 h-10 md:w-12 md:h-12";
      textSizeClass = "text-[11px] md:text-[12px]";
    }
  } else {
    // Very small for all other pages
    containerSizeClass = "w-20 h-20 md:w-24 md:h-24";
    iconSizeClass = "w-5 h-5 md:w-6 md:h-6";
    textSizeClass = "text-[6px] md:text-[7px]";
  }

  return (
    <div 
      onClick={handleClick}
      className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] cursor-pointer group"
    >
      <motion.div 
        className={`relative flex items-center justify-center rounded-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${containerSizeClass}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* World-Class Ultra Glassy Base with Blue Outer Glow */}
        <div 
          className="absolute inset-0 bg-[#050505]/60 backdrop-blur-3xl rounded-full flex flex-col items-center justify-center overflow-hidden transition-all duration-700 group-hover:bg-[#050505]/80"
          style={{
            boxShadow: '0 0 30px 5px rgba(14,165,233,0.3), inset 0px 1px 1px rgba(255,255,255,0.15), inset 0px -20px 40px rgba(0,0,0,0.5)',
            border: '1px solid rgba(255,255,255,0.06)'
          }}
        >
          {/* Subtle top edge light reflection */}
          <div className="absolute top-0 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          
          {/* Extremely soft ambient bottom light */}
          <div className="absolute -bottom-8 left-0 right-0 h-24 bg-brand-500/10 rounded-full pointer-events-none blur-2xl"></div>

          {/* Icon */}
          <Mic 
            strokeWidth={1.5}
            className={`mb-2 ${isActive ? 'text-brand-300' : 'text-white/80'} drop-shadow-md z-10 transition-all duration-700 ${iconSizeClass}`} 
          />
          
          {/* Typography */}
          <span className={`${colorClass} font-light tracking-[0.25em] text-center leading-relaxed uppercase font-display z-10 transition-all duration-500 ${textSizeClass}`}>
            {text}
          </span>
        </div>
        
        {/* Luxury subtle radar waves when active */}
        {isActive && (
          <>
            <motion.div 
              animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              className={`absolute inset-0 border rounded-full pointer-events-none ${
                callState === 'listening' ? 'border-red-400/50' : 'border-brand-400/50'
              }`}
            ></motion.div>
            <motion.div 
              animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }}
              className={`absolute inset-0 border rounded-full pointer-events-none ${
                callState === 'listening' ? 'border-red-400/50' : 'border-brand-400/50'
              }`}
            ></motion.div>
          </>
        )}
      </motion.div>
    </div>
  );
}
