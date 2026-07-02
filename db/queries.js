const pool = require("./pool");

async function getAllGames() {
  const { rows } = await pool.query("SELECT * FROM games");
  return rows;
}

async function getAllGenres() {
  const { genres } = await pool.query("SELECT * FROM genres");
}

async function insertGame({
  name,
  date_released,
  cover_image,
  developers,
  rating,
}) {
  pool.query(
    "INSERT INTO games (name, date_released, cover_image, developers, rating) VALUES ($1, $2, $3, $4, $5)",
    [name, date_released, cover_image, developers, rating],
  );
}

async function deleteGame(id) {
  await pool.query("DELETE FROM games WHERE id = $1", [id]);
}

module.exports = { getAllGames, getAllGenres, insertGame, deleteGame };
