import React from 'react';
import { Heart, Instagram, Facebook, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#0047AB] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <button
              onClick={scrollToTop}
              className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center hover:bg-white hover:text-[#0047AB] transition-colors"
              aria-label="Volver arriba"
            >
              <ArrowUp size={24} />
            </button>
          </div>
          
          <div className="text-center mb-8">
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center justify-center mb-2">
                <Heart className="text-[#D4AF37] mx-1" size={16} />
                <p>19 de Julio, 2025</p>
                <Heart className="text-[#D4AF37] mx-1" size={16} />
              </div>
              <img 
                src="/images/yareni-firma.png" 
                alt="Firma de Yareni" 
                className="max-w-[200px] h-auto" 
              />
            </div>
          </div>
          
          <div className="flex space-x-4 mb-8">
            <a
              href="https://www.instagram.com/yare.figu"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/Verorug"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4AF37] transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
          </div>
          
          <div className="text-center w-full text-sm text-gray-300">
            <div className="flex items-center justify-center">
              <span>&copy; 2025 | Mis XV Años - Con</span>
              <Heart className="text-[#D4AF37] mx-1" size={14} />
              <span>Yareni</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;