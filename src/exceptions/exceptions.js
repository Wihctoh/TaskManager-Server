const ExceptionType = {
  DB_GET_USERS_NOT_FOUND: 'Users table is empty',
  DB_GET_USER_NOT_FOUND: 'User by id not found',
  DB_POST_USER_NOT_CREATED: "User doesn't create",
  DB_PUT_USER_NOT_UPDATED: "User doesn't updata",
  DB_DELETE_USER_NOT_DELETED: "User doesn't delete",
  DB_PATCH_USER_NOT_PATCHED: "User doesn't partially update",

  DB_GET_TASKS_NOT_FOUND: 'Tasks table is empty',
  DB_GET_TASK_NOT_FOUND: 'Task by id not found',
  DB_POST_TASK_NOT_CREATED: "Task doesn't create",
  DB_PUT_TASK_NOT_UPDATED: "Task doesn't updata",
  DB_DELETE_TASK_NOT_DELETED: "Task doesn't delete",
  DB_PATCH_TASK_NOT_PATCHED: "Task doesn't partially update",

  ID_NOT_NUMBER: "id isn't a number",
  ID_NEGATIVE: 'id is less than zero',

  USER_NAME_EMPTY: 'user name is empty',
  USER_SURNAME_EMPTY: 'user surname is empty',
  USER_EMAIL_EMPTY: 'user email is empty',
  USER_PWD_EMPTY: 'user pwd is empty',
  TASK_TITLE_EMPTY: 'task title is empty',

  USER_NAME_INVALID: 'incorrect user name',
  USER_SURNAME_INVALID: 'incorrect user surname',
  USER_EMAIL_INVALID: 'incorrect user email',
  USER_PWD_INVALID: 'pwd is less than 8 symbols',
  TASK_TITLE_INVALID: 'incorrect task',
  TASK_USERID_INVALID: 'incorrect user_id',
  TASK_USERID_TOO_SMALL: 'user_id is less than zero',
};

module.exports = ExceptionType;
