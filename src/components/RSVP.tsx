import React, { useState, FormEvent } from 'react';
import { CheckCircle, Send, MessageCircle } from 'lucide-react';
import { invitationData } from '../data/invitationData';

interface FormData {
  name: string;
  email: string;
  phone: string;
  guests: string;
  attending: string;
  message: string;
}

const RSVP: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("¡Hola! Quiero confirmar mi asistencia a tus XV años.");
    window.open(`https://wa.me/${invitationData.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section id="rsvp" className="py-20 bg-[#0047AB] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Confirma tu Asistencia</h2>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-gray-200 max-w-2xl mx-auto mb-8">
            ¡Gracias por compartir conmigo este día tan especial!
            Favor de confirmar asistencia lo antes posible.
          </p>

          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center justify-center px-8 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-lg transition-colors duration-300"
          >
            <MessageCircle className="mr-2" size={20} />
            Confirmar por WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default RSVP;