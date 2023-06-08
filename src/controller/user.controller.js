const router = require('express').Router();
const { isValidID, isValidUserBody } = require('../helper/validation');
const { getAllUsers, createUser, getUsersById, updateUser, patchUser, deleteUser } = require('../service/user.service');

router.get('/', async (req, res) => {
  try {
    const data = await getAllUsers();

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post('/', isValidUserBody, async (req, res) => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data = await createUser(name, surname, email, pwd);

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get('/:id', isValidID, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getUsersById(id);

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.put('/:id', isValidUserBody, isValidID, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname, email, pwd } = req.body;
    const data = await updateUser(id, name, surname, email, pwd);

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const clientObj = req.body;

    const data = await patchUser(id, clientObj);

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.delete('/:id', isValidID, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteUser(id);

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
