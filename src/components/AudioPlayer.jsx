import React, { useEffect, useRef } from 'react';

function AudioPlayer({ src, onEnded, onTimeUpdate, initialTime }) {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener('ended', onEnded);
    audio.addEventListener('timeupdate', onTimeUpdate);
    audio.currentTime = initialTime;
    return () => {
      audio.removeEventListener('ended', onEnded);
      audio.removeEventListener('timeupdate', onTimeUpdate);
    };
  }, []);

  return <audio controls ref={audioRef} src={src} autoPlay />;
}

export default AudioPlayer;