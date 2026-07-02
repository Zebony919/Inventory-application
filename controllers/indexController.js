const db = require("../db/queries.js");

async function getGames(req, res) {
  res.render("index", {
    title: "Games",
    games: await db.getAllGames(),
  });
}

module.exports = { getGames };
