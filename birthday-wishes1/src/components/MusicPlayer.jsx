import { useState, useEffect, useRef } from 'react';
import './MusicPlayer.css';

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showEnable, setShowEnable] = useState(true);

  useEffect(() => {
    // Use this path construction for Vite projects
    audioRef.current = new Audio(`${import.meta.env.BASE_URL}song.mp3`);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.7;

    // Error handling
    audioRef.current.addEventListener('error', (e) => {
      console.error('Audio error:', e.target.error);
      setShowEnable(true);
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener('error', () => {});
        audioRef.current = null;
      }
    };
  }, []);

  const handlePlay = async () => {
    try {
      await audioRef.current.play();
      setIsPlaying(true);
      setShowEnable(false);
    } catch (err) {
      console.error("Playback failed:", err);
      setShowEnable(true);
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      handlePlay();
    }
  };

  return (
    <div className="music-player">
      {showEnable ? (
        <button 
          className="enable-button"
          onClick={handlePlay}
        >
          🔈 Enable Music
        </button>
      ) : (
        <div className="controls">
          <button onClick={togglePlay}>
            {isPlaying ? '🔊' : '🔇'}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            defaultValue="0.7"
            onChange={(e) => {
              audioRef.current.volume = parseFloat(e.target.value);
            }}
          />
        </div>
      )}
    </div>
  );
}