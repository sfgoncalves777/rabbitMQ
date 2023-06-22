const express = require('express');
const router = express.Router();

const createUserUseCase = require('../../usecase/user/create/create.user.usecase');

router.post('/users', async (req, res) => {
  await createUserUseCase.execute(req.body);
  res.sendStatus(200)
});

module.exports = router;