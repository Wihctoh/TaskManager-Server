const router = require('express').Router();
const buildResponse = require('../helper/buildResponse');
const { isValidID, isValidUserBody } = require('../helper/validation');
const { getAllUsers, createUser, getUsersById, updateUser, patchUser, deleteUser } = require('../service/user.service');

router.get('/', async (req, res) => {
  try {
    const data = await getAllUsers();

    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

router.post('/', isValidUserBody, async (req, res) => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data = await createUser(name, surname, email, pwd);

    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

router.get('/:id', isValidID, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getUsersById(id);

    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

router.put('/:id', isValidUserBody, isValidID, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname, email, pwd } = req.body;
    const data = await updateUser(id, name, surname, email, pwd);

    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const clientObj = req.body;

    const data = await patchUser(id, clientObj);

    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

router.delete('/:id', isValidID, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteUser(id);

    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

module.exports = router;
