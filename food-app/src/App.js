import React, { useEffect, useState } from 'react';
import { supabase } from './components/supabaseClient';
import GoogleSignIn from './components/SignIn';
// import Menu from  './components/antdstyling'
import Dashboard from './components/dashboard';

import { Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  const [session, setSession] = useState(null); // State to hold the current session
  const navigate = useNavigate();

  useEffect(() => {
  
    // Fetch the current session asynchronously
    const fetchSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        setSession(session);
      }
     
    };

    if (window.location.pathname !== '/') {
      fetchSession();
    }

    // Function to handle user creation and setting session
    const handleAuthChange = async (
      _event,
      session,
    ) => {
      if (session) {
        navigate('/dashboard'); // Redirect to dashboard if authenticated
      } else {
        navigate('/'); // Redirect to sign-in page if not authenticated
      }
      
      console.log({session});
    };

    // Listen for changes to auth state (login, logout)
    const { data: authListener } =
    supabase.auth.onAuthStateChange(handleAuthChange);

    return () => {
      authListener.subscription.unsubscribe();
    };
  },[navigate]);
 
  return (
   
    <Routes>
      <Route path="/" element={<GoogleSignIn />} />
      <Route path="/dashboard" element={session ? <Dashboard /> : <GoogleSignIn />} />
      {/* <Route path="/menu" element={session ? <Menu /> : <GoogleSignIn />} /> */}
    </Routes>

  );
}

export default App;
