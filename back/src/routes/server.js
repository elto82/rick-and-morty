/* const http = require("http");
const characters = require("../utils/data.js");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.url.includes("rickandmorty/character")) {
    const id = req.url.split("/").at(-1);
    //find devuelve el primer elemento en coincidencia en objeto, filter devuelve un array con un objeto
    const character = characters.find((char) => char.id === Number(id));
    // const character = characters.filter((char) => char.id === Number(id));
    if (character) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(character));
    } else {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Character not found");
    }
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
  }
});

const port = 3001;
server.listen(port, "localhost", () => {
  console.log(`Server listening on port ${port}`);
});
 */

/* const http = require("http");
const getCharById = require("../controllers/getCharById");
const getCharDetail = require("../controllers/getCharDetail");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let id = req.url.split("/").at(-1);

  if (req.url.includes("onsearch")) {
    getCharById(res, id);
  } else if (req.url.includes("detail")) {
    getCharDetail(res, id);
  }
});

const port = 3001;
server.listen(port, () => console.log(`Server is listening on port ${port}`)); */

/* app.get("/rickandmorty/character/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    const characterData = {
      id: response.data.id,
      name: response.data.name,
      species: response.data.species,
      gender: response.data.gender,
      image: response.data.image,
    };
    console.log(characterData);

    res.json(characterData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving character data");
  }
}); */
/* 
app.get("/rickandmorty/detail/:detailId", async (req, res) => {
  const detailId = req.params.detailId;
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${detailId}`
    );
    const characterData = {
      name: response.data.name,
      status: response.data.status,
      species: response.data.species,
      gender: response.data.gender,
      origin: response.data.origin.name,
      image: response.data.image,
    };
    res.json(characterData);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error retrieving character detail data");
  }
}); */

/* // ruta para obtener los personajes favoritos
app.get("/rickandmorty/fav", (req, res) => {
  res.json(fav);
}); */
/* 
// ruta para guardar un personaje como favorito
app.post("/rickandmorty/fav", async (req, res) => {
  const charId = req.body.charId;
  try {
    const charData = await getCharById(charId); // obtener datos del personaje desde la API
    const charDetail = await getCharDetail(charId); // obtener detalles del personaje desde la API
    const favChar = { id: charId, data: charData, detail: charDetail };
    fav.push(favChar);
    res.json(favChar);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error adding character to favorites");
  }
}); */
/* 
// ruta para eliminar un personaje de los favoritos
app.delete("/rickandmorty/fav/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = fav.findIndex((char) => char.id === id);
  if (index !== -1) {
    fav.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.status(404).send("Character not found in favorites");
  }
}); */
/* const port = 3001;
app.listen(port, () => {
  console.log(`Server started on port ${port} `);
}); */
