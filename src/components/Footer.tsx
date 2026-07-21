export function Footer() {
  return (
    <footer className="border-t border-white/[0.05] bg-black relative z-10 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <span className="text-2xl font-extrabold tracking-tighter text-white mb-4 md:mb-0 font-display">
            IZAD SYSTEMS<span className="text-brand-500">.</span>
          </span>
          <p className="text-zinc-600 font-bold">
            &copy; {new Date().getFullYear()} Izad Systems.
          </p>
        </div>
      </div>
    </footer>
  );
}
