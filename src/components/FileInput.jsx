import React from 'react';

function FileInput({ onChange }) {
  const handleFileChange = (e) => {
    onChange(Array.from(e.target.files));
  };

  return <input type="file" accept="audio/*" onChange={handleFileChange} multiple />;
}

export default FileInput;