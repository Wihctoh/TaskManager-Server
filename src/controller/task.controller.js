const router = require('express').Router();
const buildResponse = require('../helper/buildResponse');
const { isValidID, isValidTaskBody } = require('../helper/validation');
const { getAllTask, createTask, getTaskById, deleteTask, patchTask } = require('../service/task.service');

router.get('/', async (req, res) => {
  try {
    const data = await getAllTask();

    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

router.get('/:id', isValidID, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await getTaskById(id);

    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

router.post('/', isValidTaskBody, async (req, res) => {
  try {
    const { task, user_id } = req.body;
    const data = await createTask(task, user_id);

    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

router.delete('/:id', isValidID, async (req, res) => {
  try {
    const { id } = req.params;
    const data = await deleteTask(id);

    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

router.patch('/:id', isValidID, async (req, res) => {
  try {
    const { id } = req.params;
    const clientObj = req.body;

    const data = await patchTask(id, clientObj);

    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

module.exports = router;
