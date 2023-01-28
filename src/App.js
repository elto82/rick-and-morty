import "./App.css";
import Favorites from "./components/Favorites/Favorites.jsx";
import Form from "./components/form/Form";
import Error from "./components/error/Error";
import Cards from "./components/cards/Cards.jsx";
import About from "./components/about/About.jsx";
import Nav from "./components/nav/Nav.jsx";
import Detail from "./components/detail/Detail.jsx";
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [access, setAccess] = useState(false);
  let username = "";
  let password = "";

  const login = (userData) => {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Usuario o contraseña erronea");
    }
  };

  const logout = () => {
    setAccess(false);
    navigate("/");
  };

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

  useEffect(() => {
    !access && navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [access]);

  return (
    <div>
      {location.pathname === "/" ||
      location.pathname === "/favorites" ||
      location.pathname === "/about" ? (
        ""
      ) : !/detail/.test(location.pathname) ? (
        <Nav onSearch={onSearch} logout={logout} />
      ) : (
        ""
      )}

      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/" element={<Form login={login} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

/* <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} /> */
