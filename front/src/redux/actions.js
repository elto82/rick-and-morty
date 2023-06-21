import axios from "axios";

export const addFavorite = (character) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        `https://rick-and-morty-production-b632.up.railway.app/rickandmorty/fav`,
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
      await axios.delete(
        `https://rick-and-morty-production-b632.up.railway.app/rickandmorty/fav/${id}`
      );

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
        "https://rick-and-morty-production-b632.up.railway.app/rickandmorty/fav"
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
