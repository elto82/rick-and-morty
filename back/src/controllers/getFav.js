/* 
const favs = require("../utils/favs");

const getFav = async (req, res) => {
  try {
    res.status(200).json(favs);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
module.exports = getFav;
*/
//const axios = require("axios");
const { Favorite } = require("../DB_connection");

const getFav = async (req, res) => {
  try {
    const favorites = await Favorite.findAll();
    if (!favorites.length) {
      res.status(404).json({ mensaje: "not found favorites" });
    }
    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = getFav;
