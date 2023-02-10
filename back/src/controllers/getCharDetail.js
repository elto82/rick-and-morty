const axios = require("axios");

const getCharDetail = (res, id) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      const { data } = response;
      const obj = {
        image: data.image,
        name: data.name,
        gender: data.gender,
        status: data.status,
        origin: data?.origin,
        location: data.location,
        species: data.species,
      };
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(obj));
    })
    .catch((error) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(error.message);
    });
};

module.exports = getCharDetail;
