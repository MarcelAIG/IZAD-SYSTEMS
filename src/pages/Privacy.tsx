import { Link } from 'react-router-dom';

export function PrivacyPage() {
  return (
    <div className="pt-32 pb-24 min-h-screen flex flex-col bg-[#050505]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white font-display mb-6 leading-tight">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600">Policy</span>
          </h1>
          <p className="text-slate-400 text-sm">Last Updated: September 2026</p>
        </div>

        <div className="space-y-8 text-slate-300 text-base leading-relaxed font-medium">
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
            <p>
              We collect information when you choose to contact us or book a call. Because our contact features use direct email links, your inquiries are sent straight to our inbox. When you book a discovery call, you are directed to a secure external booking service (Cal.com). We use the details you provide—such as your name, email, phone number, and business details—solely to understand your needs and respond to your requests effectively.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">2. How We Share Your Data</h2>
            <p>
              We do not sell your personal information. Your data is only shared with the trusted third-party providers required to facilitate our booking and communication systems. Currently, our active providers are:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Google Workspace (Gmail):</strong> Used to securely receive and manage direct email inquiries.</li>
              <li><strong>Cal.com:</strong> Used as our external scheduling platform to manage calendar bookings.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">3. Data Retention</h2>
            <p>
              For general inquiries that do not result in a formal client agreement, we retain your communication data for 12 months from the date of our last exchange. After this 12-month period, these records are permanently deleted from our inbox and booking systems. For active clients, data is retained as agreed upon in separate written contracts.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">4. Cookies and Analytics</h2>
            <p>
              We respect your privacy. At this time, this website operates as a static informational page and does not actively deploy any analytics tracking scripts, advertising pixels, or non-essential cookies.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
            <p>
              You have the right to request access to the personal data we hold about you, or to request its deletion at any time. To exercise these rights, please contact us directly using the information provided below.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or how your data is handled, please contact us at: <br/>
              <a href="mailto:izadsystems@gmail.com" className="text-brand-500 hover:text-white transition-colors">izadsystems@gmail.com</a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}
