const pool = require("./pool");

async function getAllGames() {
  const { rows } = await pool.query("SELECT * FROM games");
  return rows;
}

async function getAllGenres() {
  const { rows } = await pool.query("SELECT * FROM genres");
  return rows;
}

async function getGameById(id) {
  const { rows } = await pool.query("SELECT * FROM games WHERE id = $1", [id]);
  return rows[0];
}

async function getGameByGenre(genre) {
  const query = `
    SELECT games.*
    FROM games
    JOIN game_genres ON games.id = game_genres.game_id
    JOIN genres ON game_genres.genre_id = genres.id
    WHERE LOWER(genre.name) = LOWER($1);
  `;

  try {
    const { rows } = pool.query(query, genre);
    return rows;
  } catch (err) {
    console.log(err);
  }
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

module.exports = {
  getAllGames,
  getAllGenres,
  insertGame,
  getGameByGenre,
  deleteGame,
  getGameById,
};
