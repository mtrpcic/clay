import gameloop from 'node-gameloop';
import SocketServer from './SocketServer.mjs';
import WebServer from './WebServer.mjs';
import db from './Database.mjs';

export default class Engine {
  constructor(activeConfig) {
    this.config = activeConfig;
    this.socket_server = new SocketServer(activeConfig.ws_port);
    this.web_server = new WebServer(activeConfig.http_port);
    this.gameloop = gameloop.setGameLoop(this.tick.bind(this), 5000);
  }

  start() {
    db.ensureValidSchema().then(() => {
      console.log('Starting Socket Server...');
      this.socket_server.run();
      console.log('Starting API Server');
      this.web_server.run();
      console.log(`Clay is up and running! Connect at http://${this.config.hostname}:${this.config.http_port}`);
    });
  }

  tick() {
    this.socket_server.broadcast('Tick!');
  }
}
