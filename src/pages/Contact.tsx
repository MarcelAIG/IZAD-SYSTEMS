import { motion } from 'motion/react';

export function ContactPage() {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-5xl font-display font-bold mb-6">Get in Touch</h1>
        <p className="text-zinc-400 text-lg mb-12">
          Ready to scale your business? Let's discuss how IZAD Systems can help.
        </p>
        
        <form className="space-y-6 glass-card p-8 rounded-2xl">
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Name</label>
            <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Email</label>
            <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors" placeholder="john@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Message</label>
            <textarea className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-500 transition-colors h-32 resize-none" placeholder="How can we help?"></textarea>
          </div>
          <button type="button" className="w-full bg-gradient-to-r from-brand-500 to-brand-600 hover:from-black hover:to-black text-white hover:text-brand-500 font-extrabold py-4 rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(14,165,233,0.2)] border border-transparent hover:border-brand-500">
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
}
