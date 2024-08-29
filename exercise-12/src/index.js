import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const users = [
  {
    name: 'Lahari',
    email: 'lahari@example.com',
    phone: '9994449991',
    count: 0,
  },
  {
    name: 'geetha',
    email: 'geetha@example.com',
    phone: '9876543210',
    count: 0,
  },
];

localStorage.setItem('users', JSON.stringify(users));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
