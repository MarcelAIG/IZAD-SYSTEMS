import { Link } from 'react-router-dom';

export function TermsPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen flex flex-col bg-[#050505]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white font-display mb-6 leading-tight">
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600">Service</span>
          </h1>
          <p className="text-slate-400 text-sm">Last Updated: September 2026</p>
        </div>

        <div className="space-y-8 text-slate-300 text-base leading-relaxed font-medium">
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">1. Overview</h2>
            <p>
              This website is operated by IZAD SYSTEMS. The site presents our website design and automation services for informational purposes. By accessing or using this website, you agree to be bound by these Terms of Service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">2. Enquiries and Bookings</h2>
            <p>
              Sending an enquiry or booking a discovery call through this website does not constitute the purchase of a service, nor does it create a binding client agreement. These features are strictly for initial consultation and communication purposes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">3. Service Agreements</h2>
            <p>
              Any services provided by IZAD SYSTEMS—including but not limited to project scope, price, deliverables, asset ownership, timelines, and ongoing support—will be agreed upon separately in a formal, written contract before any work commences. This website's content does not override or serve as a substitute for those separate written agreements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">4. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and design elements, is the property of IZAD SYSTEMS and is protected by copyright laws. You may not reproduce or distribute any content without our explicit written permission.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">5. Contact Information</h2>
            <p>
              If you have any questions regarding these Terms of Service, please contact us at: <br/>
              <a href="mailto:izadsystems@gmail.com" className="text-brand-500 hover:text-white transition-colors">izadsystems@gmail.com</a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
