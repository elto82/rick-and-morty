import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import s from "./Detail.module.css";
import axios from "axios";

const Detail = () => {
  const [character, setCharacter] = useState({});
  const { detailId } = useParams();

  useEffect(() => {
    const detailData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:7000/rickandmorty/detail/${detailId}`
        );
        const char = response.data;
        char.name
          ? setCharacter(char)
          : window.alert("No hay personajes con ese ID");
      } catch (error) {
        window.alert("No hay personajes con ese ID");
      }
    };

    detailData();
  }, [detailId]);

  console.log();
  return (
    <div className={s.container}>
      <Link to="/home">
        <button className={s.buttonBack}>To Home</button>
      </Link>
      <h1>Name: {character.name}</h1>
      <h2 className={s.subTitle}>Gender: {character.gender}</h2>
      <h2 className={s.subTitle}>Origin: {character.origin}</h2>
      {/* <h2 className={s.subTitle}>Location: {character.location?.name}</h2> */}
      <div>
        <img className={s.imgDetail} src={character.image} alt="not found" />
      </div>
    </div>
  );
};

export default Detail;
