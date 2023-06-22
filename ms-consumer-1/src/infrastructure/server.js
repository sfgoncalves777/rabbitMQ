require('dotenv');
const server = require('./app');
const rabbitMQ = require('./rabbitmq-server');
const createUserUseCase = require('../usecase/user/create/create.user.usecase');

(async () => {
  const uri = process.env.RABBITMQ_URI;
  const queue = process.env.RABBITMQ_QUEUE;
  const port = process.env.PORT;
  await rabbitMQ.start(uri);
  await rabbitMQ.consume(queue, (message) => createUserUseCase
    .execute(message.content.toString()));

  server.listen(port, () => console.log('Subiu'))  
})()