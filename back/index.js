const app = require("./src/app");
const { sequelize } = require("./src/DB_connection");
const { saveApiData } = require("./src/controllers/saveApiData");

//const PORT = process.env.PORT || 3001;
const PORT = 3001;

sequelize
  .sync({ force: true })
  .then(async () => {
    console.log("DB connect");
    //console.log(await saveApiData());

    await saveApiData();
    app.listen(PORT, () => {
      console.log(`Server listening http//:localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
