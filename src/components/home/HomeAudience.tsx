const industries = [
  "Plumbers",
  "Roofers",
  "Electricians",
  "HVAC",
  "Landscapers",
  "Painters",
  "Handyman",
  "Cleaning Companies",
  "Remodelers",
  "General Contractors",
  "Flooring",
  "Window & Door",
  "Pest Control",
  "Locksmiths",
  "Garage Door",
  "Pool Services",
  "Tree Services",
  "Moving Companies",
  "Auto Repair",
  "Car Detailing",
  "Dog Groomers",
  "Dentists",
  "Med Spas",
  "Physiotherapy",
  "Other Local Services"
];

export function HomeAudience() {
  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-6 tracking-tight">
            Built for Local Service Businesses
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 font-medium max-w-3xl mx-auto">
            For businesses that rely on calls, quotes, bookings, and local customers.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {industries.map((industry, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/5 rounded-md px-3 py-3 text-center text-sm font-medium text-slate-300 flex items-center justify-center h-full"
            >
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
