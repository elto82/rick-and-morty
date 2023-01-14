import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import s from "./Detail.module.css";

const Detail = () => {
  const [character, setCharacter] = useState({});
  const { detailId } = useParams();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className={s.container}>
      <Link to="/home">
        <button className={s.buttonBack}>To Home</button>
      </Link>
      <h1>Name: {character.name}</h1>
      <h2 className={s.subTitle}>Gender: {character.gender}</h2>
      <h2 className={s.subTitle}>Origin: {character.origin?.name}</h2>
      <h2 className={s.subTitle}>Location: {character.location?.name}</h2>
      <div>
        <img className={s.imgDetail} src={character.image} alt="not found" />
      </div>
    </div>
  );
};

export default Detail;
