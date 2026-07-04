const express = require("express");
const indexRouter = express.Router();
const indexController = require("../controllers/indexController.js");

indexRouter.get("/", indexController.getGames);
indexRouter.get("/create", indexController.createGame);
indexRouter.get("/view/:id", indexController.viewGame);
indexRouter.get("/genres", indexController.getGenres);

indexRouter.post("/create", indexController.postGame);
indexRouter.post("/delete/:id", indexController.deleteGame);

module.exports = indexRouter;
