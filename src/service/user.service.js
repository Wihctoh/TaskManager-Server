const ExceptionType = require('../exceptions/exceptions');

const { getAllUsersDB, createUserDB, getUsersByIdDB, updateUserDB, deleteUserDB, patchUserDB } = require('../repository/user.repository');

async function getAllUsers() {
  const data = await getAllUsersDB();

  if (!data.length) throw new Error(ExceptionType.DB_GET_USERS_NOT_FOUND);

  return data;
}

async function createUser(name, surname, email, pwd) {
  const data = await createUserDB(name, surname, email, pwd);

  if (!data.length) throw new Error(ExceptionType.DB_POST_USER_NOT_CREATED);

  return data;
}

async function getUsersById(id) {
  const data = await getUsersByIdDB(id);

  if (!data.length) throw new Error(ExceptionType.DB_GET_USER_NOT_FOUND);

  return data;
}

async function updateUser(id, name, surname, email, pwd) {
  const data = await updateUserDB(id, name, surname, email, pwd);

  if (!data.length) throw new Error(ExceptionType.DB_PUT_USER_NOT_UPDATED);

  return data;
}

async function patchUser(id, clientObj) {
  const data = await patchUserDB(id, clientObj);

  if (!data.length) throw new Error(ExceptionType.DB_PATCH_USER_NOT_PATCHED);

  return data;
}

async function deleteUser(id) {
  const data = await deleteUserDB(id);

  if (!data.length) throw new Error(ExceptionType.DB_DELETE_USER_NOT_DELETED);

  return data;
}

module.exports = {
  getAllUsers,
  createUser,
  getUsersById,
  updateUser,
  deleteUser,
  patchUser,
};
