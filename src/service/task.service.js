const { getAllTaskDB, createTaskDB, getTaskByIdDB } = require('../repository/task.repository');

async function getAllTask() {
  const data = await getAllTaskDB();

  return data;
}

async function getTaskById(id) {
  const data = await getTaskByIdDB(id);

  return data;
}

async function createTask(task, user_id) {
  const data = createTaskDB(task, user_id);

  return data;
}

module.exports = { getAllTask, createTask, getTaskById };
