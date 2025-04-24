import React from 'react';
import ImageCarousel from './ImageCarousel';

const Gallery: React.FC = () => {
  return (
    <section id="galería" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-[#0047AB] mb-4">Galería</h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Algunos momentos especiales de mi vida que quiero compartir contigo.
          </p>
        </div>

        <ImageCarousel />
      </div>
    </section>
  );
};

export default Gallery;