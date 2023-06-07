const pool = require('../db');

async function getAllTaskDB() {
  const client = await pool.connect();

  const sql = 'select * from tasks';
  const data = (await client.query(sql)).rows;

  return data;
}

async function getTaskByIdDB(id) {
  const client = await pool.connect();

  const sql = 'select * from tasks where id = $1';
  const data = (await client.query(sql, [id])).rows;

  return data;
}

async function createTaskDB(task, user_id) {
  const client = await pool.connect();

  try {
    await client.query('begin');

    const sql = 'insert into tasks (task, user_id) values ($1, $2) returning *';
    const data = (await client.query(sql, [task, user_id])).rows;

    await client.query('commit');

    return data;
  } catch (error) {
    await client.query('rollback');
    console.log(`createTask: ${error.message}`);

    return [];
  }
}

module.exports = { getAllTaskDB, createTaskDB, getTaskByIdDB };
