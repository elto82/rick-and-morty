const axios = require("axios");
const { Character } = require("../DB_connection");

const getApiData = async () => {
  try {
    let i = 1;
    let characters = [];

    while (i < 6) {
      const {
        data: { results },
      } = await axios.get(
        `https://rickandmortyapi.com/api/character?page=${i}`
      );
      characters.push(
        results.map((char) => {
          return {
            id: char.id,
            name: char.name,
            species: char.species,
            status: char.status,
            origin: char.origin.name,
            gender: char.gender,
            image: char.image,
          };
        })
      );
      i++;
    }
    //console.log(characters);

    const allCharacters = characters.flat();
    //console.log(allCharacters);

    return allCharacters;
  } catch (error) {
    throw new Error(`Error al obtener datos de la API: ${error.message}`);
  }
};

const saveApiData = async () => {
  try {
    const allCharacters = await getApiData();
    await Character.bulkCreate(allCharacters);
    return { success: true, data: allCharacters };
  } catch (error) {
    return { success: false, data: error.message };
  }
};

module.exports = {
  saveApiData,
};
