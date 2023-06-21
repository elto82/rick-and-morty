const axios = require("axios");
const { Character } = require("../DB_connection");

const getDetailId = async (req, res) => {
  try {
    const { detailId } = req.params;
    const character = await Character.findOne({ where: { id: detailId } });

    if (!character) {
      return res.status(404).json({ message: "Character not found" });
    }

    res.status(200).json(character);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = getDetailId;
