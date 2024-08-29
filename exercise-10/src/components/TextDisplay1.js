// src/TextDisplay1.js
import React from 'react';

function TextDisplay1({ text }) {
  return (
    <div style={{ fontFamily:'cursive', color: 'blue', fontSize: '20px', margin: '10px' }}>
      {text}
    </div>
  );
}

export default TextDisplay1;
