import React, { useState } from "react";
import "./BrowsePets.css";

const pets = [
  {
    id: 1,
    name: "Max",
    type: "Dog",
    breed: "Labrador Retriever",
    age: "3 years",
    health: "Healthy",
    behavior: "Friendly and active",
    vaccination: "Up to date",
    image: "https://ik.imagekit.io/sdotomhvbl/labra.jpg?updatedAt=1751830910399",
  },
  {
    id: 2,
    name: "Luna",
    type: "Cat",
    breed: "Siamese",
    age: "2 years",
    health: "Healthy",
    behavior: "Calm and affectionate",
    vaccination: "Up to date",
    image: "https://ik.imagekit.io/sdotomhvbl/cat2.jpg?updatedAt=1751831092356",
  },
  {
    id: 3,
    name: "Runa",
    type: "Rabbit",
    breed: "Rex Rabbit",
    age: "2 years",
    health: "Healthy",
    behavior: "Friendly and affectionate",
    vaccination: "Up to date",
    image: "https://ik.imagekit.io/sdotomhvbl/rabbit.jpg?updatedAt=1751832764071",
  },
];

const BrowsePets = () => {
  const [showForm, setShowForm] = useState(false);
  const [selectedPet, setSelectedPet] = useState(null);
  const [formData, setFormData] = useState({ name: "", phone: "", address: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleAdoptClick = (pet) => {
    setSelectedPet(pet);
    setShowForm(true);
    setFormData({ name: "", phone: "", address: "" });
    setSuccessMessage("");
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
      alert("Please login first.");
      return;
    }

    const allAdoptions = JSON.parse(localStorage.getItem("adoptedPets")) || {};
    const userPets = allAdoptions[currentUser] || [];

    const alreadyAdopted = userPets.some((p) => p.id === selectedPet.id);
    if (!alreadyAdopted) {
      userPets.push({ ...selectedPet, adopter: formData });
      allAdoptions[currentUser] = userPets;
      localStorage.setItem("adoptedPets", JSON.stringify(allAdoptions));
    }

    setSuccessMessage("✅ Adoption submitted successfully!");
    setTimeout(() => {
      setShowForm(false);
    }, 2000);
  };

  return (
    <div className="browsew">
      <div className="browse-container">
        <h2 className="browse-title">🐾 Browse Pets for Adoption</h2>

        {successMessage && <div className="success-message">{successMessage}</div>}

        <div className="pet-grid">
          {pets.map((pet) => (
            <div key={pet.id} className="pet-card">
              <img src={pet.image} alt={pet.name} className="pet-image" />
              <div className="pet-info">
                <h3>{pet.name}</h3>
                <p><strong>Breed:</strong> {pet.breed}</p>
                <p><strong>Age:</strong> {pet.age}</p>
                <p><strong>Health:</strong> {pet.health}</p>
                <p><strong>Behavior:</strong> {pet.behavior}</p>
                <p><strong>Vaccination:</strong> {pet.vaccination}</p>
                <button onClick={() => handleAdoptClick(pet)} className="adopt-btn">Adopt</button>
              </div>
            </div>
          ))}
        </div>

        {showForm && (
          <div className="modal-backdrop">
            <div className="adopt-form-modal">
              <div className="modal-header">
                <h3>Adopt {selectedPet.name}</h3>
                <button className="close-btn" onClick={() => setShowForm(false)}>❌</button>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <textarea
                  name="address"
                  placeholder="Your Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                ></textarea>
                <button type="submit">Submit Adoption</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowsePets;
