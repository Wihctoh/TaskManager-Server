const { Pool } = require("pg");

const pool = new Pool({
  // password: process.env.PWD,
  password: "12345678",
  port: process.env.PORT_DB,
  user: process.env.USER,
  database: process.env.DB,
  host: process.env.HOST,
});
console.log(process.env.PWD);
module.exports = pool;
