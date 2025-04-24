import React from 'react';
import { invitationData } from '../data/invitationData';
import { MapPin, Calendar, Gift, Users, Phone } from 'lucide-react';

const EventInfo: React.FC = () => {
  return (
    <section id="evento" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-[#0047AB] mb-4">Celebración</h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Con la bendición de mis padres, tengo el honor de invitarte a la celebración de mis XV años.
          </p>
        </div>

        {/* Parents and Godparents */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-[#0047AB] rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-serif text-[#0047AB] mb-4">Mis Padres</h3>
            <p className="text-xl text-gray-700">{invitationData.parents.father}</p>
            <p className="text-xl text-gray-700">{invitationData.parents.mother}</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[#0047AB] rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-serif text-[#0047AB] mb-4">Mis Padrinos</h3>
            <p className="text-xl text-gray-700">{invitationData.godparents.godfather}</p>
            <p className="text-xl text-gray-700">{invitationData.godparents.godmother}</p>
          </div>
        </div>

        {/* Venue Information */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md border-t-4 border-[#0047AB] hover:shadow-lg transition-shadow duration-300 mb-16">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-[#0047AB] rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="text-white" size={28} />
            </div>
            <h3 className="text-2xl font-serif text-[#0047AB]">Ceremonia y Recepción</h3>
          </div>
          
          <div className="space-y-4 text-center">
            <div className="flex items-center justify-center">
              <MapPin className="text-[#D4AF37] mr-3" size={20} />
              <div>
                <p className="font-medium text-gray-800">{invitationData.event.venue.name}</p>
                <p className="text-gray-600">{invitationData.event.venue.address}</p>
              </div>
            </div>
            
            <a 
              href={invitationData.event.venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 py-2 px-6 bg-[#0047AB] text-white rounded hover:bg-[#003A8C] transition-colors"
            >
              Ver ubicación
            </a>
          </div>
        </div>

        {/* Gift Registry */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md max-w-2xl mx-auto text-center mb-16">
          <div className="w-16 h-16 bg-[#0047AB] rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift className="text-white" size={28} />
          </div>
          <h3 className="text-2xl font-serif text-[#0047AB] mb-4">Mesa de Regalos</h3>
          <p className="text-gray-600 mb-6">{invitationData.giftRegistry.message}</p>
          <p className="text-gray-700 mb-2">
            Liverpool: {invitationData.giftRegistry.number}
          </p>
          <a 
            href={invitationData.giftRegistry.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-2 px-6 bg-[#0047AB] text-white rounded hover:bg-[#003A8C] transition-colors"
          >
            Ver Mesa de Regalos
          </a>
        </div>

        {/* Dress Code */}
        <div className="text-center bg-gray-50 p-8 rounded-lg shadow-md max-w-2xl mx-auto">
          <h3 className="text-2xl font-serif text-[#0047AB] mb-4">Código de Vestimenta</h3>
          <p className="text-xl text-gray-700">{invitationData.dresscode}</p>
          <p className="mt-4 text-gray-600">Usa el hashtag en tus fotos</p>
          <p className="text-[#0047AB] text-lg font-medium">{invitationData.hashtag}</p>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;