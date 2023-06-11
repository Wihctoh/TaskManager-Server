const pool = require('../db');

async function createUserDB(name, surname, email, pwd) {
  const client = await pool.connect();
  try {
    await client.query('begin');

    const sql = 'insert into users (name, surname, email, pwd) values ($1, $2, $3, $4) returning *';
    const data = (await client.query(sql, [name, surname, email, pwd])).rows;

    await client.query('commit');

    return data;
  } catch (error) {
    await client.query('rollback');
    console.log(`createUser: ${error.message}`);

    return [];
  }
}

async function getUserByEmailDB(email) {
  const client = await pool.connect();
  try {
    await client.query('begin');

    const sql = 'select * from users where email = $1';
    const data = (await client.query(sql, [email])).rows;

    await client.query('commit');

    return data;
  } catch (error) {
    await client.query('rollback');
    console.log(`createUser: ${error.message}`);

    return [];
  }
}

module.exports = { createUserDB, getUserByEmailDB };
