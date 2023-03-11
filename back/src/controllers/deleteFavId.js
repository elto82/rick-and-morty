// const favs = require("../utils/favs");
const axios = require("axios");
const { Favorite } = require("../DB_connection");

const deleteFavId = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRows = await Favorite.destroy({
      where: { id: id },
    });

    res.status(200).json({ message: "Personaje eliminado correctamente" });
    // if (id) {
    //   for (i = 0; i < favs.length; i++) {
    //     if (favs[i].id == id) {
    //       favs.splice(i, 1);
    //     }
    //   }
    //   res.status(200).json(favs);
    // }
    /* const { id } = req.params;
    // existe en favoritos?
    const character = favs.find((c) => c.id == Number(id));
    if (!character) {
      throw new Error("Personaje no encontrado en favoritos");
    }
    // Eliminar
    favs = favs.filter((e) => e.id !== Number(id));
    console.log("delete fav", favs);

    // Devolver el personaje eliminado en la respuesta
    res.status(200).json(favs); */
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = deleteFavId;

/* const deleteFav = (req, res) => {
  const { id } = req.params;
  const character = fav.find((f) => f.id === Number(id));

  if (character) {
    fav = fav.filter((f) => f !== character);
    //console.log("log de favoritos delete", fav);
    res.status(200).json(character);
  } else {
    res.status(400).json({
      error: "not found this character",
    });
  }
}; */
