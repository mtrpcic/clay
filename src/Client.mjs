import uuid from 'uuid';

export default class Client {
  constructor(ws) {
    this.id = uuid.v4();
    this.ws = ws;
    this.ws.on('message', this.onDataReceived.bind(this));
  }

  identifier() {
    return this.id;
  }

  send(data) {
    console.log(`[CID: ${this.identifier()} ->] ${data}`);
    this.ws.send(data);
  }

  onDataReceived(data) {
    console.log(`[CID: ${this.identifier()} <-] ${data}`);
  }

  disconnect() {
    console.log(`[CID: ${this.identifier()} <-] Disconnect`);
  }
}
