const router = require('express').Router();
const buildResponse = require('../helper/buildResponse');
const { createUser, authorizationUser } = require('../service/api.service');

router.post('/reg', async (req, res) => {
  try {
    const { name, surname, email, pwd } = req.body;
    const data = await createUser(name, surname, email, pwd);

    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

router.post('/auth', async (req, res) => {
  try {
    const { email, pwd } = req.body;
    const data = await authorizationUser(email, pwd);

    buildResponse(res, 200, data);
  } catch (error) {
    buildResponse(res, 404, error.message);
  }
});

module.exports = router;
