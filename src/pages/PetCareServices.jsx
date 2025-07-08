import React, { useState } from "react";
import "./PetCareServices.css";
import { useNavigate } from "react-router-dom";

const PetCareServices = () => {
  const [showModal, setShowModal] = useState(false);
  const [serviceType, setServiceType] = useState("");
  const navigate = useNavigate();

  const openModal = (type) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      alert("Please log in or sign up to access this service.");
      navigate("/login");
      return;
    }
    setServiceType(type);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setServiceType("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your request has been submitted!");
    closeModal();
  };

  return (
    <div className="servicew">
      <div className="services-container">
        <h2>PetCare Services</h2>

        <div className="service-card">
          <h3>🐾 Veterinary Booking</h3>
          <p>
            Book appointments with certified vets for health checkups,
            vaccinations, and more.
          </p>
          <button onClick={() => openModal("Veterinary")}>Book Now</button>
        </div>

        <div className="service-card">
          <h3>🛁 Grooming</h3>
          <p>
            Professional grooming services to keep your pet clean, healthy, and
            happy.
          </p>
          <button onClick={() => openModal("Grooming")}>
            Schedule Grooming
          </button>
        </div>

        <div className="service-card">
          <h3>🎓 Training</h3>
          <p>
            Enroll in obedience and behavior training programs by certified
            trainers.
          </p>
          <button onClick={() => openModal("Training")}>Start Training</button>
        </div>

        {showModal && (
          <div className="modal-backdrop" onClick={closeModal}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
              <h3>{serviceType} Service Form</h3>
              <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Email" required />
                <input type="text" placeholder="Pet Name" required />
                <textarea placeholder="Additional Info"></textarea>
                <button type="submit">Submit</button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="cancel-btn"
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PetCareServices;
