import axios from "axios";

// Acción para agregar personajes a la lista de favoritos
/* export const addFavorite = (character) => {
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
}; */
export const addFavorite = (character) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `http://localhost:3001/rickandmorty/fav`,
        character
      );
      const data = response.data;
      return dispatch({
        type: "ADD_FAVORITE",
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

// Acción para eliminar personajes de la lista de favoritos
/* export const removeFavorite = (characterId) => {
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
}; */
export const removeFavorite = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);

      return dispatch({
        type: "REMOVE_FAVORITE",
        payload: id,
      });
    } catch (error) {
      console.error(error);
    }
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
//getFavorites
export const getFavorites = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "http://localhost:3001/rickandmorty/fav"
      );
      dispatch({
        type: "GET_FAVORITES",
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
