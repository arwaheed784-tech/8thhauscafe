import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0807] border-t border-coffee-900/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-serif font-bold tracking-wider text-haus-beige block mb-4">
              8thHaus<span className="text-coffee-500">Cafe</span>
            </a>
            <p className="text-coffee-200/60 font-light text-sm max-w-xs mb-4">
              Where taste meets comfort. Your daily escape for artisanal coffee and exquisite food.
            </p>
            <div className="text-coffee-200/60 font-light text-sm space-y-1">
              <p>📍 656 S Brookhurst st, Anaheim, CA 92804</p>
              <p>📞 (714) 774-8013</p>
            </div>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-coffee-300 hover:text-coffee-500 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-coffee-300 hover:text-coffee-500 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-coffee-300 hover:text-coffee-500 transition-colors">
              <Twitter size={24} />
            </a>
          </div>

        </div>

        <div className="border-t border-coffee-900/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-coffee-200/50 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} 8thHausCafe. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-coffee-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-coffee-300 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
