import React, { useState } from 'react';

const LocationInput = ({ onLocationChange }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      onLocationChange(inputValue); // Pass user input to parent component
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter location"
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default LocationInput;
