import axios from "axios";

// Acción para agregar personajes a la lista de favoritos
export const addFavorite = (character) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:3001/rickandmorty/fav`, character)
      .then((v) => v.data)
      .then((d) => {
        dispatch({
          type: "ADD_FAVORITE",
          payload: d,
        });
      });
  };
};

// Acción para eliminar personajes de la lista de favoritos
export const removeFavorite = (characterId) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:3001/rickandmorty/fav/${characterId}`)
      .then((v) => v.data)
      .then((d) => {
        dispatch({
          type: "REMOVE_FAVORITE",
          payload: characterId,
        });
      });
  };
};

// action-creator para filtrar las tarjetas
export const filterCards = (status) => {
  return {
    type: "FILTER",
    payload: status,
  };
};

// action-creator para ordenar las tarjetas
export const orderCards = (id) => {
  return {
    type: "ORDER",
    payload: id,
  };
};
