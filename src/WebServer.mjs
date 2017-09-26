import express from 'express';
import bodyParser from 'body-parser';
import routes from './api/routes';

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

    authenticateRequest() {

    }

    initializeRoutes() {
        routes.forEach(route => {
            let verb = route.verb;
            let url = route.url;
            let action = route.action;
            this.server[verb](url, action);
        });
    }
}

export default WebServer;