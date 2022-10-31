import Navbar from "./components/Navbar";
import React, { useEffect, useState}  from "react";
import  Characters  from './components/Characters';

function App() {
  const [character, setcharacters] = useState([]);
  const initialUrl = "https://reqres.in/api/users?page=1}";
  const fetchCharacters = (Url) => {
    fetch(Url)
      .then((response) => response.json())
      .then((data) => setcharacters(data.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {fetchCharacters(initialUrl)}, []);

  return (
    <>
      <Navbar brand={"Videojuegos"} />
      <div className="container mt-5">
          <Characters characters = {character} />
      </div>
      
    </>
  );
}

export default App;
