import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Donate.css";

const Donate = () => {
  const navigate = useNavigate();
  const [donor, setDonor] = useState({ name: "", email: "", amount: "" });
  const [selectedAmount, setSelectedAmount] = useState(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      alert("Please log in to donate.");
      navigate("/login");
    }
  }, [navigate]);

  const handleChange = (e) => {
    setDonor({ ...donor, [e.target.name]: e.target.value });
  };

  const handleAmountSelect = (amt) => {
    setSelectedAmount(amt);
    setDonor({ ...donor, amount: amt });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!donor.amount || donor.amount < 1) {
      alert("Please enter a valid amount.");
      return;
    }
    alert(`🙏 Thank you, ${donor.name || "Friend"}! Your ₹${donor.amount} donation helps save more pets.`);
    setDonor({ name: "", email: "", amount: "" });
    setSelectedAmount(null);
  };

  return (
    <div className="donate-wrapper">
      <div className="donate-hero">
        <h1>Help Us Save More Lives 🐾</h1>
        <p>Your donation provides food, shelter, and medical care to rescued animals.</p>
      </div>

      <form className="donate-form" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Your Name (optional)"
          value={donor.name}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email (optional)"
          value={donor.email}
          onChange={handleChange}
        />

        <div className="amount-options">
          {[100, 300, 500, 1000].map((amt) => (
            <button
              type="button"
              key={amt}
              className={`amount-btn ${selectedAmount === amt ? "selected" : ""}`}
              onClick={() => handleAmountSelect(amt)}
            >
              ₹{amt}
            </button>
          ))}
        </div>

        <input
          name="amount"
          type="number"
          placeholder="Or enter custom amount (₹)"
          value={donor.amount}
          onChange={handleChange}
          min="1"
        />

        <button type="submit" className="donate-btn">
          Donate Now
        </button>
      </form>

      <div className="qr-section">
        <h3>Prefer UPI?</h3>
        <img src="/images/qr-code.png" alt="Donate QR" className="qr-image" />
        <p>Scan to donate via any UPI app</p>
      </div>
    </div>
  );
};

export default Donate;
