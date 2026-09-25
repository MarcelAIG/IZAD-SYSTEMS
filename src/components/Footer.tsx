import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050505] relative z-10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Three Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12">
          
          {/* Column 1 - Brand & Contact */}
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block mb-6">
              <img src="/new-logo.png" alt="Izad Systems Logo" className="w-[180px] h-auto object-contain" />
            </Link>
            <p className="text-slate-400 text-base leading-relaxed font-medium mb-6 max-w-sm">
              Websites and follow-up systems for local service businesses.
            </p>
            
            <div className="space-y-3">
              <a href="tel:+33767478245" className="flex items-center gap-2 text-slate-300 font-medium hover:text-brand-500 transition-colors text-sm">
                <span>+33 7 67 47 82 45</span>
              </a>
              <a href="mailto:izadsystems@gmail.com" className="flex items-center gap-2 text-slate-300 font-medium hover:text-brand-500 transition-colors text-sm">
                <span>izadsystems@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Spacer for Desktop */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Column 2 - Services */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-5 font-display tracking-wide text-lg">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/products/website" className="text-slate-400 text-sm font-medium hover:text-brand-500 transition-colors duration-200 block">Website Design</Link></li>
              <li><Link to="/products/missed-call" className="text-slate-400 text-sm font-medium hover:text-brand-500 transition-colors duration-200 block">Missed Call Text Back</Link></li>
              <li><Link to="/products/reviews" className="text-slate-400 text-sm font-medium hover:text-brand-500 transition-colors duration-200 block">5-Star Review Funnel</Link></li>
              <li><Link to="/products/follow-up" className="text-slate-400 text-sm font-medium hover:text-brand-500 transition-colors duration-200 block">Automated Lead Follow-Up</Link></li>
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-5 font-display tracking-wide text-lg">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/work" className="text-slate-400 text-sm font-medium hover:text-brand-500 transition-colors duration-200 block">Our Work</Link></li>
              <li><Link to="/about" className="text-slate-400 text-sm font-medium hover:text-brand-500 transition-colors duration-200 block">About</Link></li>
              <li><Link to="/pricing" className="text-slate-400 text-sm font-medium hover:text-brand-500 transition-colors duration-200 block">Pricing</Link></li>
              <li><Link to="/contact" className="text-slate-400 text-sm font-medium hover:text-brand-500 transition-colors duration-200 block">Contact</Link></li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs font-medium text-center md:text-left order-2 md:order-1">
            &copy; 2026 IZAD SYSTEMS. All rights reserved.
          </p>
          <div className="flex items-center gap-6 order-1 md:order-2">
            <Link to="/privacy" className="text-slate-500 text-xs font-medium hover:text-brand-500 transition-colors duration-200">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-500 text-xs font-medium hover:text-brand-500 transition-colors duration-200">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
