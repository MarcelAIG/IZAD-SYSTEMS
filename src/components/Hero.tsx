import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const TypewriterOnce = ({ text, delay = 0 }: { text: string, delay?: number }) => {
  const characters = text.split("");
  return (
    <span className="inline-block whitespace-pre-wrap">
      {characters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.015, delay: delay + index * 0.015 }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

const TypewriterLoop = ({ phrasesList, delayStart = 0 }: { phrasesList: string[], delayStart?: number }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [hasStarted, setHasStarted] = useState(false);

  // Initial delay before the loop starts
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasStarted(true);
    }, delayStart * 1000);
    return () => clearTimeout(timer);
  }, [delayStart]);

  useEffect(() => {
    if (!hasStarted) return;

    const timer = setTimeout(() => {
      const i = loopNum % phrasesList.length;
      const fullText = phrasesList[i];

      setText(
        isDeleting 
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      // Speed configuration:
      // Typing is faster (40ms), Deleting is very fast (20ms)
      setTypingSpeed(isDeleting ? 20 : 40);

      if (!isDeleting && text === fullText) {
        // Pause at the end of the typed word for 2.5 seconds
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && text === "") {
        // Pause briefly before typing the next word
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(300); 
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, hasStarted]);

  return (
    <span className="inline">
      {text}
      {hasStarted && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-[0.4ch] h-[0.8em] bg-brand-500 ml-1 align-baseline"
        />
      )}
    </span>
  );
};

export function Hero() {
  return (
    <section className="relative pt-40 pb-20 lg:pt-52 lg:pb-32 overflow-hidden flex flex-col justify-center min-h-[90vh]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full h-full flex items-center">


        <div className="text-left max-w-4xl flex flex-col items-start mt-8 relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white mb-6 leading-[1.1] font-display min-h-[3em] md:min-h-[2.2em]">
            Website Design & Marketing Systems For <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600 inline-block mt-2 lg:mt-0">
              <TypewriterLoop 
                phrasesList={["Contractors", "Med Spas", "Dental clinics", "Beauty salons"]} 
                delayStart={0.2} 
              />
            </span>
          </h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          >
            Real systems that make you <strong className="font-bold text-white">more money</strong>, save you <strong className="font-bold text-white">more time</strong>, and <strong className="font-bold text-white">remove the risks</strong> of manual human error.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
          >
            <Link to="/contact" className="w-full sm:w-auto bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-800 hover:scale-105 hover:shadow-[0_0_40px_rgba(14,165,233,0.4)] text-white px-10 py-5 rounded-full text-lg font-bold transition-all duration-500 flex items-center justify-center shadow-lg shadow-brand-500/30">
              Book online
            </Link>
            <Link to="/services" className="w-full sm:w-auto px-10 py-5 rounded-full text-lg font-bold text-white transition-all flex items-center justify-center border border-white/20 hover:bg-white/5 bg-white/5 shadow-sm">
              Our Services
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
