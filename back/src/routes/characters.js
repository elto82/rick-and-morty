const express = require("express");
const router = express.Router();

const { getAllChars } = require("../controllers/getAllChars");

router.get("/allCharacters", getAllChars);

/* const {
  getCharacterId,
  getDetailId,
  getFav,
  postFav,
  deleteFavId,
} = require("../controllers/index.js"); */
const getCharacterId = require("../controllers/getCharById");
const getDetailId = require("../controllers/getCharDetail");
const getFav = require("../controllers/getFav");
const postFav = require("../controllers/postFav");
const deleteFavId = require("../controllers/deleteFavId");

router.get("/character/:id", getCharacterId);
router.get("/detail/:detailId", getDetailId);
router.get("/fav", getFav);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFavId);

module.exports = router;
