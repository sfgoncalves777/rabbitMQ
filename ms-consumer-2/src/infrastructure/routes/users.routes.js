const express = require('express');
const router = express.Router();

const listUserUseCase = require('../../usecase/user/list/list.user.usecase');

router.get('/users', async (req, res) => {
  const users = listUserUseCase.execute(req.body);
  res.json(users);
});

module.exports = router;