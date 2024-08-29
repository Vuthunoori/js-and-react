import React from 'react';

function FahrenheitConverter({ kelvin }) {
  const fahrenheit = (kelvin - 273.15) * 9/5 + 32;

  return (
    <div>
      <h2>Temperature in Fahrenheit:</h2>
      <p>{fahrenheit.toFixed(2)}°F</p>
    </div>
  );
}

export default FahrenheitConverter;
