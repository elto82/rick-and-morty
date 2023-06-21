require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const modelCharacter = require("./models/Character");
const modelFavorite = require("./models/Favorite.js");

const sequelize = new Sequelize(
  // URL
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  { logging: false, native: false }
);

modelCharacter(sequelize);
modelFavorite(sequelize);

module.exports = {
  ...sequelize.models,
  sequelize,
};
