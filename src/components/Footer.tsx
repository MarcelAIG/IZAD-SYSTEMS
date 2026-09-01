import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] relative z-10 pt-20 pb-10">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-16">
          
          {/* Column 1 - Brand */}
          <div className="lg:pr-6">
            <Link to="/" className="inline-block mb-8">
              <img src="/new-logo.png" alt="Izad Systems Logo" className="w-[200px] md:max-w-[240px] h-auto object-contain" />
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed font-medium">
              We build systems that book your calls, answer your texts, and bring in business while you sleep.
            </p>
          </div>

          {/* Column 2 - Products */}
          <div>
            <h4 className="text-white font-bold mb-6 font-display tracking-wide text-xl">Products</h4>
            <ul className="space-y-4">
              <li><Link to="/products/starter" className="text-slate-400 text-base font-medium hover:text-brand-500 transition-colors duration-200 block">Starter Package</Link></li>
              <li><Link to="/products/professional" className="text-slate-400 text-base font-medium hover:text-brand-500 transition-colors duration-200 block">Professional Package</Link></li>
              <li><Link to="/products/maximum" className="text-slate-400 text-base font-medium hover:text-brand-500 transition-colors duration-200 block">Maximum Package</Link></li>
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h4 className="text-white font-bold mb-6 font-display tracking-wide text-xl">Company</h4>
            <ul className="space-y-4">
              <li><Link to="/work" className="text-slate-400 text-base font-medium hover:text-brand-500 transition-colors duration-200 block">Our Work</Link></li>
              <li><Link to="/about" className="text-slate-400 text-base font-medium hover:text-brand-500 transition-colors duration-200 block">About</Link></li>
              <li><Link to="/pricing" className="text-slate-400 text-base font-medium hover:text-brand-500 transition-colors duration-200 block">Pricing</Link></li>
              <li><Link to="/contact" className="text-slate-400 text-base font-medium hover:text-brand-500 transition-colors duration-200 block">Contact</Link></li>
            </ul>
          </div>

          {/* Column 4 - Legal */}
          <div>
            <h4 className="text-white font-bold mb-6 font-display tracking-wide text-xl">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 text-base font-medium hover:text-brand-500 transition-colors duration-200 block">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 text-base font-medium hover:text-brand-500 transition-colors duration-200 block">Terms of Service</a></li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-10 pb-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm md:text-base font-medium text-center md:text-left order-2 md:order-1">
            &copy; 2026 IZAD SYSTEMS. All rights reserved.
          </p>
          <div className="flex items-center gap-8 order-1 md:order-2">
            <a href="#" className="text-slate-500 text-sm md:text-base font-medium hover:text-brand-500 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-slate-500 text-sm md:text-base font-medium hover:text-brand-500 transition-colors duration-200">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
