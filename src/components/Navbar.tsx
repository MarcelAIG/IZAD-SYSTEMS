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
      className={`text-sm font-bold tracking-wide transition-colors ${
        isActive(to) ? 'text-white' : 'text-slate-400 hover:text-white'
      }`}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  );

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-2xl border-b border-white/5 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 md:h-14">
          <div className="flex items-center">
            <Link to="/" className="text-xl md:text-2xl font-extrabold tracking-tighter text-white font-display flex items-center gap-0">
              <img src="/izad-logo.png" alt="Izad Systems Logo" className="h-8 md:h-10 w-auto object-contain" />
              <div>IZAD <span className="text-brand-500">SYSTEMS</span></div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/services">Our Services</NavLink>
            <NavLink to="/about">About Us</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <Link to="/contact" className="bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-800 hover:scale-105 text-white px-5 py-2 rounded-full text-sm font-bold transition-all duration-500 flex items-center shadow-[0_0_20px_rgba(14,165,233,0.3)] border border-brand-400/30">
              Book online
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
            <Link to="/" onClick={() => setIsOpen(false)} className={`block px-4 py-4 text-lg font-bold rounded-2xl ${isActive('/') ? 'text-white bg-white/5' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>Home</Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className={`block px-4 py-4 text-lg font-bold rounded-2xl ${isActive('/services') ? 'text-white bg-white/5' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>Our Services</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className={`block px-4 py-4 text-lg font-bold rounded-2xl ${isActive('/about') ? 'text-white bg-white/5' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>About Us</Link>
            <Link to="/pricing" onClick={() => setIsOpen(false)} className={`block px-4 py-4 text-lg font-bold rounded-2xl ${isActive('/pricing') ? 'text-white bg-white/5' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>Pricing</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className={`block px-4 py-4 text-lg font-bold rounded-2xl ${isActive('/contact') ? 'text-white bg-white/5' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>Contact</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block w-full mt-6 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-800 text-white px-6 py-5 rounded-2xl text-lg font-bold transition-all duration-500 shadow-[0_0_20px_rgba(14,165,233,0.3)] border border-brand-400/30 text-center">
              Book online
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
