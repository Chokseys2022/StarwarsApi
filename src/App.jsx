//Imports
import React, { useState, useEffect } from "react";
import "./App.css";
import StarshipCard from "./components/StarshipCard";
import { getAllStarships } from "./services/sw-api";
import Header from "./components/Header";

//main App component
function App() {
  //state to hold starship data
  const [starships, setStarships] = useState([]);
  //fetch data
  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const data = await getAllStarships();
        console.log(data);
        //update sate with starship data
        setStarships(data);
      } catch (error) {
        console.error("Error fetching starship data", error);
      }
    };
    //empty array - only runs once
    fetchStarships();
  }, []);

  return (
    <div className="app-container">
      <Header />
      <div className="section-header">
        <h2>Starship Names</h2>
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

//--------------------------END CODE--------------------------------//