import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherDisplay from './components/weather';
import LocationInput from './components/location';

const App = () => {
  const [weatherData, setWeatherData] = useState(null); // State for storing weather data
  const [loading, setLoading] = useState(true); // State for handling loading status
  const [error, setError] = useState(null); // State for handling errors

  // Function to fetch weather data by city name
  const fetchWeatherData = async (city) => {
    setLoading(true);
    setError(null);

    try {
      const API_KEY = 'fb2178b4f172321f23c6c52945c84073'; // Replace with your actual API key
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      console.log('Weather data:', response.data); // Log API response
      setWeatherData(response.data);
    } catch (err) {
      console.error('Error fetching weather data:', err); // Log error
      setError('Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch weather data by coordinates
  const fetchWeatherDataByCoords = async (lat, lon) => {
    setLoading(true);
    setError(null);
    try {
      const API_KEY = 'fb2178b4f172321f23c6c52945c84073'; // Ensure this is the correct API key
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      );
      console.log('Weather data by coordinates:', response.data); // Log API response
      setWeatherData(response.data);
    } catch (err) {
      console.error('Error fetching weather data by coordinates:', err); // Log error
      setError('Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  // Function to handle location input change
  const handleLocationChange = (newLocation) => {
    console.log('Location input received:', newLocation); // Log location input
    fetchWeatherData(newLocation); // Fetch weather data by city name
  };

  // Fetch weather data for the user's current location when the component mounts
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log('Current position:', latitude, longitude); // Log current position
        fetchWeatherDataByCoords(latitude, longitude); // Fetch weather data by coordinates
      },
      (error) => {
        console.error('Error retrieving location:', error); // Log location retrieval error
        setError('Failed to retrieve location');
        setLoading(false);
      }
    );
  }, []);

  return (
    <div className="App">
      <h1>Weather App</h1>
      <LocationInput onLocationChange={handleLocationChange} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
};

export default App;
