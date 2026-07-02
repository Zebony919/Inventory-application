const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: "postgres",
  database: "Inventory-application",
  password: "Xjm2006xjm",
  port: 5432,
});
