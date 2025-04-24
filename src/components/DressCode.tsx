import React from 'react';
import { invitationData } from '../data/invitationData';

const DressCode: React.FC = () => {
  return (
    <div className="text-center bg-gray-50 p-8 rounded-lg shadow-md max-w-2xl mx-auto">
      <h3 className="text-2xl font-serif text-[#0047AB] mb-4">Código de Vestimenta</h3>
      <p className="text-xl text-gray-700 mb-6">{invitationData.dresscode}</p>
      
      <div className="mb-6">
        <img 
          src="/images/dress-code.png" 
          alt="Código de vestimenta" 
          className="max-w-full h-auto mx-auto" 
        />
      </div>
      
      <p className="mt-4 text-gray-600">Usa el hashtag en tus fotos</p>
      <p className="text-[#0047AB] text-lg font-medium">{invitationData.hashtag}</p>
    </div>
  );
};

export default DressCode;
