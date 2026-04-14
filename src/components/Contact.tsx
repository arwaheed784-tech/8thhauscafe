import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-haus-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-coffee-500 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
              Get in Touch
            </h3>
            <h2 className="text-4xl md:text-5xl font-serif text-haus-beige mb-10">
              Contact Us
            </h2>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="text-coffee-400 mt-1" size={24} />
                <div>
                  <h4 className="text-coffee-100 font-serif text-xl mb-1">Location</h4>
                  <p className="text-coffee-200/70 font-light">656 S Brookhurst st.<br />Anaheim, CA 92804</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-coffee-400 mt-1" size={24} />
                <div>
                  <h4 className="text-coffee-100 font-serif text-xl mb-1">Phone</h4>
                  <p className="text-coffee-200/70 font-light">(714) 774-8013</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="text-coffee-400 mt-1" size={24} />
                <div>
                  <h4 className="text-coffee-100 font-serif text-xl mb-1">Email</h4>
                  <p className="text-coffee-200/70 font-light">info@8thhauscafe.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="text-coffee-400 mt-1" size={24} />
                <div>
                  <h4 className="text-coffee-100 font-serif text-xl mb-1">Hours</h4>
                  <p className="text-coffee-200/70 font-light">Mon - Fri: 7:00 AM - 8:00 PM<br />Sat - Sun: 8:00 AM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[400px] lg:h-auto min-h-[400px] w-full bg-coffee-900/20 border border-coffee-800/30 relative"
          >
            <iframe 
              src="https://maps.google.com/maps?q=656%20S%20Brookhurst%20st.%20Anaheim,%20CA%2092804&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              className="absolute inset-0 w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
