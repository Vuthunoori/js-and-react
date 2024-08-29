// src/TextDisplay3.js
import React from 'react';

function TextDisplay3({ text }) {
  return (
    <div style={{ fontFamily: 'Georgia', color: 'red', fontSize: '30px', margin: '10px' }}>
      {text}
    </div>
  );
}

export default TextDisplay3;
