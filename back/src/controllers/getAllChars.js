//const { Character } = require("../models/Character");
const { Character } = require("../DB_connection");

const getAllChars = async (req, res) => {
  try {
    const allCharacters = await Character.findAll();
    res.status(200).json(allCharacters);
  } catch (error) {
    //console.error(error.message);

    res.status(500).json({ messaje: "Internal server error" });
  }
};

module.exports = {
  getAllChars,
};
