import WebSocket from 'ws';
import Client from './Client.mjs';

class SocketServer {
  constructor(port) {
    this.port = port;
    this.wss = null;
    this.clients = {};
  }

  run() {
    this.wss = new WebSocket.Server({ port: this.port });
    this.wss.on('connection', this.onClientConnect.bind(this));
  }

  onClientConnect(ws) {
    const client = new Client(ws);
    this.clients[client.identifier()] = client;
    client.send('Connected');
  }

  broadcast(data) {
    Object.keys(this.clients).forEach((key) => {
      this.clients[key].send(data);
    });
  }
}

export default SocketServer;
