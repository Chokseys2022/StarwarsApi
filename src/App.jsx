import { useState, useEffect } from "react";
import './App.css';
import StarshipCard from "./components/StarshipCard";

function App() {
  const [starships, setStarships] = useState(0);

  useEffect(() => {
    const fetchStarships = async () => {
      try {
        const data = await getAllStartships();
        setStarships(data.results);
      } catch (error) {
        console.error("Error fetching startship data", error);
      }
    };

    fetchStarships();
  }, []);

  return (
    <div className="App">
      {starships.map((starship) => (
        <StarshipCard key={starship.name} name={starship.name} />
      ))}
    </div>
  );
}


export default App;
