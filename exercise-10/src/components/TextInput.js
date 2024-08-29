// src/TextInput.js
import React from 'react';

function TextInput({ text, onTextChange }) {
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={onTextChange}
        placeholder="Enter text here"
      />
    </div>
  );
}

export default TextInput;
