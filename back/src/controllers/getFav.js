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
