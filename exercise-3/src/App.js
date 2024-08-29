import React from 'react';
import WeatherDisplay from './components/weather-display.js';
import './App.css';

function App() {
  const temp={
    temperature:22,
    condition:'rainy'
  };
  return (
    <div >
      
      < WeatherDisplay 
      temperature={temp.temperature}
      condition={temp.condition}
      />
    </div>
  );
}

export default App;
