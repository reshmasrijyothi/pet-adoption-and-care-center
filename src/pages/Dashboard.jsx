import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();
  const [adoptedPets, setAdoptedPets] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [isChecking, setIsChecking] = useState(true); // prevent early redirect

  useEffect(() => {
    const checkAuth = () => {
      const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
      const user = localStorage.getItem("currentUser");

      if (isLoggedIn && user) {
        setCurrentUser(user);
        const allAdoptedData = JSON.parse(localStorage.getItem("adoptedPets")) || {};
        const petsForUser = allAdoptedData[user] || [];
        setAdoptedPets(petsForUser);
        setIsChecking(false);
      } else {
        // Delay to ensure localStorage sets after signup/login
        setTimeout(() => {
          navigate("/login");
        }, 200);
      }
    };

    setTimeout(checkAuth, 100); // Delay initial check
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  if (isChecking) return <div className="dashboardw">Loading dashboard...</div>;

  return (
    <div className="dashboardw">
      <div className="dashboard-container">
        <h1>Welcome {currentUser ? currentUser.split("@")[0] : ''}!</h1>
        <p>Your adopted pets and profile are shown here.</p>

        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>

        <div className="pet-list">
          {adoptedPets.length === 0 ? (
            <p className="no-pets-message">🐾 You haven't adopted any pets yet.</p>
          ) : (
            adoptedPets.map((pet) => (
              <div className="pet-card" key={pet.id}>
                <img src={pet.image} alt={pet.name} />
                <h3>{pet.name}</h3>
                <p>Breed: {pet.breed}</p>
                <p>Age: {pet.age}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
