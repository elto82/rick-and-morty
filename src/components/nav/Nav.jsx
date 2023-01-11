import SearchBar from "../search/SearchBar";
import styled from "styled-components";

const DivStyle = styled.div`
  padding: 20px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export default function Nav(props) {
  const { onSearch } = props;

  return (
    <DivStyle>
      <SearchBar onSearch={onSearch} />
    </DivStyle>
  );
}
