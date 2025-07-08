import React from 'react';
import './PetCareTips.css';

function PetCareTips() {
  return (
   <div class="petcarew">
    <div className="petcare-container">
      <h1>Pet Care Tips</h1>
      <p>Helpful tips to keep your pets happy and healthy!</p>

      <div className="tip-list">
        <div className="tip-card">
          <h3>🐶 Regular Vet Visits</h3>
          <p>Schedule annual checkups to ensure your pet is healthy and up-to-date with vaccinations.</p>
        </div>
        <div className="tip-card">
          <h3>🍲 Proper Nutrition</h3>
          <p>Feed your pet a balanced diet suited to their breed, age, and health condition.</p>
        </div>
        <div className="tip-card">
          <h3>🏃 Daily Exercise</h3>
          <p>Ensure your pet gets plenty of physical activity to maintain weight and reduce boredom.</p>
        </div>
        <div className="tip-card">
          <h3>🛁 Hygiene & Grooming</h3>
          <p>Keep your pet clean with regular grooming, bathing, and brushing.</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default PetCareTips;
