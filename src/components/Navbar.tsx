import { Menu, X, ArrowRight, ChevronDown, Globe, MessageSquare, Calendar } from 'lucide-react';
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
        <div className="flex justify-between items-center h-20 md:h-24">
          
          {/* Left side: Logo and Links */}
          <div className="flex items-center gap-10 lg:gap-14">
            <Link to="/" className="flex items-center shrink-0">
              <img src="/new-logo.png" alt="Izad Systems Logo" className="h-10 md:h-12 w-auto object-contain" />
            </Link>
            
            <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
              <div className="relative group">
                <button className={`flex items-center gap-1 text-base font-bold tracking-wide transition-colors ${
                  location.pathname.startsWith('/products') ? 'text-brand-500' : 'text-slate-400 group-hover:text-brand-500'
                }`}>
                  Products <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                
                <div className="absolute top-full left-0 pt-6 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                  <div className="bg-black/95 backdrop-blur-xl border border-white/10 rounded-md shadow-2xl p-2 w-[320px]">
                    
                    <Link to="/products/starter" className="flex items-start gap-3 p-3 rounded-md hover:bg-white/5 transition-colors group/item">
                      <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center shrink-0 group-hover/item:bg-brand-500/20 transition-colors text-brand-500">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm mb-0.5">Starter Package</div>
                        <div className="text-slate-400 text-xs">Essential foundation for growth</div>
                      </div>
                    </Link>
                    
                    <Link to="/products/professional" className="flex items-start gap-3 p-3 rounded-md hover:bg-white/5 transition-colors group/item">
                      <div className="w-10 h-10 rounded-md bg-brand-500/10 flex items-center justify-center shrink-0 group-hover/item:bg-brand-500/20 transition-colors text-brand-500">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm mb-0.5">Professional Package</div>
                        <div className="text-slate-400 text-xs">Automation and lead generation</div>
                      </div>
                    </Link>
                    
                    <Link to="/products/maximum" className="flex items-start gap-3 p-3 rounded-md hover:bg-white/5 transition-colors group/item">
                      <div className="w-10 h-10 rounded-md bg-brand-500/10 flex items-center justify-center shrink-0 group-hover/item:bg-brand-500/20 transition-colors text-brand-500">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm mb-0.5">Maximum Package</div>
                        <div className="text-slate-400 text-xs">Full automation with AI</div>
                      </div>
                    </Link>

                  </div>
                </div>
              </div>
              <NavLink to="/pricing">Pricing</NavLink>
              <NavLink to="/work">Our Work</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>

          {/* Right side: CTA Button (Desktop) & Mobile Toggle */}
          <div className="flex items-center">
            <div className="hidden md:block">
              <Link to="/contact" className="bg-gradient-to-r from-brand-500 to-brand-600 hover:from-black hover:to-black text-white hover:text-brand-500 px-7 py-3 rounded-md text-base font-extrabold transition-all duration-300 flex items-center shadow-[0_0_20px_rgba(14,165,233,0.3)] border border-brand-400/30 hover:border-brand-500">
                Book A Call
              </Link>
            </div>
            
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-slate-400 hover:text-white p-2">
                {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
          
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-3xl border-b border-white/10 absolute w-full shadow-xl">
          <div className="px-4 pt-4 pb-8 space-y-3">
            
            <div className="space-y-1 bg-white/5 rounded-md p-2 border border-white/5">
              <div className={`block px-2 pt-2 pb-3 text-lg font-bold ${location.pathname.startsWith('/products') ? 'text-brand-500' : 'text-slate-300'}`}>Products</div>
              <div className="space-y-1">
                <Link to="/products/starter" onClick={() => setIsOpen(false)} className="flex items-center gap-3 p-3 rounded-md hover:bg-white/5 transition-colors">
                  <div className="w-8 h-8 rounded-md bg-brand-500/20 flex items-center justify-center shrink-0 text-brand-500">
                    <Globe className="w-4 h-4" />
                  </div>
                  <span className="text-slate-200 font-bold text-base">Starter Package</span>
                </Link>
                <Link to="/products/professional" onClick={() => setIsOpen(false)} className="flex items-center gap-3 p-3 rounded-md hover:bg-white/5 transition-colors">
                  <div className="w-8 h-8 rounded-md bg-brand-500/20 flex items-center justify-center shrink-0 text-brand-500">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <span className="text-slate-200 font-bold text-base">Professional Package</span>
                </Link>
                <Link to="/products/maximum" onClick={() => setIsOpen(false)} className="flex items-center gap-3 p-3 rounded-md hover:bg-white/5 transition-colors">
                  <div className="w-8 h-8 rounded-md bg-brand-500/20 flex items-center justify-center shrink-0 text-brand-500">
                    <Calendar className="w-4 h-4" />
                  </div>
                  <span className="text-slate-200 font-bold text-base">Maximum Package</span>
                </Link>
              </div>
            </div>

            <Link to="/pricing" onClick={() => setIsOpen(false)} className={`block px-4 py-4 text-lg font-bold rounded-md ${isActive('/pricing') ? 'text-brand-500 bg-white/5' : 'text-slate-400 hover:text-brand-500 hover:bg-brand-500/10'}`}>Pricing</Link>
            <Link to="/work" onClick={() => setIsOpen(false)} className={`block px-4 py-4 text-lg font-bold rounded-md ${isActive('/work') ? 'text-brand-500 bg-white/5' : 'text-slate-400 hover:text-brand-500 hover:bg-brand-500/10'}`}>Our Work</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className={`block px-4 py-4 text-lg font-bold rounded-md ${isActive('/about') ? 'text-brand-500 bg-white/5' : 'text-slate-400 hover:text-brand-500 hover:bg-brand-500/10'}`}>About</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className={`block px-4 py-4 text-lg font-bold rounded-md ${isActive('/contact') ? 'text-brand-500 bg-white/5' : 'text-slate-400 hover:text-brand-500 hover:bg-brand-500/10'}`}>Contact</Link>
            
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block w-full mt-6 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-black hover:to-black text-white hover:text-brand-500 px-6 py-5 rounded-md text-lg font-extrabold transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.3)] border border-brand-400/30 hover:border-brand-500 text-center">
              Book A Call
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
