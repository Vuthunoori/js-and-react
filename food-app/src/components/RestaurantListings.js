import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
// import Layout  from './antdstyling.js'

const DISTANCE_THRESHOLD = 0.1; // Approximate distance in degrees (~10 km)

const RestaurantListings = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [location, setLocation] = useState(null);
  const [manualLocation, setManualLocation] = useState('');
  const [locationAccessDenied, setLocationAccessDenied] = useState(false);
  const [error, setError] = useState('');

  const getLocation = useCallback(() => {
    console.log(navigator);
    if (!navigator.geolocation) {
      console.error('Geolocation is not supported by this browser.');
      setLocationAccessDenied(true);
      return;
    }
 
 
    navigator.geolocation.getCurrentPosition(
      (position) => {
        
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude, });
        console.log(location);
       
      },
      () => {
        setLocationAccessDenied(true);
      },
      {timeout:10000}
      
    );
   
   
  }, []);
  console.log(location);
  const fetchNearbyRestaurants = useCallback(async () => {
    if (!location) return;

    try {
      const response = await axios.get('/data/restaurants.json'); // Updated path
      const allRestaurants = response.data;

      // Filter restaurants based on simplified distance threshold
      const nearbyRestaurants = allRestaurants.filter((restaurant) => {
        const latDiff = Math.abs(restaurant.latitude - location.latitude);
        const lonDiff = Math.abs(restaurant.longitude - location.longitude);
        return latDiff <= DISTANCE_THRESHOLD && lonDiff <= DISTANCE_THRESHOLD;
      });

      setRestaurants(nearbyRestaurants);
    } catch (error) {
      console.error('Error fetching nearby restaurants:', error);
      setError('Failed to fetch nearby restaurants.');
    }
  }, [location]);

  const fetchRestaurantsByManualLocation = useCallback(async () => {
    try {
      const response = await axios.get('/data/restaurants.json'); // Updated path
      const allRestaurants = response.data;

      // Filter restaurants based on manual location input
      const filteredRestaurants = allRestaurants.filter((restaurant) =>
        restaurant.address.toLowerCase().includes(manualLocation.toLowerCase()) ||
        restaurant.city.toLowerCase().includes(manualLocation.toLowerCase())
      );

      setRestaurants(filteredRestaurants);
    } catch (error) {
      console.error('Error fetching restaurants by manual location:', error);
      setError('Failed to fetch restaurants for the specified location.');
    }
  }, [manualLocation]);

  useEffect(() => {
    if (location) {
      // If location is available, fetch nearby restaurants
      fetchNearbyRestaurants();
    } else if (!locationAccessDenied) {
      // Try to get the user's location if it's not set yet
      getLocation();
    }
  }, [location, locationAccessDenied, fetchNearbyRestaurants, getLocation]); // Include dependencies

  const handleManualLocationChange = (event) => {
    setManualLocation(event.target.value);
  };

  const handleManualLocationSubmit = () => {
    if (manualLocation) {
      fetchRestaurantsByManualLocation();
    }
  };

  return (
    <div>
      {error && <p className="error">{error}</p>}
      {locationAccessDenied ? (
        <div>
          <input
            type="text"
            value={manualLocation}
            onChange={handleManualLocationChange}
            placeholder="Enter location manually"
          />
          <button onClick={handleManualLocationSubmit}>Search</button>
        </div>
      ) : (
        <p>Fetching nearby restaurants based on your location</p>
      )}

<div className="restaurant-list">
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <div key={restaurant.id} className="restaurant-card">
              <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
              <div className="restaurant-details">
                <h2 className="restaurant-name">{restaurant.name}</h2>
                <p className="restaurant-location">Location: {restaurant.location}</p>
                <p className="restaurant-rating">Rating: {restaurant.rating}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No restaurants found</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantListings;
