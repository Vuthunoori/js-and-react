import React, { useState } from 'react';
import CelsiusConverter from './CelsiusConverter';
import FahrenheitConverter from './FahrenheitConverter';

function TemperatureConverter() {
  const [kelvin, setKelvin] = useState(273.15); // Initial temperature in Kelvin (0°C)

  const handleInputChange = (e) => {
    setKelvin(parseFloat(e.target.value) || 0); // Update the Kelvin temperature
  };

  return (
    <div>
      <input
        type="number"
        value={kelvin}
        onChange={handleInputChange}
        placeholder="Enter temperature in Kelvin"
      />
      <CelsiusConverter kelvin={kelvin} />
      <FahrenheitConverter kelvin={kelvin} />
    </div>
  );
}

export default TemperatureConverter;
