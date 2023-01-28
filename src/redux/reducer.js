const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "FILTER":
      const filteredCharacters = state.allCharacters.filter(
        (char) => char.gender === payload
      );
      return { ...state, myFavorites: filteredCharacters };
    case "ORDER":
      let orderedCharacters = [...state.allCharacters];
      if (payload === "Ascendente") {
        orderedCharacters = orderedCharacters.sort((a, b) => a.id - b.id);
      } else {
        orderedCharacters = orderedCharacters.sort((a, b) => b.id - a.id);
      }
      return { ...state, myFavorites: orderedCharacters };
    case "ADD_FAVORITE":
      return {
        ...state,
        allCharacters: [...state.allCharacters, payload],
        myFavorites: [...state.myFavorites, payload],
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        myFavorites: state.myFavorites.filter((fav) => fav.id !== payload),
      };
    default:
      return state;
  }
};

export default rootReducer;
