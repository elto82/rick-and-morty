import SearchBar from "../search/SearchBar";
import s from "./Nav.module.css";
//import styled from "styled-components";
import { Link } from "react-router-dom";

/* const DivStyle = styled.div`
  padding: 10px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`; */

export default function Nav({ onSearch, logout }) {
  return (
    <div className={s.navbar}>
      <button onClick={logout}>Cerrar Sesión</button>
      <Link to={"/home"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}
