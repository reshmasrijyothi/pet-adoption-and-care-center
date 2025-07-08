import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [signedUp, setSignedUp] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    const { name, email, password } = form;
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find(user => user.email === email);
    if (userExists) {
      alert("User already exists. Please log in.");
      return;
    }

    users.push({ name, email, password });
    localStorage.setItem("users", JSON.stringify(users));

    // ✅ Save login status
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", email);

    setSignedUp(true);
  };

 const goToDashboard = () => {
  // slight delay ensures localStorage fully updated before Dashboard checks
  setTimeout(() => {
    navigate('/dashboard');
  }, 100);
};


  return (
    <div className="signup-container">
      <div className="signup-form">
        {signedUp ? (
          <div className="success-message">
            ✅ Successfully signed up!
            <br /><br />
            <button onClick={goToDashboard}>Go to Dashboard</button>
          </div>
        ) : (
          <form onSubmit={handleSignup}>
            <h2>Signup</h2>
            <input
              name="name"
              type="text"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <button type="submit">Signup</button>
            <p style={{ marginTop: '1rem', fontSize: '0.9rem' }}>
              Already have an account?{' '}
              <span style={{ color: '#007bff', cursor: 'pointer' }} onClick={() => navigate('/login')}>
                Login
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default Signup;
