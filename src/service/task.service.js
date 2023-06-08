const ExceptionType = require('../exceptions/exceptions');

const { getAllTaskDB, createTaskDB, getTaskByIdDB, deleteTaskDB, patchTaskDB } = require('../repository/task.repository');

async function getAllTask() {
  const data = await getAllTaskDB();

  if (!data.length) throw new Error(ExceptionType.DB_GET_TASKS_NOT_FOUND);

  return data;
}

async function getTaskById(id) {
  const data = await getTaskByIdDB(id);

  if (!data.length) throw new Error(ExceptionType.DB_GET_TASK_NOT_FOUND);

  return data;
}

async function createTask(task, user_id) {
  const data = createTaskDB(task, user_id);

  if (!data.length) throw new Error(ExceptionType.DB_POST_TASK_NOT_CREATED);

  return data;
}

async function deleteTask(id) {
  const data = await deleteTaskDB(id);

  if (!data.length) throw new Error(ExceptionType.DB_DELETE_TASK_NOT_DELETED);

  return data;
}

async function patchTask(id, clientObj) {
  const data = await patchTaskDB(id, clientObj);

  if (!data.length) throw new Error(ExceptionType.DB_PATCH_TASK_NOT_PATCHED);

  return data;
}

module.exports = { getAllTask, createTask, getTaskById, deleteTask, patchTask };
