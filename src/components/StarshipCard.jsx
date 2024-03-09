import React from 'react';
import '../App.css';

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
