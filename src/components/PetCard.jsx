import React from 'react';

function PetCard({ pet }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h3>{pet.name}</h3>
      <p>Breed: {pet.breed}</p>
      <p>Age: {pet.age}</p>
      <button>Adopt</button>
    </div>
  );
}

export default PetCard;
