
import './App.css';
import React, { useState } from 'react';


function App() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');


  const validateEmail = (email) => {
    const invalidChars = /[%&()]/;
    return !invalidChars.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    setEmailError('');
    setPasswordError('');

 
    if (!email) {
      setEmailError('Email is required');
    } else if (!validateEmail(email)) {
      setEmailError('Email contains invalid characters');
    } else if (!password) {
      setPasswordError('Password is required');
    } else {
     
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);

    
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </label>
          {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </label>
          {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}


 
export default App;
