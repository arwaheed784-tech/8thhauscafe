import { motion } from 'motion/react';

export default function Reservation() {
  return (
    <section id="reservation" className="py-24 md:py-32 bg-[#0f0c0a] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center mb-16">
          <h3 className="text-coffee-500 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Join Us
          </h3>
          <h2 className="text-4xl md:text-5xl font-serif text-haus-beige">
            Book a Table
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-haus-black p-8 md:p-12 border border-coffee-900/50 shadow-2xl"
        >
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
            
            <div className="flex flex-col space-y-2">
              <label htmlFor="name" className="text-xs uppercase tracking-widest text-coffee-300">Name</label>
              <input 
                type="text" 
                id="name" 
                className="bg-transparent border-b border-coffee-800 py-2 text-coffee-50 focus:outline-none focus:border-coffee-400 transition-colors"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="phone" className="text-xs uppercase tracking-widest text-coffee-300">Phone</label>
              <input 
                type="tel" 
                id="phone" 
                className="bg-transparent border-b border-coffee-800 py-2 text-coffee-50 focus:outline-none focus:border-coffee-400 transition-colors"
                placeholder="Your Phone Number"
                required
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="date" className="text-xs uppercase tracking-widest text-coffee-300">Date</label>
              <input 
                type="date" 
                id="date" 
                className="bg-transparent border-b border-coffee-800 py-2 text-coffee-50 focus:outline-none focus:border-coffee-400 transition-colors [color-scheme:dark]"
                required
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label htmlFor="time" className="text-xs uppercase tracking-widest text-coffee-300">Time</label>
              <input 
                type="time" 
                id="time" 
                className="bg-transparent border-b border-coffee-800 py-2 text-coffee-50 focus:outline-none focus:border-coffee-400 transition-colors [color-scheme:dark]"
                required
              />
            </div>

            <div className="flex flex-col space-y-2 md:col-span-2">
              <label htmlFor="guests" className="text-xs uppercase tracking-widest text-coffee-300">Guests</label>
              <select 
                id="guests" 
                className="bg-transparent border-b border-coffee-800 py-2 text-coffee-50 focus:outline-none focus:border-coffee-400 transition-colors appearance-none"
                required
              >
                <option value="1" className="bg-haus-black">1 Person</option>
                <option value="2" className="bg-haus-black">2 People</option>
                <option value="3" className="bg-haus-black">3 People</option>
                <option value="4" className="bg-haus-black">4 People</option>
                <option value="5+" className="bg-haus-black">5+ People</option>
              </select>
            </div>

            <div className="md:col-span-2 mt-8 text-center">
              <button 
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-coffee-600 hover:bg-coffee-500 text-white font-medium tracking-wide uppercase text-sm transition-colors duration-300"
              >
                Confirm Reservation
              </button>
            </div>

          </form>
        </motion.div>

      </div>
    </section>
  );
}
