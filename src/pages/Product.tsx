import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Globe, MessageSquare, Calendar, Check, ArrowRight } from 'lucide-react';
import { CTA } from '../components/CTA';

const products: Record<string, any> = {
  starter: {
    title: "Starter Package",
    subtitle: "Essential foundation for growth.",
    price: "$197",
    description: [
      "New modern website & Full mobile optimization",
      "Reputation & review management system",
      "Mobile app for easy access to all messages, calls, and reviews",
      "Website chat that automatically replies to customers by text"
    ],
    icon: <Globe className="w-12 h-12 lg:w-16 lg:h-16 text-brand-500" />
  },
  professional: {
    title: "Professional Package",
    subtitle: "Everything in Starter + Automation.",
    price: "$297",
    description: [
      "Everything in the Starter Package",
      "Reputation management + on-site review form",
      "Automatic review requests sent to customers",
      "Missed Call Text Back - system automatically texts missed callers",
      "Dedicated service pages for organic visibility",
      "Monthly marketing messages for existing customers",
      "Google Business Profile optimization and updates"
    ],
    icon: <MessageSquare className="w-12 h-12 lg:w-16 lg:h-16 text-brand-500" />,
    popular: true
  },
  maximum: {
    title: "Maximum Package",
    subtitle: "Everything in Professional + AI.",
    price: "$497",
    description: [
      "Everything in the Professional Package",
      "AI Voice Agent (Answers calls, speaks with customers)",
      "AI Website Chatbot (Chats with visitors, turns them into leads)",
      "3 Months of SEO Optimization"
    ],
    icon: <Calendar className="w-12 h-12 lg:w-16 lg:h-16 text-brand-500" />
  }
};

export function ProductPage() {
  const { id } = useParams<{ id: string }>();

  if (!id || !products[id]) {
    return <Navigate to="/" replace />;
  }

  const product = products[id];

  return (
    <div className="pt-32 pb-12 min-h-screen flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col items-start text-left"
          >
            {product.popular && (
              <span className="bg-brand-500/20 text-brand-400 font-bold tracking-widest uppercase text-xs px-4 py-1.5 rounded-full mb-4 border border-brand-500/30">
                Most Popular
              </span>
            )}
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white font-display mb-6 leading-tight">
              {product.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 font-medium mb-10 max-w-lg leading-relaxed">
              {product.subtitle}
            </p>
            
            <Link to="/contact" className="w-full sm:w-auto bg-gradient-to-r from-brand-500 to-brand-600 hover:from-black hover:to-black text-white px-10 py-5 rounded-md text-lg font-extrabold transition-all duration-300 flex items-center justify-center shadow-lg shadow-brand-500/30 border border-transparent hover:border-brand-500 group">
              Book A Call
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-brand-500/10 blur-[80px] rounded-full pointer-events-none"></div>
            <h3 className="text-2xl font-bold text-white font-display mb-8">Everything Included:</h3>
            
            <ul className="space-y-6">
              {product.description.map((point: string, i: number) => (
                <li key={i} className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-brand-500/20 flex items-center justify-center shrink-0 mr-4 mt-0.5 border border-brand-500/30">
                    <Check className="w-3.5 h-3.5 text-brand-400" />
                  </div>
                  <span className="text-slate-300 text-lg font-medium leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
      
      <CTA />
    </div>
  );
}
