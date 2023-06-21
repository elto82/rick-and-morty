const app = require("./src/app");
const { sequelize } = require("./src/DB_connection");
const { saveApiData } = require("./src/controllers/saveApiData");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

sequelize
  .sync({ force: true })
  .then(async () => {
    console.log("DB connect");
    // console.log(await saveApiData());

    await saveApiData();
    app.listen(PORT, () => {
      console.log(`Server listening http//:localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error during deployment:", error);
    process.exit(1); // Salir del proceso con código de error
  });
