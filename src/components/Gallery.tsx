import { motion } from 'motion/react';

const images = [
  { src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop', alt: 'Buffet-style creamy chicken and fried food display at 8thHausCafe' },
  { src: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop', alt: 'Coffee pouring' },
  { src: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=80&w=800&auto=format&fit=crop', alt: 'Cafe interior' },
  { src: 'https://images.unsplash.com/photo-1484723091791-c0d7f511f466?q=80&w=800&auto=format&fit=crop', alt: 'Avocado toast' },
  { src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=800&auto=format&fit=crop', alt: 'Barista making coffee' },
  { src: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop', alt: 'Dessert' },
  { src: 'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=800&auto=format&fit=crop', alt: 'Cozy seating' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-haus-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <h3 className="text-coffee-500 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Atmosphere
          </h3>
          <h2 className="text-4xl md:text-5xl font-serif text-haus-beige">
            Gallery
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-hidden group rounded-xl shadow-lg shadow-black/50 border border-coffee-900/20"
            >
              <div className="aspect-square w-full">
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  loading="lazy"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-haus-black/20 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
