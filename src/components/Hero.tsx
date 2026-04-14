import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-haus-black/70" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-coffee-400 text-sm md:text-base font-semibold tracking-[0.2em] uppercase mb-4">
            Welcome to 8thHausCafe
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-haus-beige mb-6 leading-tight">
            Where Taste <br /> Meets Comfort
          </h1>
          <p className="text-coffee-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            Experience the perfect blend of artisanal coffee, exquisite fast food, and a cozy atmosphere designed for your everyday escape.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#menu"
              className="px-8 py-4 bg-coffee-600 hover:bg-coffee-500 text-white font-medium tracking-wide uppercase text-sm transition-colors duration-300 w-full sm:w-auto text-center"
            >
              View Menu
            </a>
            <a 
              href="#reservation"
              className="px-8 py-4 bg-transparent border border-coffee-400 text-coffee-100 hover:bg-coffee-400/10 font-medium tracking-wide uppercase text-sm transition-colors duration-300 w-full sm:w-auto text-center"
            >
              Book a Table
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-coffee-300 text-xs uppercase tracking-widest">Scroll</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-[1px] h-12 bg-gradient-to-b from-coffee-400 to-transparent"
        />
      </motion.div>
    </section>
  );
}
