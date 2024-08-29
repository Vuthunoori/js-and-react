import React from 'react';

const WeatherDisplay = ({ data }) => {
  if (!data) return null; // Returns null if no data is available

  // Destructuring the 'data' object to extract its properties
  const { main, weather, wind } = data;
  if (!main || !weather || !wind) return <p>No weather data available.</p>; // Handle missing data

  const { temp, humidity } = main;
  const { description } = weather[0];
  const { speed } = wind;

  return (
    <div>
      <h2>Weather Details</h2>
      <p>Temperature: {temp}°C</p>
      <p>Humidity: {humidity}%</p>
      <p>Description: {description}</p>
      <p>Wind Speed: {speed} m/s</p>
    </div>
  );
};

export default WeatherDisplay;
