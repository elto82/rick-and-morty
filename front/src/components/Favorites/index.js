/* 

import { connect, useDispatch } from "react-redux";
import React from "react";
import "./Favorites.css";
import { useNavigate } from "react-router-dom";
import {
  orderCards,
  filterCards,
  removeFavorite,
} from "../../redux/actions.js";

const Favorites = ({ myFavorites }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2>Favorite</h2>
      <button className="favorite-button" onClick={() => navigate("/home")}>
        Home
      </button>
      <div className="filters-container">
        <label>Order:</label>
        <select onChange={(e) => dispatch(orderCards(e.target.value))}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <label>Filter:</label>
        <select onChange={(e) => dispatch(filterCards(e.target.value))}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div className="favorites-container">
        {myFavorites.map((fav) => (
          <div className="favorite-card" key={fav.id}>
            {
              <button onClick={() => dispatch(removeFavorite(fav.id))}>
                ❤️
              </button>
            }
            <h2>Number: {fav.id}</h2>
            <h2>{fav.name}</h2>
            <p>Especie: {fav.species}</p>
            <p>Género: {fav.gender}</p>
            <img src={fav.image} alt={fav.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
 */

//// card
/* 
import c from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFavorite, removeFavorite } from "../../redux/actions.js";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

function Card({
  name,
  id,
  image,
  gender,
  species,
  addFavorite,
  removeFavorite,
  myFavorites,
  onClose,
}) {
  const character = {
    name,
    id,
    image,
    gender,
    species,
  };
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav === true) {
      setIsFav(false);
      removeFavorite(id);
    } else {
      setIsFav(true);
      addFavorite(character);
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myFavorites]);
 */ //////////////////////
/*   useEffect(() => {
    for (let i = 0; i < props.myFavorites.length; i++) {
      if (props.myFavorites[i].id === props.id) {
        setIsFav(true);
        break;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.myFavorites]); */
/* 
  return (
    <div className={c.card}>
      <button className={c.cardbutton} onClick={onClose}>
        💀
      </button>

      <img className={c.cardimage} src={image} alt={name} />
      <Link to={`/detail/${id}`}>
        <h2 className={c.cardtitle}>{name}</h2>
      </Link>
      <h3 className={c.cardsubtitle}>
        {species} 😎 {gender}
      </h3>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    addFavorite: (character) => dispatch(addFavorite(character)),
    removeFavorite: (id) => dispatch(removeFavorite(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
 */
