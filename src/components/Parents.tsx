import React from 'react';
import { Users } from 'lucide-react';

const Parents: React.FC = () => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-md max-w-2xl mx-auto text-center mb-16">
      <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif text-[#0047AB] mb-4">Celebración</h2>
                <div className="w-20 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Tengo el honor de invitarte a la celebración de mis XV años.
                </p>
              </div>
      <div className="w-16 h-16 bg-[#0047AB] rounded-full flex items-center justify-center mx-auto mb-6">
        <Users className="text-white" size={28} />
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-serif text-[#0047AB] mb-4">Con la bendición de mis padres</h3>
        <p className="text-lg text-gray-700 font-medium">JORGE FIGUEROA OLIVERA</p>
        <p className="text-lg text-gray-700 font-medium">VERÓNICA RUIZ GONZÁLEZ</p>
      </div>
      
      <div>
        <h3 className="text-xl font-serif text-[#0047AB] mb-4">Y la compañía de mis padrinos</h3>
        <p className="text-lg text-gray-700 font-medium">ALFREDO RODRÍGUEZ JUÁREZ</p>
        <p className="text-lg text-gray-700 font-medium">ERENDIRA RUIZ GONZÁLEZ</p>
      </div>
    </div>
  );
};

export default Parents;
