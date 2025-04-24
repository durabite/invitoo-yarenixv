import React from 'react';
import GiftRegistry from './GiftRegistry';
import Parents from './Parents';
import DressCode from './DressCode';

const EventInfo: React.FC = () => {
  return (
    <section id="evento" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Parents and Godparents */}
        <Parents />

        {/* Gift Registry */}
        <GiftRegistry />

        {/* Dress Code */}
        <DressCode />
      </div>
    </section>
  );
};

export default EventInfo;