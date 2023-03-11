import React from "react";
import { connect } from "react-redux";
import "./Favorites.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
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

export default connect(mapStateToProps)(Favorites);
