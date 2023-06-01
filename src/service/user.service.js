const {
  getAllUsersDB,
  createUserDB,
  getUsersByIdDB,
  updateUserDB,
} = require("../repository/user.repository");

async function getAllUsers() {
  const data = await getAllUsersDB();

  if (!data.length) throw new Error("no have data!");

  return data;
}

async function createUser(name, surname, email, pwd) {
  const data = await createUserDB(name, surname, email, pwd);

  if (!data.length) throw new Error("user not created!");

  return data;
}

async function getUsersById(id) {
  const data = await getUsersByIdDB(id);

  if (!data.length) throw new Error("no have data!");

  return data;
}

async function updateUser(id, name, surname, email, pwd) {
  const data = await updateUserDB(id, name, surname, email, pwd);

  return data;
}

module.exports = { getAllUsers, createUser, getUsersById, updateUser };
