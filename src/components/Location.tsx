import React from 'react';
import { invitationData } from '../data/invitationData';
import { MapPin } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="ubicación" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-[#0047AB] mb-4">Ubicación</h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Encuentra fácilmente las ubicaciones de la ceremonia y la recepción.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Church Location */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="text-[#D4AF37] mr-2" size={24} />
              <h3 className="text-2xl font-serif text-[#0047AB]">Ceremonia</h3>
            </div>
            <p className="text-gray-700 mb-4">{invitationData.event.church?.name}</p>
            <p className="text-gray-600 mb-6">{invitationData.event.church?.address}</p>
            
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.661514624603!2d-99.17342492552186!3d19.42702968185878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff574c7d4549%3A0x96bdf28cb411c96f!2sAngel%20of%20Independence!5e0!3m2!1sen!2sus!4v1701416745985!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Church Location"
                ></iframe>
              </div>
            </div>
            
            <a 
              href={`https://maps.google.com/?q=${encodeURIComponent(invitationData.event.church?.address || '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 py-2 px-6 bg-[#0047AB] text-white rounded hover:bg-[#003A8C] transition-colors"
            >
              Cómo llegar
            </a>
          </div>
          
          {/* Reception Location */}
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="text-[#D4AF37] mr-2" size={24} />
              <h3 className="text-2xl font-serif text-[#0047AB]">Recepción</h3>
            </div>
            <p className="text-gray-700 mb-4">{invitationData.event.reception?.name}</p>
            <p className="text-gray-600 mb-6">{invitationData.event.reception?.address}</p>
            
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.8792454877056!2d-99.19119752552207!3d19.41721198187223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff75334a1447%3A0x88d7dd82a41fb0b5!2sChapultepec%20Castle!5e0!3m2!1sen!2sus!4v1701416828369!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Reception Location"
                ></iframe>
              </div>
            </div>
            
            <a 
              href={`https://maps.google.com/?q=${encodeURIComponent(invitationData.event.reception?.address || '')}`}
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