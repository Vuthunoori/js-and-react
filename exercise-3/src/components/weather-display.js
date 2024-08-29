
import React from 'react';

function WeatherDisplay({ temperature, condition }) {

  const containerStyle = {
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    backgroundColor: 'lightblue', 
    
  };

  const temperatureStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  };

  const conditionStyle = {
    fontSize: '1.2em',
  };

  return (
    <div style={containerStyle}>
      <div style={temperatureStyle}>{temperature}°C</div>
      <div style={conditionStyle}>{condition}</div>
    </div>
  );
}

export default WeatherDisplay;
