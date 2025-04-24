import React, { useEffect, useState } from 'react';
import { invitationData } from '../data/invitationData';

const CountDown: React.FC = () => {
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
    <section className="py-16 bg-[#0047AB] text-white">
      <div className="container mx-auto px-4 text-center">
        <h4 className="text-white text-2xl mb-4">Cuenta regresiva para mi gran día</h4>
        <p className="text-[#D4AF37] text-lg mb-2">{invitationData.celebrant.date}</p>
        <p className="text-white text-lg mb-8">13:30 hrs</p>
        
        <div className="inline-block border-t border-b border-[#D4AF37] py-8 px-4 md:px-8">
          <div className="flex justify-center space-x-4 md:space-x-12">
            {[
              { label: 'Días', value: countdown.days },
              { label: 'Horas', value: countdown.hours },
              { label: 'Minutos', value: countdown.minutes },
              { label: 'Segundos', value: countdown.seconds }
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-3xl md:text-5xl font-bold text-white">{item.value}</div>
                <div className="text-xs md:text-sm uppercase text-[#D4AF37] tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountDown;
