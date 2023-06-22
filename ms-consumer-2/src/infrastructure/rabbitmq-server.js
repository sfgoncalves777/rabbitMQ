const { connect } = require('amqplib');

class RabbitmqServer {
  constructor() {
    this.connection = null;
    this.channel = null;
  }
  async start(uri) {
    this.connection = await connect(uri);
    this.channel = await this.connection.createChannel();
  };
  async consume(queue, callback) {
    return this.channel.consume(queue, (message) => {
      callback(message);
      this.channel.ack(message);
    })
  }
}

module.exports = new RabbitmqServer();
