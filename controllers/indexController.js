const db = require("../db/queries.js");

async function getGames(req, res) {
  res.render("index", {
    title: "Games",
    games: await db.getAllGames(),
  });
}

async function createGame(req, res) {
  res.render("create", {
    title: "Create New Game",
  });
}

async function viewGame(req, res) {
  const gameId = req.params.id;
  const game = await db.getGameById(gameId);

  if (!game) {
    return res.status(404).send("Game not found!");
  }

  console.log("Game: " + game);

  res.render("view", {
    game: game,
  });
}

async function getGenres(req, res) {
  res.render("genres");
}

async function postGame(req, res) {
  await db.insertGame(req.body);
  res.redirect("/");
}

async function deleteGame(req, res) {
  const gameId = req.params.id;
  await db.deleteGame(gameId);
  res.redirect("/");
}

module.exports = {
  getGames,
  createGame,
  viewGame,
  getGenres,
  postGame,
  deleteGame,
};
