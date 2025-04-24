import React from 'react';
import { invitationData } from '../data/invitationData';

const GiftRegistry: React.FC = () => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-md max-w-2xl mx-auto text-center mb-16">
      <div className="flex items-center justify-center mx-auto mb-4">
        <img 
          src="/images/liverpool-face-300x300.png" 
          alt="Liverpool" 
          className="w-auto h-auto max-w-[150px] max-h-[150px] object-contain" 
        />
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
        className="inline-block py-2 px-6 bg-[#e10098] text-white rounded hover:bg-[#c10085] transition-colors"
      >
        Ver Mesa de Regalos
      </a>
    </div>
  );
};

export default GiftRegistry;
