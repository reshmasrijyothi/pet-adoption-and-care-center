import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Aboutus from './pages/Aboutus.jsx';
import Contact from './pages/Contact.jsx';
import PetCareTips from './pages/PetCareTips.jsx';
import BrowsePets from './pages/BrowsePets.jsx';
import PetCareServices from './pages/PetCareServices.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx'; // Import this
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/petcare" element={<PetCareTips />} />
        <Route path="/services" element={<PetCareServices />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/browsepets"
          element={
            <ProtectedRoute>
              <BrowsePets />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
