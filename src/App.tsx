import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CountDown from './components/CountDown';
import EventInfo from './components/EventInfo';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Change the document title
    document.title = "Mis XV Años - Sofía Anahí";
    
    // Add custom font from Google Fonts
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&family=Raleway:wght@300;400;500;600&display=swap';
    document.head.appendChild(link);
    
    // Add custom styles
    const style = document.createElement('style');
    style.textContent = `
      .font-serif {
        font-family: 'Playfair Display', serif;
      }
      body {
        font-family: 'Raleway', sans-serif;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(link);
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="antialiased">
      <Header />
      <Hero />
      <CountDown />
      <EventInfo />
      <Gallery />
      <RSVP />
      <Location />
      <Footer />
    </div>
  );
}

export default App;