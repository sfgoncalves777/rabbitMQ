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

  async publish(exchange, routingKey, message) {
    return this.channel.publish(exchange, routingKey, Buffer.from(message));
  }
}

module.exports = new RabbitmqServer();
