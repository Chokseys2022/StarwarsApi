//sw-api.jsx

//Importing axios library for making HTTP requests
import axios from 'axios';

const SW_API_BASE_URL = 'https://www.swapi.tech/api/';

export async function getAllStarships() {
  try {
    const response = await axios.get(`${SW_API_BASE_URL}/starships`);
    return response.data.results;
  } catch (error) {
    throw new Error('Failed to fetch starships');
  }
}

//-----------------------EBD CODE------------------------------//