import React, { useState, useEffect } from "react";
import "./App.css";
import StarshipCard from "./components/StarshipCard";
import { getAllStarships } from "./services/sw-api";

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const data = await getAllStarships();
        setStarships(data);
      } catch (error) {
        console.error("Error fetching starship data", error);
      }
    };

    fetchStarships();
  }, []);

  return (
    <div className="App">
      {starships.map((starship, index) => (
        <StarshipCard key={index} name={starship.name} />
      ))}
    </div>
  );
}

export default App;
