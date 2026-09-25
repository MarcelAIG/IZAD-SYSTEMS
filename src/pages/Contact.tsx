import { Mail, Phone } from 'lucide-react';
import { CTA } from '../components/CTA';

export function ContactPage() {
  return (
    <div className="pt-32 pb-0 min-h-screen flex flex-col">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left sm:text-center mb-0 relative z-20">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white font-display mb-16 sm:mb-24 leading-tight">
          Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600">Touch</span>
        </h1>
        
        <div className="flex flex-col items-start sm:items-center">
          <p className="text-zinc-300 text-lg md:text-2xl mb-4 whitespace-normal sm:whitespace-nowrap px-0 sm:px-2">
            Ready to scale your business? Let's discuss how WE can help.
          </p>

          {/* Contact Information */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-center gap-6 sm:gap-10 mb-0 text-white">
            <a href="mailto:izadsystems@gmail.com" className="flex items-center gap-3 hover:text-brand-500 transition-colors font-extrabold text-lg md:text-2xl">
              <Mail className="w-6 h-6 md:w-8 md:h-8 text-brand-500 shrink-0" />
              <span className="break-all">izadsystems@gmail.com</span>
            </a>
            <a href="tel:+33767478245" className="flex items-center gap-3 hover:text-brand-500 transition-colors font-extrabold text-xl md:text-2xl">
              <Phone className="w-6 h-6 md:w-8 md:h-8 text-brand-500 shrink-0" />
              <span>+33 7 67 47 82 45</span>
            </a>
          </div>
        </div>
      </div>
      
      <div className="-mt-16">
        <CTA />
      </div>
    </div>
  );
}
