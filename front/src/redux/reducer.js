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
        myFavorites: [...state.myFavorites, payload],
        allCharacters: [...state.allCharacters, payload],
        //allCharacters: [...state.myFavorites, payload],
      };

    case "REMOVE_FAVORITE":
      return {
        ...state,
        myFavorites: state.myFavorites.filter((fav) => fav.id !== payload),
        allCharacters: state.allCharacters.filter((c) => c.id !== payload),
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
