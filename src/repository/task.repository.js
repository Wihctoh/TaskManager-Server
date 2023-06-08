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

async function deleteTaskDB(id) {
  const client = await pool.connect();

  try {
    await client.query('begin');

    const sql = 'delete from tasks where id = $1 returning *';
    const data = (await client.query(sql, [id])).rows;

    await client.query('commit');

    return data;
  } catch (error) {
    await client.query('rollback');
    console.log(`deleteTaskDB: ${error.message}`);

    return [];
  }
}

async function patchTaskDB(id, clientObj) {
  const client = await pool.connect();

  try {
    await client.query('begin');

    const sqlDB = 'select * from tasks where id = $1';
    const dataRes = (await client.query(sqlDB, [id])).rows;

    const newObj = { ...dataRes[0], ...clientObj };

    const sql = 'update tasks set task = $1, user_id = $2 where id = $3 returning *';
    const data = (await client.query(sql, [newObj.task, newObj.user_id, id])).rows;

    await client.query('commit');

    return data;
  } catch (error) {
    await client.query('rollback');
    console.log(`patchTaskDB: ${error.message}`);

    return [];
  }
}

module.exports = { getAllTaskDB, createTaskDB, getTaskByIdDB, deleteTaskDB, patchTaskDB };
