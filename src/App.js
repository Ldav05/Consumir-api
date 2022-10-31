import Navbar from "./components/Navbar";
import React, { useEffect, useState}  from "react";
import  Characters  from './components/Characters';
import  Pagination  from "./components/Pagination";


function App() {
  const [datos, setDatos] = React.useState([]);
  const [character, setcharacters] = useState([]);
  const initialUrl = "https://reqres.in/api/users?page=1}";
  const fetchCharacters = (Url) => {
    fetch(Url)
      .then((response) => response.json())
      .then((data) => setcharacters(data.data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {fetchCharacters(initialUrl)}, []);

  const Siguiente = async() =>{  
    try{
        
        fetch(`https://reqres.in/api/users?page=${2}`)
        .then((response) => response.json())
        .then((data) => setcharacters(data.data))
        .catch((error) => console.log(error));

        
    }catch(e){
        console.log(e);
    }
}

const Anterior = async() =>{
    try{
      fetch(`https://reqres.in/api/users?page=${1}`)
      .then((response) => response.json())
      .then((data) => setcharacters(data.data))
      .catch((error) => console.log(error));
    }catch(e){
        console.log(e);
    }
}

  return (
    <>
      <Navbar brand={"Videojuegos"} />
      <div className="container mt-5">
        <Pagination onPrevious={Anterior} onNext={Siguiente}/>
          <Characters characters = {character} />
          <Pagination onPrevious={Anterior} onNext={Siguiente}/>
      </div>
      
    </>
  );
}

export default App;
