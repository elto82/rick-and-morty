const axios = require("axios");
const fav = [];

const getCharacterId = (req, res) => {
  const { id } = req.params;

  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      const { data } = response;
      const character = {
        id: data.id,
        image: data.image,
        name: data.name,
        gender: data.gender,
        species: data.species,
      };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(character));
    })
    .catch((error) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(error.message);
    });
};

const getDetailId = (req, res) => {
  const { detailId } = req.params;

  axios
    .get(`https://rickandmortyapi.com/api/character/${detailId}`)
    .then((response) => {
      const { data } = response;
      const character = {
        image: data.image,
        name: data.name,
        gender: data.gender,
        species: data.species,
        id: data.id,
        status: data.status,
        origin: data?.origin,
        location: data.location,
      };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(character));
    })
    .catch((error) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(error.message);
    });
};

const getFav = (req, res) => {
  //res.status(200).end(JSON.stringify(fav));
  res.status(200).json(fav);
};

const postFav = (req, res) => {
  fav.push(req.body);
  console.log("post fav", fav);
  res.status(200).end(JSON.stringify(req.body));
};

const deleteFavId = (req, res) => {
  const { id } = req.params;
  const character = fav.find((c) => c.id === Number(id));
  if (character) {
    fav = fav.filter((e) => e.id !== Number(id));
    console.log("delete fav", fav);

    res.status(200).end(JSON.stringify(character));
  } else {
    res.status(400).end("character not  found");
  }
};

module.exports = {
  getCharacterId,
  getDetailId,
  getFav,
  postFav,
  deleteFavId,
};
