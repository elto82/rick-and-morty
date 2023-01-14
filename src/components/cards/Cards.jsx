//import { findByLabelText } from '@testing-library/react';
import Card from "../card/Card.jsx";
import c from "./Cards.module.css";

export default function Cards(props) {
  const { characters, onClose } = props;

  return (
    <div className={c.cards}>
      {characters.map((c) => (
        <Card
          key={c.id}
          id={c.id}
          name={c.name}
          species={c.species}
          gender={c.gender}
          image={c.image}
          onClose={() => onClose(c.id)}
        />
      ))}
    </div>
  );
}
