import { Menu, X, ChevronDown, Monitor, PhoneForwarded, Inbox, Smartphone, Search, Star, BarChart, ClipboardCheck } from 'lucide-react';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const productItems = [
    { title: "Functional Website", desc: "Get a lead-generating Website in just days", icon: Monitor, href: "/products/website" },
    { title: "Missed Call Text Back", desc: "Automatically text back missed calls", icon: PhoneForwarded, href: "/products/missed-call" },
    { title: "All-In-One Inbox", desc: "Get all your messages in one place", icon: Inbox, href: "/products/inbox" },
    { title: "Business Phone", desc: "Separate business and personal", icon: Smartphone, href: "/products/phone" },
    { title: "Local SEO", desc: "Actually get found on Google", icon: Search, href: "/products/seo" },
    { title: "5-Star Magic Review Funnel", desc: "Get more 5 star reviews and prevent bad ones", icon: Star, href: "/products/reviews" },
    { title: "One-Click Marketing Campaigns", desc: "Keep your customers thinking about you", icon: BarChart, href: "/products/marketing" },
    { title: "Automated Lead Follow Up", desc: "Automatically follow up with leads via text", icon: ClipboardCheck, href: "/products/follow-up" },
  ];

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
                  <div className="bg-[var(--color-bg-light)] rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] p-4 w-[700px] border border-white/10">
                    <div className="px-3 pb-3 mb-2 border-b border-white/10 text-sm font-bold text-white tracking-wide">
                      Systems & Features
                    </div>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                      
                      {productItems.map((item, idx) => (
                        <Link key={idx} to={item.href} className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/5 transition-all group/item border border-transparent hover:border-white/5">
                          <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center shrink-0 text-brand-400 group-hover/item:bg-brand-500/20 group-hover/item:scale-105 transition-all duration-300">
                            <item.icon className="w-6 h-6" strokeWidth={1.5} />
                          </div>
                          <div>
                            <div className="text-white font-bold text-base mb-0.5 group-hover/item:text-brand-400 transition-colors">{item.title}</div>
                            <div className="text-slate-400 text-sm leading-snug">{item.desc}</div>
                          </div>
                        </Link>
                      ))}

                    </div>
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
                {productItems.map((item, idx) => (
                  <Link key={idx} to={item.href} onClick={() => setIsOpen(false)} className="flex items-center gap-3 p-3 rounded-md hover:bg-white/5 transition-colors">
                    <div className="w-8 h-8 rounded-md bg-brand-500/20 flex items-center justify-center shrink-0 text-brand-500">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-slate-200 font-bold text-base">{item.title}</span>
                  </Link>
                ))}
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
