import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-haus-black relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop" 
                alt="Cafe Interior" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative border */}
            <div className="absolute -bottom-6 -left-6 w-full h-full border border-coffee-700/30 z-0 hidden md:block" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-coffee-900/20 z-0 hidden md:block" />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-coffee-500 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Our Story
            </h3>
            <h2 className="text-4xl md:text-5xl font-serif text-haus-beige mb-6 leading-tight">
              A Modern Vibe with <br /> Classic Warmth
            </h2>
            
            <div className="space-y-6 text-coffee-200 font-light leading-relaxed">
              <p className="text-xl">
                8thHausCafe is a cozy place where modern taste meets comfort. Enjoy premium coffee, delicious food, and a relaxing environment.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-6">
              <div className="text-center">
                <span className="block text-3xl font-serif text-haus-beige mb-1">10+</span>
                <span className="text-xs uppercase tracking-wider text-coffee-400">Coffee Blends</span>
              </div>
              <div className="w-px h-12 bg-coffee-800/50" />
              <div className="text-center">
                <span className="block text-3xl font-serif text-haus-beige mb-1">Artisan</span>
                <span className="text-xs uppercase tracking-wider text-coffee-400">Pastries & Food</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
