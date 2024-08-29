import React, { useState, useEffect } from 'react';

function Counter() {
  const user = JSON.parse(localStorage.getItem('authenticatedUser'));
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (user) {
      setCount(user.count || 0);
    }
  }, [user]);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    const updatedUser = { ...user, count: newCount };
    localStorage.setItem('authenticatedUser', JSON.stringify(updatedUser));

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.map((u) => (u.email === user.email ? updatedUser : u));
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default Counter;
