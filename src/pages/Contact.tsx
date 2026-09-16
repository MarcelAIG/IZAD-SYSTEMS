import { motion } from 'motion/react';
import { Mail, Phone } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="pt-32 pb-20 max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Get in Touch</h1>
        <p className="text-zinc-400 text-lg mb-8">
          Ready to scale your business? Let's discuss how IZAD Systems can help.
        </p>

        {/* Contact Information */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-zinc-300">
          <a href="mailto:izadsystems@gmail.com" className="flex items-center gap-2 hover:text-brand-500 transition-colors">
            <Mail className="w-5 h-5" />
            <span>izadsystems@gmail.com</span>
          </a>
          <a href="tel:+33767478245" className="flex items-center gap-2 hover:text-brand-500 transition-colors">
            <Phone className="w-5 h-5" />
            <span>+33 7 67 47 82 45</span>
          </a>
        </div>
        
        {/* Contact Form */}
        <form className="space-y-4 bg-black/40 p-6 sm:p-8 rounded-2xl border border-white/5 shadow-2xl text-left backdrop-blur-sm">
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1.5">Name</label>
            <input 
              type="text" 
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-500 focus:bg-white/10 transition-all" 
              placeholder="John Doe" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1.5">Email</label>
            <input 
              type="email" 
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-500 focus:bg-white/10 transition-all" 
              placeholder="john@example.com" 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1.5">Message</label>
            <textarea 
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-500 focus:bg-white/10 transition-all h-28 resize-none" 
              placeholder="How can we help?"
            ></textarea>
          </div>
          <button 
            type="button" 
            className="w-full mt-2 bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-400 hover:to-brand-500 text-white font-bold py-3 rounded-lg transition-all shadow-[0_0_15px_rgba(14,165,233,0.3)]"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
}
