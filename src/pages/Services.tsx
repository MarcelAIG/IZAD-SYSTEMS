import { motion } from 'motion/react';
import { MessageSquare, Globe, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const fullServices = [
  {
    id: "website",
    title: "Website System",
    subtitle: "Built to capture clients.",
    description: [
      "Website built with an integrated client catcher.",
      "A digital storefront optimized to sell 24/7.",
      "Designed specifically for high-ticket conversion."
    ],
    icon: <Globe className="w-10 h-10 text-brand-500" />
  },
  {
    id: "ai-receptionist",
    title: "Voice AI Receptionist",
    subtitle: "Never miss a call.",
    description: [
      "Clients can talk directly to your AI on the phone or website.",
      "No clicking through pages or typing in a slow chatbot.",
      "Instantly handles customer inquiries with zero wait time."
    ],
    icon: <MessageSquare className="w-10 h-10 text-brand-500" />
  },
  {
    id: "booking-system",
    title: "Automated Booking System",
    subtitle: "We fill your calendar.",
    description: [
      "AI handles the back-and-forth scheduling.",
      "Books meetings directly into your existing calendar.",
      "Eliminates manual lead follow-up and ghosting."
    ],
    icon: <Calendar className="w-10 h-10 text-brand-500" />
  }
];

export function ServicesPage() {
  return (
    <div className="pt-24 pb-12 min-h-screen flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-12 mb-16 relative z-10 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white font-display mb-6 leading-tight"
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600">Services</span>
        </motion.h1>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {fullServices.map((service, index) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            className="group bg-black/40 backdrop-blur-xl border border-white/10 hover:border-white/20 rounded-3xl p-6 lg:p-8 flex flex-col items-start transition-all duration-500 relative overflow-hidden h-full"
          >
            {/* Background ambient glow that appears on hover */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-brand-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-brand-500/20 to-brand-600/5 rounded-2xl flex items-center justify-center shrink-0 border border-brand-500/20 shadow-inner mb-6 lg:mb-8">
              {service.icon}
            </div>
            
            <div className="flex-1 w-full flex flex-col">
              <span className="text-brand-400 font-bold tracking-widest uppercase text-[10px] lg:text-xs mb-2 lg:mb-3 block font-display">Service {index + 1}</span>
              <h2 className="text-xl lg:text-2xl font-bold text-white font-display mb-2">{service.title}</h2>
              <p className="text-slate-400 text-sm lg:text-base min-h-[3rem] mb-6 lg:mb-8">{service.subtitle}</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {service.description.map((point, i) => (
                  <li key={i} className="flex items-start text-sm lg:text-base text-slate-300 font-medium">
                    <div className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-brand-500/10 flex items-center justify-center shrink-0 mr-3 mt-0.5">
                      <span className="text-brand-400 font-bold text-[10px] lg:text-xs">✓</span>
                    </div>
                    {point}
                  </li>
                ))}
              </ul>

              <Link to="/contact" className="w-full py-3 lg:py-4 rounded-xl font-extrabold flex items-center justify-center transition-all duration-300 text-sm lg:text-base bg-white/5 hover:bg-brand-500 hover:border-brand-500 text-white border border-white/10 mt-auto">
                I Need This System
              </Link>
            </div>
          </motion.div>
        ))}
        </div>
      </div>
    </div>
  );
}
