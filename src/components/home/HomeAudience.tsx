const industries = [
  { name: "Plumbers", image: "https://loremflickr.com/800/600/plumber,contractor/all?lock=1" },
  { name: "Roofers", image: "https://loremflickr.com/800/600/roofer,construction/all?lock=2" },
  { name: "Electricians", image: "https://loremflickr.com/800/600/electrician,worker/all?lock=3" },
  { name: "HVAC", image: "https://loremflickr.com/800/600/hvac,technician/all?lock=4" },
  { name: "Landscapers", image: "https://loremflickr.com/800/600/landscaping,gardener/all?lock=5" },
  { name: "Painters", image: "https://loremflickr.com/800/600/painter,painting/all?lock=6" },
  { name: "Handyman", image: "https://loremflickr.com/800/600/handyman,tools/all?lock=7" },
  { name: "Cleaning Companies", image: "https://loremflickr.com/800/600/cleaning,house/all?lock=8" },
  { name: "Remodelers", image: "https://loremflickr.com/800/600/remodeling,kitchen/all?lock=9" },
  { name: "General Contractors", image: "https://loremflickr.com/800/600/contractor,builder/all?lock=10" },
  { name: "Flooring", image: "https://loremflickr.com/800/600/flooring,wood/all?lock=11" },
  { name: "Window & Door", image: "https://loremflickr.com/800/600/window,installation/all?lock=12" },
  { name: "Pest Control", image: "https://loremflickr.com/800/600/pest,control/all?lock=13" },
  { name: "Locksmiths", image: "https://loremflickr.com/800/600/locksmith,keys/all?lock=14" },
  { name: "Garage Door", image: "https://loremflickr.com/800/600/garage,repair/all?lock=15" },
  { name: "Pool Services", image: "https://loremflickr.com/800/600/swimming,pool/all?lock=16" },
  { name: "Tree Services", image: "https://loremflickr.com/800/600/tree,arborist/all?lock=17" },
  { name: "Moving Companies", image: "https://loremflickr.com/800/600/moving,boxes/all?lock=18" },
  { name: "Auto Repair", image: "https://loremflickr.com/800/600/mechanic,car/all?lock=19" },
  { name: "Car Detailing", image: "https://loremflickr.com/800/600/car,detailing/all?lock=20" },
  { name: "Dog Groomers", image: "https://loremflickr.com/800/600/dog,grooming/all?lock=21" },
  { name: "Dentists", image: "https://loremflickr.com/800/600/dentist,clinic/all?lock=22" },
  { name: "Med Spas", image: "https://loremflickr.com/800/600/spa,massage/all?lock=23" },
  { name: "Physiotherapy", image: "https://loremflickr.com/800/600/physiotherapy,therapy/all?lock=24" },
  { name: "Other Local Services", image: "https://loremflickr.com/800/600/business,local/all?lock=25" }
];

export function HomeAudience() {
  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a] border-y border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white font-display mb-6 tracking-tight">
            Built for Local Service Businesses
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 font-medium whitespace-nowrap overflow-hidden text-ellipsis px-4">
            For businesses that rely on calls, quotes, bookings, and local customers.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:gap-8 overflow-hidden relative">
          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-20 pointer-events-none" />

          {/* Row 1 */}
          <div className="flex overflow-hidden group">
            <div className="flex w-max space-x-6 animate-marquee group-hover:[animation-play-state:paused] pr-6">
              {[...industries.slice(0, 13), ...industries.slice(0, 13)].map((industry, i) => (
                <div
                  key={i}
                  className="w-[280px] sm:w-[320px] shrink-0 group/card relative bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden hover:border-brand-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] flex flex-col h-full cursor-pointer"
                >
                  <div className="relative h-40 sm:h-48 overflow-hidden bg-slate-900">
                    <div className="absolute inset-0 bg-brand-primary/20 mix-blend-overlay z-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                    <img
                      src={industry.image}
                      alt={`${industry.name} services`}
                      className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.unsplash.com/photo-1542039556-9f379101d2d3?auto=format&fit=crop&q=80&w=800'; // Fallback
                      }}
                    />
                  </div>
                  <div className="p-5 bg-white/5 backdrop-blur-md border-t border-white/5 flex-grow flex items-center justify-center">
                    <h3 className="text-base sm:text-lg font-bold text-slate-200 text-center group-hover/card:text-white transition-colors">
                      {industry.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex overflow-hidden group">
            <div className="flex w-max space-x-6 animate-marquee-reverse group-hover:[animation-play-state:paused] pr-6">
              {[...industries.slice(13), ...industries.slice(13)].map((industry, i) => (
                <div
                  key={i}
                  className="w-[280px] sm:w-[320px] shrink-0 group/card relative bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden hover:border-brand-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] flex flex-col h-full cursor-pointer"
                >
                  <div className="relative h-40 sm:h-48 overflow-hidden bg-slate-900">
                    <div className="absolute inset-0 bg-brand-primary/20 mix-blend-overlay z-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                    <img
                      src={industry.image}
                      alt={`${industry.name} services`}
                      className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.unsplash.com/photo-1542039556-9f379101d2d3?auto=format&fit=crop&q=80&w=800'; // Fallback
                      }}
                    />
                  </div>
                  <div className="p-5 bg-white/5 backdrop-blur-md border-t border-white/5 flex-grow flex items-center justify-center">
                    <h3 className="text-base sm:text-lg font-bold text-slate-200 text-center group-hover/card:text-white transition-colors">
                      {industry.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
