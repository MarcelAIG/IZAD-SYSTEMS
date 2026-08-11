import { Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const NavLink = ({ to, children }: { to: string, children: React.ReactNode }) => (
    <Link 
      to={to} 
      className={`text-base font-bold tracking-wide transition-colors ${
        isActive(to) ? 'text-brand-500' : 'text-slate-400 hover:text-brand-500'
      }`}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  );

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-2xl border-b border-white/5 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 md:h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/new-logo.png" alt="Izad Systems Logo" className="h-8 md:h-10 w-auto object-contain" />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Our Services</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Link to="/contact" className="bg-gradient-to-r from-brand-500 to-brand-600 hover:from-black hover:to-black text-white hover:text-brand-500 px-6 py-2.5 rounded-full text-base font-extrabold transition-all duration-300 flex items-center shadow-[0_0_20px_rgba(14,165,233,0.3)] border border-brand-400/30 hover:border-brand-500">
              Book a Call
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-400 hover:text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-3xl border-b border-white/10 absolute w-full shadow-xl">
          <div className="px-4 pt-4 pb-8 space-y-3">
            <Link to="/" onClick={() => setIsOpen(false)} className={`block px-4 py-4 text-lg font-bold rounded-2xl ${isActive('/') ? 'text-brand-500 bg-white/5' : 'text-slate-400 hover:text-brand-500 hover:bg-brand-500/10'}`}>Home</Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className={`block px-4 py-4 text-lg font-bold rounded-2xl ${isActive('/services') ? 'text-brand-500 bg-white/5' : 'text-slate-400 hover:text-brand-500 hover:bg-brand-500/10'}`}>Our Services</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className={`block px-4 py-4 text-lg font-bold rounded-2xl ${isActive('/about') ? 'text-brand-500 bg-white/5' : 'text-slate-400 hover:text-brand-500 hover:bg-brand-500/10'}`}>About Us</Link>
            <Link to="/pricing" onClick={() => setIsOpen(false)} className={`block px-4 py-4 text-lg font-bold rounded-2xl ${isActive('/pricing') ? 'text-brand-500 bg-white/5' : 'text-slate-400 hover:text-brand-500 hover:bg-brand-500/10'}`}>Pricing</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className={`block px-4 py-4 text-lg font-bold rounded-2xl ${isActive('/contact') ? 'text-brand-500 bg-white/5' : 'text-slate-400 hover:text-brand-500 hover:bg-brand-500/10'}`}>Contact</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block w-full mt-6 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-black hover:to-black text-white hover:text-brand-500 px-6 py-5 rounded-2xl text-lg font-extrabold transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.3)] border border-brand-400/30 hover:border-brand-500 text-center">
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
