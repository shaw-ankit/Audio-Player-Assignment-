import React from 'react';

function PlaylistItem({ audio, currentIndex, index, onClick }) {
  return (
    <li key={index} onClick={() => onClick(index)}>
      {index === currentIndex ? <strong>{audio.name}</strong> : audio.name}
    </li>
  );
}

export default PlaylistItem;