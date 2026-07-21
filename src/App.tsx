import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Pricing } from './components/Pricing';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-brand-500/30 selection:text-brand-200">
      {/* Background glow effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-brand-600/15 blur-[150px] mix-blend-screen"></div>
        <div className="absolute top-[40%] -right-[20%] w-[60vw] h-[60vw] rounded-full bg-brand-900/20 blur-[150px] mix-blend-screen"></div>
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <Pricing />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}
