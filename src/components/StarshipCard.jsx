import React from 'react'
// import '/StarshipCard.css';
import "./App.css"

function StarshipCard({name}) {
  return (
    <div className="starship-card">
      <h3>{name}</h3>
    </div>
  );
}

export default StarshipCard;