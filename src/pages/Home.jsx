import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import PetCareServices from "./PetCareServices";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      navigate("/browsepets");
    } else {
      localStorage.setItem("redirectAfterLogin", "/browsepets");
      navigate("/login");
    }
  };

  return (
    <div className="home-container">
      <header className="hero">
        <div className="hero-text">
          <h1>🐾 Welcome to PawPal 🐾</h1>
          <p>Find your new best friend today.</p>
          <button onClick={handleGetStarted} className="hero-button">
            Adopt
          </button>
        </div>
        <div className="hero-image">
          <img src="/images/dog.jpg" alt="Happy pets" />
        </div>
      </header>

      <section className="features">
        <h2>Why Adopt with Us?</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>Verified Listings</h3>
            <p>All pets are vetted for health and safety.</p>
          </div>
          <div className="card">
            <h3>Easy Adoption Process</h3>
            <p>Simple steps to bring your pet home faster.</p>
          </div>
          <div className="card">
            <h3>Support Local Shelters</h3>
            <p>Every adoption helps a shelter pet find love.</p>
          </div>
        </div>
      </section>

      <PetCareServices />

      {/* ✅ Contact Card Section */}
      <footer className="contact-section">
        <h2>📞 Contact Us</h2>
        <div className="contact-card">
          <p><strong>📍 Address:</strong> 123 Paw Street, Pet City, PC 56789</p>
          <p><strong>📧 Email:</strong> support@petadoption.com</p>
          <p><strong>📱 Phone:</strong> +91 98**5 43210</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
