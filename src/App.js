import "./App.css";
import imagen1 from "./img/rick.png";
import { useState } from "react";
import Characters from "./Components/Characters";

function App() {
  const [characters, setCharacters] = useState(null);
  const reqAppi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character");
    //console.log(api);
    const characterAppi = await api.json();
    //console.log(characterAppi);

    //console.log(characters);
    setCharacters(characterAppi.results);
    console.log(characters);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick and Morty</h1>
        {characters ? (
          <Characters characters={characters} />
        ) : (
          <>
            <img src={imagen1} alt="Rick and Morty" className="img-home" />
            <button onClick={reqAppi} className="btn-search">
              Buscar Personajes
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
