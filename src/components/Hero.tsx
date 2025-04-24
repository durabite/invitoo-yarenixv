import React, { useEffect, useState } from 'react';
import { invitationData } from '../data/invitationData';
import { Sparkles, Music, Quote } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Calculate countdown
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  useEffect(() => {
    const targetDate = new Date('2025-07-19T13:30:00');
    
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference <= 0) {
        clearInterval(interval);
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setCountdown({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image - enchanted forest theme */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/167698/pexels-photo-167698.jpeg?auto=compress&cs=tinysrgb&w=1600')",
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
        
        <div className="mb-8">
          <h4 className="text-white text-xl mb-2">Cuenta regresiva para mi gran día</h4>
          <p className="text-[#D4AF37] text-lg mb-4">{invitationData.celebrant.date}</p>
          
          <div className="border-t border-b border-[#D4AF37] py-8 px-4 md:px-8 inline-block">
            <div className="flex justify-center space-x-4 md:space-x-8">
              {[
                { label: 'Días', value: countdown.days },
                { label: 'Horas', value: countdown.hours },
                { label: 'Minutos', value: countdown.minutes },
                { label: 'Segundos', value: countdown.seconds }
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-2xl md:text-4xl font-bold text-white">{item.value}</div>
                  <div className="text-xs md:text-sm uppercase text-[#D4AF37] tracking-wider">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto mb-12 text-white">
          <Quote className="text-[#D4AF37] mx-auto mb-4" size={24} />
          <p className="italic mb-4">{invitationData.celebrant.quote.text}</p>
          <p className="text-[#D4AF37]">- {invitationData.celebrant.quote.author}</p>
          <p className="text-sm text-gray-300">"{invitationData.celebrant.quote.book}"</p>
        </div>
        
        <a 
          href="#rsvp" 
          className="inline-block py-3 px-8 bg-[#D4AF37] text-white rounded border-2 border-[#D4AF37] hover:bg-transparent hover:text-white transition-all duration-300"
        >
          Confirmar Asistencia
        </a>
      </div>
    </section>
  );
};

export default Hero;