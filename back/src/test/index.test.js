const app = require("../routes/server.js");
const session = require("supertest");
const agent = session(app);

describe("Test de RUTAS", () => {
  describe("GET rickandmorty/character/{id}", () => {
    it("Responde con status: 200", () => {
      agent.get("/rickandmorty/character/1").expect(200);
    });

    it("Responde un objeto con las propiedades: 'id', 'name', 'species', 'gender' e 'image'", () => {
      agent.get("/rickandmorty/character/1").then((response) => {
        expect(response.status).toBe(200);
        expect(Object.keys(response.body)).toEqual(
          expect.arrayContaining(["id", "name", "species", "gender", "image"])
        );
      });
    });

    it("Si hay un error responde con status: 500", () => {
      agent.get("/rickandmorty/character/IDqueNoExiste").expect(500);
    });
  });

  describe("GET rickandmorty/detail/{detailId}", () => {
    it("Responde con status: 200", () => {
      agent.get("/rickandmorty/detail/1").expect(200);
    });

    it("Responde un objeto con las propiedades: 'id', 'name', 'species', 'gender' 'image' 'status' 'origin' 'location'", () => {
      agent.get("/rickandmorty/detail/1").then((response) => {
        expect(response.status).toBe(200);
        expect(Object.keys(response.body)).toEqual(
          expect.arrayContaining([
            "id",
            "name",
            "species",
            "gender",
            "image",
            "status",
            "origin",
            "location",
          ])
        );
      });
    });

    it("Si hay un error responde con status: 500", () => {
      agent.get("/rickandmorty/detail/IDqueNoExiste").expect(500);
    });
  });
});
