import { Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-2xl border-b border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <span className="text-2xl md:text-3xl font-extrabold tracking-tighter text-white font-display">
              IZAD SYSTEMS<span className="text-brand-500">.</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <a href="#services" className="text-sm font-bold tracking-wide text-zinc-300 hover:text-white transition-colors">Systems</a>
            <a href="#pricing" className="text-sm font-bold tracking-wide text-zinc-300 hover:text-white transition-colors">Investment</a>
            <a href="#contact" className="text-sm font-bold tracking-wide text-zinc-300 hover:text-white transition-colors">Contact</a>
            <button className="bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-white px-7 py-3 rounded-full text-sm font-bold transition-all flex items-center group shadow-[0_0_20px_rgba(214,40,0,0.3)] border border-brand-400/50">
              Start Scaling
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-300 hover:text-white">
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-3xl border-b border-white/[0.05]">
          <div className="px-4 pt-4 pb-8 space-y-3">
            <a href="#services" onClick={() => setIsOpen(false)} className="block px-4 py-4 text-lg font-bold text-zinc-300 hover:text-white hover:bg-white/5 rounded-2xl">Systems</a>
            <a href="#pricing" onClick={() => setIsOpen(false)} className="block px-4 py-4 text-lg font-bold text-zinc-300 hover:text-white hover:bg-white/5 rounded-2xl">Investment</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-4 py-4 text-lg font-bold text-zinc-300 hover:text-white hover:bg-white/5 rounded-2xl">Contact</a>
            <button className="w-full mt-6 bg-gradient-to-r from-brand-500 to-brand-600 text-white px-6 py-5 rounded-2xl text-lg font-bold transition-colors shadow-[0_0_20px_rgba(214,40,0,0.3)] border border-brand-400/50">
              Start Scaling
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
