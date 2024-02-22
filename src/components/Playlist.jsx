import React from 'react';
import PlaylistItem from './PlaylistItem';

function Playlist({ playlist, currentIndex, onPlaylistChange }) {
  return (
    <div>
      <h2>Playlist</h2>
      <ul>
        {playlist.map((audio, index) => (
          <PlaylistItem
            key={index}
            audio={audio}
            currentIndex={currentIndex}
            index={index}
            onClick={onPlaylistChange}
          />
        ))}
      </ul>
    </div>
  );
}

export default Playlist;