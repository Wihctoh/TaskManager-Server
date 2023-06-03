const { Pool } = require("pg");

const pool = new Pool({
  password: process.env.PWD,
  port: process.env.PORT_DB,
  user: process.env.USER,
  database: process.env.DB,
  host: process.env.HOST,
});
module.exports = pool;
