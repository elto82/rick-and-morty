import SearchBar from "../search/SearchBar";
import styled from "styled-components";
import { Link } from "react-router-dom";

const DivStyle = styled.div`
  padding: 10px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default function Nav({ onSearch }) {
  return (
    <DivStyle>
      <Link to={"/home"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <SearchBar onSearch={onSearch} />
    </DivStyle>
  );
}
