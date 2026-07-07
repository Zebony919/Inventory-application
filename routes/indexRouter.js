const express = require("express");
const path = require("path");
const multer = require("multer");
const indexRouter = express.Router();
const indexController = require("../controllers/indexController.js");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images/gameCovers/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, "game-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

indexRouter.get("/", indexController.getHomepage);
indexRouter.get("/create", indexController.createGame);
indexRouter.get("/view/:id", indexController.viewGame);
indexRouter.get("/games", indexController.getAllGamesPage);
indexRouter.get("/genres", indexController.getGenres);
indexRouter.get("/genres/:genreName", indexController.getGenreGames);

indexRouter.post(
  "/create",
  upload.single("cover_image"),
  indexController.postGame,
);
indexRouter.post("/delete/:id", indexController.deleteGame);

module.exports = indexRouter;
