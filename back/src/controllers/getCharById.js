const axios = require("axios");
const { where } = require("sequelize");
const { Character } = require("../DB_connection");

const getCharacterId = async (req, res) => {
  try {
    const { id } = req.params;
    const character = await Character.findOne({
      where: { id: id },
    });
    // const response = await axios.get(
    //   `https://rickandmortyapi.com/api/character/${id}`
    // );
    // const { data } = response;
    // let character = {
    //   id: data.id,
    //   image: data.image,
    //   name: data.name,
    //   gender: data.gender,
    //   species: data.species,
    // };
    if (character === null) {
      throw new Error(`the character whit ${id} not exist`);
    }
    res.status(200).json(character);
  } catch (error) {
    res.status(500).end(error.message);
  }
};

module.exports = getCharacterId;
