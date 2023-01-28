import { useState } from "react";
import "./Search.css";

export default function SearchBar({ onSearch }) {
  const [character, setCharater] = useState("");

  const handleSearch = () => {
    onSearch(character);
    setCharater(""); // Vaciamos el valor del campo de búsqueda
  };

  const handleRandomSearch = () => {
    // Obtenemos un número aleatorio entre 1 y 826
    const randomNumber = Math.floor(Math.random() * 826) + 1;

    // Realizamos una consulta con el número aleatorio
    onSearch(randomNumber);
  };

  return (
    <div className="searchbar">
      <input
        type="search"
        placeholder="Input Id"
        value={character}
        onChange={(e) => setCharater(e.target.value)}
      />
      <button onClick={handleSearch}>Add</button>
      <button onClick={handleRandomSearch}>Add random</button>
    </div>
  );
}
