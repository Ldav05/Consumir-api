import Navbar from './components/Navbar';
import {useEffect, useState} from 'react';

function App () {

  const [characters, setcharacters] = useState([])
  const initialUrl = "https://pokeapi.co/api/v2/pokemon"
  const fetchCharacters = (Url) => {
    fetch (Url)
      .then (response => response.json ())
      .then (data => setcharacters(data.results))
      .catch (error => console.log (error));
  };
  useEffect (() => {}, 
    fetchCharacters(initialUrl),
  []);

  return <Navbar brand={'Videojuegos'} />;
}

export default App;
