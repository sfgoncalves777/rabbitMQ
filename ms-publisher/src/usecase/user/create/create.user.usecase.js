const rabbitMQ = require('../../../infrastructure/rabbitmq-server');

const execute = async (input) => {
  const exchange = process.env.RABBITMQ_EXCHANGE;
  await rabbitMQ.publish(exchange, input.priority.toString(), JSON.stringify(input));
};

module.exports = { execute };