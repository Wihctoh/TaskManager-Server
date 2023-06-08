const router = require('express').Router();
const { isValidID, isValidTaskBody } = require('../helper/validation');
const { getAllTask, createTask, getTaskById, deleteTask, patchTask } = require('../service/task.service');

router.get('/', async (req, res) => {
  try {
    const data = await getAllTask();

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get('/:id', isValidID, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getTaskById(id);

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post('/', isValidTaskBody, async (req, res) => {
  try {
    const { task, user_id } = req.body;
    const data = await createTask(task, user_id);

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.delete('/:id', isValidID, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteTask(id);

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.patch('/:id', isValidID, async (req, res) => {
  try {
    const { id } = req.params;
    const clientObj = req.body;

    const data = await patchTask(id, clientObj);

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
