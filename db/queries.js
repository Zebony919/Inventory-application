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
  release_date,
  cover_image,
  developers,
  rating,
}) {
  pool.query(
    "INSERT INTO games (name, date_released, cover_image, developers, rating) VALUES ($1)",
  );
}

module.exports = { getAllGames, getAllGenres, insertGame };
