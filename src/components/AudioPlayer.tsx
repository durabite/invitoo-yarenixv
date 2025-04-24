import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

interface AudioPlayerProps {
  audioSrc: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioSrc }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  
  useEffect(() => {
    // Establecer el volumen al 50% cuando el componente se monte
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <audio 
        ref={audioRef} 
        src={audioSrc}
        onEnded={() => setIsPlaying(false)}
        // Ocultar los controles nativos del navegador
        controls={false}
      />
      
      <button 
        onClick={togglePlayPause}
        className="flex items-center justify-center p-2 bg-[#D4AF37] rounded-full hover:bg-[#c49c31] transition-colors"
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        {isPlaying ? (
          <Pause size={18} className="text-white" />
        ) : (
          <Play size={18} className="text-white" />
        )}
      </button>
    </div>
  );
};

export default AudioPlayer;
