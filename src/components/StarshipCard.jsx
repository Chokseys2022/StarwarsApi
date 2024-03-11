//StarShipCard.jsx

import React from 'react';
import '../App.css';


// StarshipCard component to display information about a starship
function StarshipCard({ name, model, manufacturer }) {
  return (
    <div className="starship-card">
      <h3>{name}</h3>
      <p> Model: {model}</p>
      <p>Manufacturer: {manufacturer}</p>
    </div>
  );
}

export default StarshipCard;

//---------------------END CODE-----------------------------//