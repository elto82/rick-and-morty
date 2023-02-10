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

const http = require("http");
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
server.listen(port, () => console.log(`Server is listening on port ${port}`));
