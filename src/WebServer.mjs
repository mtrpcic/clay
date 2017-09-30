import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './api/account.mjs';

class WebServer {
  constructor(port) {
    this.server = express();
    this.port = port;
    this.server.use(bodyParser.json({ type: 'application/json' }));
    this.server.use(express.static('client'));
  }

  run() {
    this.initializeRoutes();
    this.server.listen(this.port);
  }

  initializeRoutes() {
    this.server.use('/users', authRoutes);
  }
}

export default WebServer;
