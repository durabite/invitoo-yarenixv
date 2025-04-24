import React, { useEffect, useState } from 'react';
import { invitationData } from '../data/invitationData';
import { Sparkles, Music, Quote } from 'lucide-react';
import AudioPlayer from './AudioPlayer';
import CoverPhoto from './CoverPhoto';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image - enchanted forest theme */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('images/bg-bosque.png')",
          filter: "brightness(0.4)"
        }}
      ></div>
      
      {/* Content container */}
      <div className={`relative z-10 text-center px-4 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="mb-6 flex justify-center">
          <Sparkles className="text-[#D4AF37]" size={32} />
        </div>
        
        <h2 className="text-xl md:text-2xl text-white font-light uppercase tracking-widest mb-4">
          Te invito a celebrar conmigo
        </h2>
        
        <h3 className="text-xl text-[#D4AF37] mb-4">Mis Quince Años</h3>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
          {invitationData.celebrant.name}
        </h1>

        <div className="flex items-center justify-center text-[#D4AF37] mb-6">
          <Music size={20} className="mr-2" />
          <p className="text-lg">{invitationData.celebrant.song}</p>
        </div>
        
        <div className="mb-4">
          <AudioPlayer audioSrc="/audios/million-dreams.mp3" />
        </div>
        
        <CoverPhoto 
          imageSrc="/images/yareni-cover.jpg"
          altText="Yareni"
        />
        
        <div className="max-w-2xl mx-auto mb-12 text-white">
          <Quote className="text-[#D4AF37] mx-auto mb-4" size={24} />
          <p className="italic mb-4">{invitationData.celebrant.quote.text}</p>
          <p className="text-[#D4AF37]">- {invitationData.celebrant.quote.author}</p>
          <p className="text-sm text-gray-300">"{invitationData.celebrant.quote.book}"</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;