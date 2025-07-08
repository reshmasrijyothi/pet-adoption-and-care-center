import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('currentUser', email);
      setLoginSuccess(true);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {loginSuccess ? (
          <div className="success-message">
            ✅ Login successful!
            <br />
            <button onClick={() => navigate('/')}>Go to Home</button>
          </div>
        ) : (
          <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Login</button>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
              Don’t have an account?{' '}
              <span style={{ color: '#0077cc', cursor: 'pointer' }} onClick={() => navigate('/signup')}>
                Sign up
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
