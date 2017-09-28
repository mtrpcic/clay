import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './api/account';

class WebServer {
    constructor(){
        this.server = express();
        this.server.use(bodyParser.json({ type: 'application/json'}));
        this.server.use(express.static('client'));
    }

    run() {
        this.initializeRoutes();
        this.server.listen(3000);
    }

    initializeRoutes() {
        this.server.use('/users', authRoutes);
    }
}

export default WebServer;