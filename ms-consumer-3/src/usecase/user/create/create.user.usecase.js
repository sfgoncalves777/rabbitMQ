const userRepository = require('../../../entity/user/repository');

const execute = async (input) => {
  const user = JSON.parse(input)
  userRepository.push(user);
};

module.exports = { execute };