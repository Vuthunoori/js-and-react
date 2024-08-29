import React from 'react';

function CelsiusConverter({ kelvin }) {
  const celsius = kelvin - 273.15;

  return (
    <div>
      <h2>Temperature in Celsius:</h2>
      <p>{celsius.toFixed(2)}°C</p>
    </div>
  );
}

export default CelsiusConverter;
