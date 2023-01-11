import { useState } from "react";
import a from "./Search.module.css";

export default function SearchBar(props) {
  const { onSearch } = props;
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
    <div className={a.searchbar}>
      <input
        type="search"
        value={character}
        onChange={(e) => setCharater(e.target.value)}
      />
      <button onClick={handleSearch}>Agregar</button>
      <button onClick={handleRandomSearch}>Consulta Aleatoria</button>
    </div>
  );
}
