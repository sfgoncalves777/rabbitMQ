require('dotenv');
const server = require('./app');
const rabbitMQ = require('./rabbitmq-server');

(async () => {
  const uri = process.env.RABBITMQ_URI;
  const port = process.env.PORT;
  await rabbitMQ.start(uri);

  server.listen(port, () => console.log('Subiu'))  
})()