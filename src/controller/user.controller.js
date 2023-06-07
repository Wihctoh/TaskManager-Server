const router = require('express').Router();
const { getAllUsers, createUser, getUsersById, updateUser, deleteUser } = require('../service/user.service');

router.get('/', async (req, res) => {
  try {
    const data = await getAllUsers();

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data = await createUser(name, surname, email, pwd);

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getUsersById(id);

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, surname, email, pwd } = req.body;
    const data = await updateUser(id, name, surname, email, pwd);

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteUser(id);

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
