import React from 'react';
import { supabase } from './supabaseClient';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import RestaurantListings from './RestaurantListings.js'; 

function Dashboard() {
 const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error('Error signing out:', error.message);
        alert('Failed to sign out. Please try again.');
      
      } else {
        // After sign-out, the App component will handle redirection based on session state
        navigate('/'); // This line ensures immediate redirection if needed
      }
    } catch (error) {
      console.error('Error during sign-out:', error.message);
      alert('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div>
      <header>
        <h2>Dashboard</h2>
        <RestaurantListings /> 
      </header>
      <main>
        
        <Button className="sign-out" type="primary" onClick={handleSignOut}>Sign Out</Button>
      </main>
  
      
    </div>
  );
}

export default Dashboard;
