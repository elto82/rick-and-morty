import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import About from "./components/about/About.jsx";
import Nav from "./components/nav/Nav.jsx";
import Detail from "./components/detail/Detail.jsx";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = (character) => {
    // Convertimos a un número entero
    const characterId = parseInt(character, 10);
    //  existe en el array de personajes
    if (characters.some((c) => c.id === characterId)) {
      // mensaje de error
      window.alert("Este personaje ya ha sido añadido");
    } else {
      // Realizamos la búsqueda
      fetch(`https://rickandmortyapi.com/api/character/${character}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        });
    }
  };

  const onClose = (id) => {
    setCharacters(characters.filter((c) => c.id !== id));
  };

  return (
    <div>
      <Nav onSearch={onSearch} />
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;

/* <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} /> */
