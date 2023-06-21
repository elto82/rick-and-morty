const axios = require("axios");
const { where } = require("sequelize");
const { Character } = require("../DB_connection");

const getCharacterId = async (req, res) => {
  try {
    const { id } = req.params;
    const character = await Character.findOne({
      where: { id: id },
    });

    if (character === null) {
      throw new Error(`the character whit ${id} not exist`);
    }
    res.status(200).json(character);
  } catch (error) {
    res.status(500).end(error.message);
  }
};

module.exports = getCharacterId;
