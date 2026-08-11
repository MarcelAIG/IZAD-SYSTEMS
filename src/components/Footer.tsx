import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]/40 backdrop-blur-2xl relative z-10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img src="/new-logo.png" alt="Izad Systems Logo" className="h-16 md:h-20 w-auto object-contain" />
            </Link>
            <p className="text-slate-400 text-lg max-w-sm mb-8">
              We build systems that book your calls, answer your texts, and bring in cash while you sleep. No fluff, just results.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 font-display tracking-wide">Menu</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="text-slate-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 font-display tracking-wide">Legal Stuff</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 font-medium">
            &copy; {new Date().getFullYear()} Izad Systems. Stop wasting time.
          </p>
        </div>
      </div>
    </footer>
  );
}
