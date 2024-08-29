// src/App.js
import React, { useState } from 'react';
import TextInput from './components/TextInput.js';
import TextDisplay1 from './components/TextDisplay1.js';
import TextDisplay2 from './components/TextDisplay2.js';
import TextDisplay3 from './components/TextDisplay3.js';

function App() {
  const [text, setText] = useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <TextInput text={text} onTextChange={handleTextChange} />
      <TextDisplay1 text={text} />
      <TextDisplay2 text={text} />
      <TextDisplay3 text={text} />
    </div>
  );
}

export default App;
