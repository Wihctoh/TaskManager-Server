const ExceptionType = require('../exceptions/exceptions');

function isValidID(req, res, next) {
  const { id } = req.params;

  if (isNaN(id)) throw new Error(ExceptionType.ID_NOT_NUMBER);
  if (id < 0) throw new Error(ExceptionType.ID_NEGATIVE);

  next();
}

function isValidUserBody(req, res, next) {
  const { name, surname, email, pwd } = req.body;

  if (!name) throw new Error(ExceptionType.USER_NAME_EMPTY);
  if (!surname) throw new Error(ExceptionType.USER_SURNAME_EMPTY);
  if (!email) throw new Error(ExceptionType.USER_EMAIL_EMPTY);
  if (!pwd) throw new Error(ExceptionType.USER_PWD_EMPTY);

  if (!isNaN(name)) throw new Error(ExceptionType.USER_NAME_INVALID);
  if (!isNaN(surname)) throw new Error(ExceptionType.USER_SURNAME_INVALID);
  if (!/^[\w\.\-]+@[a-z]{4,}\.[a-z]{2,}$/gm.test(email)) throw new Error(ExceptionType.USER_EMAIL_INVALID);
  if (pwd.length < 8) throw new Error(ExceptionType.USER_PWD_INVALID);

  next();
}

function isValidTaskBody(req, res, next) {
  const { task, user_id } = req.body;

  if (!task) throw new Error(ExceptionType.TASK_TITLE_EMPTY);

  if (!isNaN(task)) throw new Error(ExceptionType.TASK_TITLE_INVALID);
  if (isNaN(user_id)) throw new Error(ExceptionType.TASK_USERID_INVALID);
  if (user_id < 0) throw new Error(ExceptionType.TASK_USERID_TOO_SMALL);

  next();
}

module.exports = { isValidID, isValidUserBody, isValidTaskBody };
