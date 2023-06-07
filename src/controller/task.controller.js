const router = require('express').Router();
const { getAllTask, createTask, getTaskById } = require('../service/task.service');

router.get('/', async (req, res) => {
  try {
    const data = await getAllTask();

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getTaskById(id);

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const { task, user_id } = req.body;
    const data = await createTask(task, user_id);

    res.status(200).send(data);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
