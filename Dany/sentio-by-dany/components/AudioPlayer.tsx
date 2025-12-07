import React, { useState, useRef, useEffect } from 'react';
import { Music, Volume2 } from 'lucide-react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // 1. Attempt immediate autoplay (works in some configs/browsers)
    const attemptPlay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Autoplay blocked. Waiting for user interaction.");
      }
    };

    attemptPlay();

    // 2. Fallback: Play on first user interaction (Click, Touch, Keypress)
    const handleUserInteraction = async () => {
      if (audio.paused) {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch (e) {
          console.error("Playback failed even after interaction", e);
        }
      }
      // Clean up listeners once we've tried to play
      cleanUpListeners();
    };

    const cleanUpListeners = () => {
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };

    // Add listeners to the entire document
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);

    return () => {
      cleanUpListeners();
    };
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Audio play interaction required:", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 transition-transform duration-300 hover:scale-105">
      <audio
        ref={audioRef}
        loop
        preload="auto"
      >
        {/* Relaxing Zen/Spa Music Source */}
        <source src="https://cdn.pixabay.com/audio/2022/05/27/audio_1808fbf07a.mp3" type="audio/mpeg" />
      </audio>
      
      <button
        onClick={toggleAudio}
        className={`
          group flex items-center gap-3 px-4 py-3 rounded-full 
          backdrop-blur-md border transition-all duration-500 ease-out
          shadow-[0_4px_20px_rgba(0,0,0,0.3)]
          ${isPlaying 
            ? 'bg-magenta/90 border-magenta/50 text-white shadow-[0_0_20px_rgba(219,39,119,0.4)]' 
            : 'bg-royal/60 border-white/10 text-white/70 hover:bg-royal/80 hover:text-gold hover:border-gold/30'
          }
        `}
        aria-label={isPlaying ? "Mute relaxing music" : "Play relaxing music"}
      >
        <div className="relative flex items-center justify-center">
          {isPlaying ? (
            <>
              <Volume2 className="w-5 h-5 animate-pulse" />
              <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-20 animate-ping"></span>
            </>
          ) : (
            <Music className="w-5 h-5" />
          )}
        </div>
        
        <span className={`
          text-xs font-medium tracking-widest uppercase whitespace-nowrap transition-all duration-500 overflow-hidden
          ${isPlaying ? 'w-auto opacity-100' : 'w-0 opacity-0 group-hover:w-auto group-hover:opacity-100'}
        `}>
          {isPlaying ? 'Relaxing...' : 'Play Music'}
        </span>
      </button>
    </div>
  );
};