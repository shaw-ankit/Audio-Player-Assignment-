import './App.css';
import React, { useState, useEffect } from 'react';
import FileInput from './components/FileInput';
import Playlist from './components/Playlist';
import AudioPlayer from './components/AudioPlayer';


function App() {
  const [playlist, setPlaylist] = useState(JSON.parse(localStorage.getItem('playlist') ?? '[]'));
  const [currentIndex, setCurrentIndex] = useState(+localStorage.getItem('currentIndex'));
  const [currentTime, setCurrentTime] = useState(+localStorage.getItem('currentTime'));


  const handleFileChange = (files) => {
    const newPlaylist = files.map((file) => ({ name: file.name, url: URL.createObjectURL(file) }));
    setPlaylist((prev) => [...prev, ...newPlaylist]);
  };

  const handleEnded = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % playlist.length);
  };

  const handlePlaylistChange = (index) => {
    setCurrentIndex(index);
  };

  const handleTimeUpdate = (e) => {
    setCurrentTime(e.target.currentTime);
  };

  useEffect(() => {
    localStorage.setItem('playlist', JSON.stringify(playlist));
    localStorage.setItem('currentIndex', JSON.stringify(currentIndex));
    localStorage.setItem('currentTime', JSON.stringify(currentTime));
  }, [playlist, currentIndex, currentTime]);

  useEffect(() => {
    const storedPlaylist = JSON.parse(localStorage.getItem('playlist')) || [];
    setPlaylist(storedPlaylist);
    const storedIndex = JSON.parse(localStorage.getItem('currentIndex')) || 0;
    setCurrentIndex(storedIndex);
    const storedTime = JSON.parse(localStorage.getItem('currentTime')) || 0;
    setCurrentTime(storedTime);
  }, []);

  return (
    <div className='container'>
      <h1>Audio Player</h1>
      <FileInput onChange={handleFileChange}  className='Input'/>
      <hr />
      {playlist.length > 0 && (
        <div>
          <Playlist playlist={playlist} currentIndex={currentIndex} onPlaylistChange={handlePlaylistChange} />
          <br />
          <AudioPlayer 
            src={playlist[currentIndex].url}
            onEnded={handleEnded}
            onTimeUpdate={handleTimeUpdate}
            initialTime={currentTime}
            />
        </div>
      )}
    </div>
  );
}

export default App;
