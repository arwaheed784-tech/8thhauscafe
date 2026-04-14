import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reservation', href: '#reservation' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 pt-6 px-4 md:px-8 pointer-events-none flex items-center justify-center">
      {/* Logo outside the box */}
      <a href="#home" className="absolute left-4 md:left-8 pointer-events-auto text-xl md:text-2xl font-serif font-bold tracking-wider text-haus-beige drop-shadow-md">
        8thHaus<span className="text-coffee-500">Cafe</span>
      </a>

      <nav
        className={`pointer-events-auto transition-all duration-300 rounded-full border ${
          isScrolled 
            ? 'bg-haus-black/95 backdrop-blur-md py-3 px-6 md:px-8 shadow-lg border-coffee-900/50' 
            : 'bg-haus-black/40 backdrop-blur-md py-3 px-6 md:px-8 border-coffee-900/30'
        } flex items-center`}
      >
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs lg:text-sm font-medium tracking-wide text-coffee-100 hover:text-coffee-400 transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-coffee-100 hover:text-coffee-400 transition-colors shrink-0 flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[80px] left-4 right-4 bg-haus-black border border-coffee-900/50 shadow-xl rounded-2xl md:hidden pointer-events-auto overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-coffee-100 hover:text-coffee-400 transition-colors py-3 border-b border-coffee-900/30 last:border-0"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
