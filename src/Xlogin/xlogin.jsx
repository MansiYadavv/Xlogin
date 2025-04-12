import React, { useState } from 'react';

const XLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === 'user' && password === 'password') {
      setIsLoggedIn(true);
      setMessage('');
    } else {
      setMessage('Invalid username or password');
    }
  };

  return (
    <div style={{ maxWidth: '320px', margin: 'auto', paddingTop: '50px' }}>
      {!isLoggedIn ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label><br />
            <input
              id="username"
              name="username"
              type="text"
              required
            />
          </div>

          <div style={{ marginTop: '16px' }}>
            <label htmlFor="password">Password</label><br />
            <input
              id="password"
              name="password"
              type="password"
              required
            />
          </div>

          <div style={{ marginTop: '20px' }}>
            <button type="submit">Submit</button>
          </div>
        </form>
      ) : (
        <h2>Welcome, user!</h2>
      )}

      {message && (
        <p style={{ marginTop: '20px', color: 'red' }}>{message}</p>
      )}
    </div>
  );
};

export default XLogin;
