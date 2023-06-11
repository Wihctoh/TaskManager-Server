const bcrypc = require('bcrypt');
const ExceptionType = require('../exceptions/exceptions');
const { createUserDB, getUserByEmailDB } = require('../repository/api.repository');

const saltround = 10;

async function createUser(name, surname, email, pwd) {
  const foundUser = await getUserByEmailDB(email);

  if (foundUser.length) throw new Error(ExceptionType.DB_GET_USER_NOT_FOUND);

  const hashedPassword = await bcrypc.hash(pwd, saltround);

  const data = await createUserDB(name, surname, email, hashedPassword);

  return data;
}

async function authorizationUser(email, pwd) {
  const findUser = await getUserByEmailDB(email);

  if (!findUser.length) throw new Error(ExceptionType.DB_GET_USER_NOT_FOUND);

  const bool = await bcrypc.compare(pwd, findUser[0].pwd);

  if (!bool) throw new Error(ExceptionType.API_PWD_NOT_MATCH);

  return findUser;
}

module.exports = { createUser, authorizationUser };
