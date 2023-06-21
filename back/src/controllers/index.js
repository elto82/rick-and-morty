const axios = require("axios");
const fav = [];

const getCharacterId = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const { data } = response;
    const character = {
      id: data.id,
      image: data.image,
      name: data.name,
      gender: data.gender,
      species: data.species,
    };
    res.status(200).json(character);
  } catch (error) {
    res.status(500).end(error.message);
  }
};

const getDetailId = async (req, res) => {
  try {
    const { detailId } = req.params;
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${detailId}`
    );
    // propiedades por destructurin
    const { image, name, gender, species, id, status, origin, location } =
      response.data;
    // crear objeto con la data
    const character = {
      image,
      name,
      gender,
      species,
      id,
      status,
      origin,
      location,
    };
    // se envia ok con el obj convertido en formato json
    res.status(200).json(character);
  } catch (error) {
    // status 500 y el mensaje de error
    res.status(500).send(error.message);
  }
};

const getFav = async (req, res) => {
  try {
    res.status(200).json(fav);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const postFav = async (req, res) => {
  try {
    const { image, name, gender, species } = req.body;
    if (!image || !name || !gender || !species) {
      throw new Error("Invalid request body");
    }
    // validar si existe
    const exists = fav.some((item) => item.image === image);
    if (exists) {
      throw new Error("Item already in favorites");
    }
    fav.push(req.body);
    console.log("post fav", fav);
    res.json(req.body);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const deleteFavId = async (req, res) => {
  try {
    const { id } = req.params;
    // existe en favoritos?
    const character = fav.find((c) => c.id === Number(id));
    if (!character) {
      throw new Error("Personaje no encontrado en favoritos");
    }
    // Eliminar
    fav = fav.filter((e) => e.id !== Number(id));
    console.log("delete fav", fav);

    // Devolver el personaje eliminado en la respuesta
    res.status(200).json(character);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getCharacterId,
  getDetailId,
  getFav,
  postFav,
  deleteFavId,
};
