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
import axios from "axios";

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

  /*   const onSearch = (id) => {
    // Convertimos a un número entero
    const characterId = parseInt(id, 10);
    //  existe en el array de personajes
    if (characters.some((c) => c.id === characterId)) {
      // mensaje de error
      window.alert("Este personaje ya ha sido añadido");
    } else {
      // Realizamos la búsqueda https://rickandmortyapi.com/api/character/
      //http://localhost:3001/rickandmorty/character/${character}
      fetch(`http://localhost:3001/rickandmorty/character/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        });
    }
  }; */

  /* const onSearch = (id) => {
    // Convertimos a un número entero
    const characterId = Number(id);
    //  existe en el array de personajes
    if (characters.some((c) => c.id === characterId)) {
      // mensaje de error
      window.alert("Este personaje ya ha sido añadido");
    } else {
      // Realizamos la búsqueda utilizando Axios
      axios
        .get(`http://localhost:3001/rickandmorty/character/${id}`)
        .then((response) => {
          const data = response.data;
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        })
        .catch((error) => {
          console.error(error);
          window.alert("Ocurrió un error al realizar la búsqueda");
        });
    }
  }; */
  const onSearch = async (id) => {
    const characterId = Number(id);
    if (characters.some((c) => c.id === characterId)) {
      window.alert("Este personaje ya ha sido añadido");
    } else {
      try {
        const response = await axios.get(
          `http://localhost:3001/rickandmorty/character/${id}`
        );
        const data = response.data;
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      } catch (error) {
        console.error(error);
        window.alert("Ocurrió un error al realizar la búsqueda");
      }
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
