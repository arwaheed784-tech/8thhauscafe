import { useState } from 'react';
import { motion } from 'motion/react';

const menuData = {
  Coffee: [
    { name: "Cappuccino", price: "$4", description: "Rich espresso with steamed milk" },
    { name: "Latte", price: "$4.5", description: "Smooth and creamy delight" }
  ],
  'Fast Food': [
    { name: "Zinger Burger", price: "$6", description: "Crispy chicken burger" },
    { name: "Fries", price: "$2.5", description: "Golden crispy fries" }
  ],
  Desserts: [
    { name: "Chocolate Cake", price: "$5", description: "Moist and rich" },
    { name: "Brownie", price: "$3", description: "Fudgy goodness" }
  ],
  Drinks: [
    { name: "Mojito", price: "$3", description: "Refreshing mint drink" },
    { name: "Cold Coffee", price: "$4", description: "Chilled coffee treat" }
  ]
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof menuData>('Coffee');

  return (
    <section id="menu" className="py-24 md:py-32 bg-[#0f0c0a] relative">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-16">
          <h3 className="text-coffee-500 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
            Discover
          </h3>
          <h2 className="text-4xl md:text-5xl font-serif text-haus-beige">
            Our Menu
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
          {(Object.keys(menuData) as Array<keyof typeof menuData>).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-sm md:text-base tracking-widest uppercase pb-2 transition-all duration-300 border-b-2 ${
                activeCategory === category 
                  ? 'border-coffee-500 text-haus-beige' 
                  : 'border-transparent text-coffee-400/60 hover:text-coffee-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12"
        >
          {menuData[activeCategory].map((item, index) => (
            <div key={index} className="group">
              <div className="flex justify-between items-baseline mb-2">
                <h4 className="text-lg font-serif text-coffee-100 group-hover:text-coffee-400 transition-colors">
                  {item.name}
                </h4>
                <div className="flex-grow border-b border-dashed border-coffee-800/50 mx-4 relative top-[-6px]" />
                <span className="text-coffee-300 font-medium">{item.price}</span>
              </div>
              <p className="text-sm text-coffee-200/70 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
