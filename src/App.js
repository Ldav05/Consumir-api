import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { Characters } from "./components/Characters";

function App() {
  const [characters, setcharacters] = useState([]);
  const initialUrl = "https://xivapi.com/item";
  const fetchCharacters = (Url) => {
    fetch(Url)
      .then((response) => response.json())
      .then((data) => setcharacters(data.Results))
      .catch((error) => console.log(error));
  };
  useEffect(() => {fetchCharacters(initialUrl)}, []);

  return (
    <>
      <Navbar brand={"Videojuegos"} />
      <div className="container">
          <Characters characters = {characters} />
      </div>
      
    </>
  );
}

export default App;
