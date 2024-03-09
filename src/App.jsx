import React, { useState, useEffect } from "react";
import "./App.css";
import StarshipCard from "./components/StarshipCard";
import { getAllStarships } from "./services/sw-api";
import Header from "./components/Header";

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const data = await getAllStarships();
        console.log(data);
        setStarships(data);
      } catch (error) {
        console.error("Error fetching starship data", error);
      }
    };

    fetchStarships();
  }, []);

  return (
    <div>
      <Header />
      <div className="section-header">
        <h2>Starships</h2>
      </div>
      <div className="App">
        {starships.map((starship, index) => (
          <StarshipCard
            key={index}
            name={starship.name}
            model={starship.model}
            manufacturer={starship.manufacturer}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
