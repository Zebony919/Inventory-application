const db = require("../db/queries.js");

async function getHomepage(req, res) {
  res.render("index", {
    title: "Home",
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

async function getAllGamesPage(req, res) {
  try {
    const games = await db.getAllGames();
    res.render("allGames", {
      games: games,
    });
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
}

async function getGenres(req, res) {
  res.render("genres");
}

async function getGenreGames(req, res) {
  res.render("genreGames", {
    genreName: req.params.genreName,
  });
}

async function postGame(req, res) {
  try {
    const game = req.body;

    const imageName = req.file ? req.file.filename : "default-cover.png";
    const imagePath = `/images/gameCovers/${imageName}`;

    game.cover_image = imagePath;

    await db.insertGame(game);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error Adding Game");
  }
}

async function deleteGame(req, res) {
  const gameId = req.params.id;
  await db.deleteGame(gameId);
  res.redirect("/");
}

module.exports = {
  getHomepage,
  createGame,
  viewGame,
  getAllGamesPage,
  getGenres,
  getGenreGames,
  postGame,
  deleteGame,
};
