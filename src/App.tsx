import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AIVoiceButton } from './components/AIVoiceButton';
import { Home } from './pages/Home';
import { WebsiteProductPage } from './pages/WebsiteProduct';
import { MissedCallProductPage } from './pages/MissedCallProduct';
import { InboxProductPage } from './pages/InboxProduct';
import { ReviewsProductPage } from './pages/ReviewsProduct';
import { MarketingProductPage } from './pages/MarketingProduct';
import { FollowUpProductPage } from './pages/FollowUpProduct';
import { ProductPage } from './pages/Product';
import { AboutPage } from './pages/About';
import { PricingPage } from './pages/Pricing';
import { ContactPage } from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-light)] text-black selection:bg-brand-500/30 selection:text-brand-900 flex flex-col relative overflow-x-hidden">
      <ScrollToTop />
      <AIVoiceButton />
      
      {/* Deep, dark background with subtle atmospheric blue on left */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.08),_transparent_50%)]"></div>
      
      {/* Soft, luxury sky light from the right edge */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[radial-gradient(ellipse_at_right_center,_rgba(14,165,233,0.12),_transparent_60%)]"></div>

      <div className="relative z-50">
        <Navbar />
      </div>
      
      <main className="relative z-10 flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/website" element={<WebsiteProductPage />} />
          <Route path="/products/missed-call" element={<MissedCallProductPage />} />
          <Route path="/products/inbox" element={<InboxProductPage />} />
          <Route path="/products/reviews" element={<ReviewsProductPage />} />
          <Route path="/products/marketing" element={<MarketingProductPage />} />
          <Route path="/products/follow-up" element={<FollowUpProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <div className="relative z-20 mt-auto">
        <Footer />
      </div>
    </div>
  );
}
