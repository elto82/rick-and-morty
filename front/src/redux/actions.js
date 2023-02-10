// Acción para agregar personajes a la lista de favoritos
export const addFavorite = (character) => {
  return {
    type: "ADD_FAVORITE",
    payload: character,
  };
};

// Acción para eliminar personajes de la lista de favoritos
export const removeFavorite = (characterId) => {
  return {
    type: "REMOVE_FAVORITE",
    payload: characterId,
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
