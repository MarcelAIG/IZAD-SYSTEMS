import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <section className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Photo/Graphic */}
          <div className="relative">
            {/* Soft background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-500/20 blur-[100px] rounded-full pointer-events-none"></div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-md mx-auto aspect-square rounded-[2rem] overflow-hidden bg-black/40 border border-white/10 backdrop-blur-md shadow-2xl"
            >
              {/* Abstract Animated Geometric Design: 3D Isometric Systems Core */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#050505] to-brand-900/20 flex items-center justify-center overflow-hidden perspective-[1200px]">
                
                <motion.div 
                  className="relative w-48 h-48 md:w-64 md:h-64"
                  animate={{ y: [-10, 10, -10], rotateX: [55, 60, 55], rotateZ: [-40, -45, -40] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  
                  {/* Top Layer: Interface / Cloud Layer */}
                  <motion.div 
                    animate={{ z: [50, 70, 50] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 border border-brand-400/40 bg-brand-500/10 backdrop-blur-md rounded-2xl shadow-[0_20px_50px_rgba(14,165,233,0.2)] flex items-center justify-center"
                    style={{ transform: 'translateZ(60px)' }}
                  >
                    <div className="w-1/2 h-1/2 border border-brand-300/50 rounded-full flex items-center justify-center">
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.8, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="w-1/2 h-1/2 bg-brand-400/60 rounded-full blur-md"
                      ></motion.div>
                    </div>
                  </motion.div>

                  {/* Middle Layer: Processing Core */}
                  <div 
                    className="absolute inset-0 border border-white/10 bg-black/60 backdrop-blur-xl rounded-2xl flex items-center justify-center shadow-2xl"
                    style={{ transform: 'translateZ(0px)' }}
                  >
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1], rotateZ: [0, 180, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="absolute w-24 h-24 bg-gradient-to-tr from-brand-500 to-blue-600 rounded-full blur-xl opacity-50"
                    ></motion.div>
                    <div className="absolute w-16 h-16 bg-black/80 rounded-lg border border-brand-500/50 flex flex-wrap gap-1 p-2 justify-center content-center z-10 shadow-[0_0_20px_rgba(14,165,233,0.4)]">
                      {[...Array(4)].map((_, i) => (
                        <motion.div 
                          key={i}
                          animate={{ opacity: [0.2, 1, 0.2] }}
                          transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                          className="w-4 h-4 bg-brand-400 rounded-sm"
                        ></motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Layer: Data Grid */}
                  <motion.div 
                    animate={{ z: [-50, -70, -50] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 border border-brand-500/20 bg-brand-900/30 backdrop-blur-sm rounded-2xl"
                    style={{ transform: 'translateZ(-60px)' }}
                  >
                    <div className="absolute inset-4 grid grid-cols-4 grid-rows-4 gap-2 opacity-30">
                       {[...Array(16)].map((_, i) => (
                         <motion.div 
                           key={i}
                           animate={{ opacity: [0.2, 0.8, 0.2] }}
                           transition={{ duration: 3, repeat: Infinity, delay: (i % 4) * 0.2 }}
                           className="bg-brand-500/60 rounded-sm"
                         ></motion.div>
                       ))}
                    </div>
                  </motion.div>

                  {/* Vertical Data Streams (Connecting lines) */}
                  <div className="absolute inset-0 flex justify-between items-center px-10 pointer-events-none" style={{ transform: 'rotateX(90deg) translateZ(0px)', transformStyle: 'preserve-3d' }}>
                    <motion.div 
                      animate={{ height: [0, 150, 0], opacity: [0, 1, 0], y: [-75, 0, 75] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="w-1 bg-brand-400 blur-sm"
                    ></motion.div>
                    <motion.div 
                      animate={{ height: [0, 150, 0], opacity: [0, 1, 0], y: [75, 0, -75] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
                      className="w-1 bg-brand-400 blur-sm"
                    ></motion.div>
                  </div>

                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-white mb-6 font-display leading-[1.1]">
                Why We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-600">Real Systems</span>
              </h2>
              
              <div className="space-y-6 text-lg text-slate-400 font-medium">
                <p>
                  We exist because we hate grunt work. We saw businesses burning hours on tasks that a well-trained AI could do instantly, without ever making a mistake.
                </p>
                <p>
                  At IZAD Systems, we don't just sell technology. We sell <strong className="text-white font-bold">time</strong>, <strong className="text-white font-bold">leverage</strong>, and <strong className="text-white font-bold">peace of mind</strong>. You focus on scaling your business; our systems will handle the noise.
                </p>
              </div>

              <div className="mt-10">
                <Link to="/contact" className="inline-flex items-center font-bold text-black bg-white hover:bg-slate-200 hover:scale-105 px-8 py-4 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                  Meet the Team
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
