//const favs = require("../utils/favs");
const axios = require("axios");
const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  try {
    //const { character } = req.body;
    const { id, image, name, gender, species, origin, status } = req.body;
    if (!image || !name || !gender || !species) {
      throw new Error("Invalid request body");
    }
    // validar si existe
    const existingFavorite = await Favorite.findOne({ where: { name } });
    if (existingFavorite) {
      throw new Error("Item already in favorites");
    }
    /* const exists = favs.some((item) => item.name === name);
    if (exists) {
      throw new Error("Item already in favorites");
    } */
    const newFavorite = await Favorite.create({
      image,
      name,
      gender,
      species,
      origin,
    });
    // favs.push(req.body);

    res.json(newFavorite);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
module.exports = postFav;
