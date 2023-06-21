const axios = require("axios");
const { Favorite } = require("../DB_connection");

const deleteFavId = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRows = await Favorite.destroy({
      where: { id: id },
    });

    res.status(200).json({ message: "Personaje eliminado correctamente" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = deleteFavId;
