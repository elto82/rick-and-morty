import SearchBar from "../search/SearchBar";
import s from "./Nav.module.css";
//import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Nav({ onSearch, logout }) {
  const navigate = useNavigate();
  return (
    <div className={s.navbar}>
      <button onClick={logout}>Logout</button>
      <button onClick={() => navigate("/favorites")}>Favorites</button>

      <Link to={"/home"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}
