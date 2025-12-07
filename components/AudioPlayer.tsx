
import React, { useState, useRef, useEffect } from 'react';
import { Music, Volume2 } from 'lucide-react';

const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // CRITICAL: Set volume to 10% (0.1) to be extremely subtle
    audio.volume = 0.1;

    // 1. Attempt immediate autoplay
    const attemptPlay = async () => {
      try {
        await audio.play();
      } catch (error) {
        // Autoplay blocked by browser policy (expected in many cases)
        console.log("Autoplay waiting for interaction");
      }
    };
    attemptPlay();

    // 2. Fallback: Play on first user interaction (click, scroll, touch)
    // This makes it feel "automatic" to the user as soon as they touch the site
    const handleInteraction = async () => {
      if (audio.paused) {
        try {
          await audio.play();
        } catch (e) {
          // Ignore interruption errors
        }
      }
      // Clean up listeners immediately after first success
      ['click', 'keydown', 'touchstart', 'scroll'].forEach(event => 
        document.removeEventListener(event, handleInteraction)
      );
    };

    ['click', 'keydown', 'touchstart', 'scroll'].forEach(event => 
      document.addEventListener(event, handleInteraction, { once: true })
    );

    return () => {
      ['click', 'keydown', 'touchstart', 'scroll'].forEach(event => 
        document.removeEventListener(event, handleInteraction)
      );
    };
  }, []);

  const toggleAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
      } else {
        audio.pause();
      }
    } catch (error) {
      // Specifically catch AbortError which happens if play is interrupted by pause
      if (error instanceof Error && error.name === 'AbortError') {
         // This is expected during rapid toggling, ignore it
         return;
      }
      console.error("Audio toggle error:", error);
    }
  };

  // Sync state with actual audio events to prevent UI desync
  const onPlay = () => setIsPlaying(true);
  const onPause = () => setIsPlaying(false);

  return (
    <div className="fixed bottom-6 left-6 z-50 transition-transform duration-300 hover:scale-105">
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onPlay={onPlay}
        onPause={onPause}
      >
        {/* Deep Relaxation / Spa Music */}
        <source src="https://files.catbox.moe/go8q8l.mp3" type="audio/mpeg" />
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

export default AudioPlayer;
