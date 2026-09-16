import { 
  Droplet, Hammer, Zap, Fan, TreePine, Paintbrush, Wrench, Sparkles, 
  Ruler, HardHat, Grid, LayoutTemplate, Bug, Key, ArrowUpSquare, 
  Waves, Axe, Truck, PenTool, Car, Heart, Smile, Flower2, Activity, Store 
} from 'lucide-react';

const industries = [
  { name: "Plumbers", icon: Droplet, color: "from-blue-500 to-cyan-500" },
  { name: "Roofers", icon: Hammer, color: "from-orange-500 to-red-500" },
  { name: "Electricians", icon: Zap, color: "from-yellow-400 to-orange-500" },
  { name: "HVAC", icon: Fan, color: "from-cyan-500 to-blue-600" },
  { name: "Landscapers", icon: TreePine, color: "from-green-500 to-emerald-600" },
  { name: "Painters", icon: Paintbrush, color: "from-pink-500 to-rose-500" },
  { name: "Handyman", icon: Wrench, color: "from-slate-500 to-gray-700" },
  { name: "Cleaning Companies", icon: Sparkles, color: "from-sky-400 to-indigo-500" },
  { name: "Remodelers", icon: Ruler, color: "from-amber-500 to-orange-600" },
  { name: "General Contractors", icon: HardHat, color: "from-yellow-500 to-amber-600" },
  { name: "Flooring", icon: Grid, color: "from-stone-500 to-amber-700" },
  { name: "Window & Door", icon: LayoutTemplate, color: "from-blue-400 to-indigo-500" },
  { name: "Pest Control", icon: Bug, color: "from-emerald-500 to-teal-700" },
  { name: "Locksmiths", icon: Key, color: "from-yellow-400 to-amber-500" },
  { name: "Garage Door", icon: ArrowUpSquare, color: "from-slate-400 to-slate-600" },
  { name: "Pool Services", icon: Waves, color: "from-cyan-400 to-blue-500" },
  { name: "Tree Services", icon: Axe, color: "from-green-600 to-emerald-800" },
  { name: "Moving Companies", icon: Truck, color: "from-indigo-500 to-purple-600" },
  { name: "Auto Repair", icon: PenTool, color: "from-gray-600 to-slate-800" },
  { name: "Car Detailing", icon: Car, color: "from-sky-400 to-blue-600" },
  { name: "Dog Groomers", icon: Heart, color: "from-rose-400 to-pink-600" },
  { name: "Dentists", icon: Smile, color: "from-cyan-300 to-blue-500" },
  { name: "Med Spas", icon: Flower2, color: "from-fuchsia-400 to-purple-500" },
  { name: "Physiotherapy", icon: Activity, color: "from-blue-500 to-indigo-600" },
  { name: "Other Local Services", icon: Store, color: "from-slate-600 to-gray-800" }
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
              {[...industries.slice(0, 13), ...industries.slice(0, 13)].map((industry, i) => {
                const Icon = industry.icon;
                return (
                  <div
                    key={i}
                    className="w-[280px] sm:w-[320px] shrink-0 group/card relative bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden hover:border-brand-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] flex flex-col h-full cursor-pointer"
                  >
                    <div className={`relative h-40 sm:h-48 overflow-hidden bg-gradient-to-br ${industry.color} flex items-center justify-center`}>
                      <div className="absolute inset-0 bg-black/20 mix-blend-overlay z-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                      <Icon className="w-20 h-20 text-white opacity-90 transform group-hover/card:scale-110 transition-transform duration-500 drop-shadow-xl" />
                    </div>
                    <div className="p-5 bg-white/5 backdrop-blur-md border-t border-white/5 flex-grow flex items-center justify-center">
                      <h3 className="text-base sm:text-lg font-bold text-slate-200 text-center group-hover/card:text-white transition-colors">
                        {industry.name}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex overflow-hidden group">
            <div className="flex w-max space-x-6 animate-marquee-reverse group-hover:[animation-play-state:paused] pr-6">
              {[...industries.slice(13), ...industries.slice(13)].map((industry, i) => {
                const Icon = industry.icon;
                return (
                  <div
                    key={i}
                    className="w-[280px] sm:w-[320px] shrink-0 group/card relative bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden hover:border-brand-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)] flex flex-col h-full cursor-pointer"
                  >
                    <div className={`relative h-40 sm:h-48 overflow-hidden bg-gradient-to-br ${industry.color} flex items-center justify-center`}>
                      <div className="absolute inset-0 bg-black/20 mix-blend-overlay z-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />
                      <Icon className="w-20 h-20 text-white opacity-90 transform group-hover/card:scale-110 transition-transform duration-500 drop-shadow-xl" />
                    </div>
                    <div className="p-5 bg-white/5 backdrop-blur-md border-t border-white/5 flex-grow flex items-center justify-center">
                      <h3 className="text-base sm:text-lg font-bold text-slate-200 text-center group-hover/card:text-white transition-colors">
                        {industry.name}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
