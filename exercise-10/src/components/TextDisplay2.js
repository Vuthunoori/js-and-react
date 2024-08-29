// src/TextDisplay2.js
import React from 'react';

function TextDisplay2({ text }) {
  return (
    <div style={{ fontFamily: 'Courier New', color: 'green', fontSize: '25px', margin: '10px' }}>
      {text}
    </div>
  );
}

export default TextDisplay2;
