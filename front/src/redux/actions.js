import axios from "axios";

export const addFavorite = (character) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `http://localhost:7000/rickandmorty/fav`,
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

export const removeFavorite = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:7000/rickandmorty/fav/${id}`);

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
        "http://localhost:7000/rickandmorty/fav"
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
