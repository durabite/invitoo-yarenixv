import React from 'react';
import { MapPin } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="ubicación" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-[#0047AB] mb-4">Ubicación</h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
        </div>
        <div className="max-w-3xl mx-auto">
          {/* Combined Location */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="text-[#D4AF37] mr-2" size={24} />
              <h3 className="text-2xl font-serif text-[#0047AB]">Ceremonia y recepción</h3>
            </div>
            <p className="text-gray-700 mb-2">Jardín San Fernando, Tierra Viva</p>
            <p className="text-gray-600 mb-6">San Fernando, número 154, Centro de Tlalpan</p>
            
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.5214371345!2d-99.1704887!3d19.2691687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce01a4c46f5e49%3A0x2c5f5e1c14fbc4c2!2sSan%20Fernando%20154%2C%20Tlalpan%20Centro%20I%2C%20Tlalpan%2C%2014000%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX%2C%20M%C3%A9xico!5e0!3m2!1ses-419!2smx!4v1714026332053!5m2!1ses-419!2smx" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ceremonia y recepción"
                ></iframe>
              </div>
            </div>
            
            <a 
              href="https://maps.app.goo.gl/1df7Pxe38JkqGWvM7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 py-2 px-6 bg-[#0047AB] text-white rounded hover:bg-[#003A8C] transition-colors"
            >
              Cómo llegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;