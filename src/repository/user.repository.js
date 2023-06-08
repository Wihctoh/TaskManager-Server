const pool = require('../db');

async function getAllUsersDB() {
  const client = await pool.connect();
  const sql = 'select * from	users';
  const data = (await client.query(sql)).rows;

  return data;
}

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
    console.log(`createUserDB: ${error.message}`);

    return [];
  }
}

async function getUsersByIdDB(id) {
  const client = await pool.connect();
  const sql = 'select * from	users where id = $1';
  const data = (await client.query(sql, [id])).rows;

  return data;
}

async function updateUserDB(id, name, surname, email, pwd) {
  const client = await pool.connect();
  try {
    await client.query('begin');

    const sql = 'update users set name = $1, surname = $2, email = $3, pwd = $4 where id = $5 returning *';
    const data = (await client.query(sql, [name, surname, email, pwd, id])).rows;

    return data;
  } catch (error) {
    await client.query('rollback');
    console.log(`updateUserDB: ${error.message}`);

    return [];
  }
}

async function patchUserDB(id, clientObj) {
  const client = await pool.connect();
  try {
    await client.query('begin');

    const sqlReq = 'select * from users where id = $1';
    const dataRes = (await client.query(sqlReq, [id])).rows;

    const newObj = { ...dataRes[0], ...clientObj };

    const sqlUpdate = 'update users set name = $1, surname = $2, email = $3, pwd = $4  where id = $5 returning *';
    const data = (await client.query(sqlUpdate, [newObj.name, newObj.surname, newObj.email, newObj.pwd, id])).rows;

    await client.query('commit');

    return data;
  } catch (error) {
    await client.query('rollback');
    console.log(`patchUser: ${error.message}`);

    return [];
  }
}

async function deleteUserDB(id) {
  const client = await pool.connect();
  try {
    await client.query('begin');

    const sql = 'delete from users where id = $1 returning *';
    const data = (await client.query(sql, [id])).rows;

    return data;
  } catch (error) {
    await client.query('rollback');
    console.log(`deleteUserDB: ${error.message}`);

    return [];
  }
}

module.exports = {
  getAllUsersDB,
  createUserDB,
  getUsersByIdDB,
  updateUserDB,
  deleteUserDB,
  patchUserDB,
};
