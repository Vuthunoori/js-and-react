import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login.js';
import Profile from './components/Profile.js';
import Counter from './components/Counter.js';

function App() {
  const isAuthenticated = !!localStorage.getItem('authenticatedUser');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/profile"
          element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
        />
        <Route
          path="/counter"
          element={isAuthenticated ? <Counter /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
