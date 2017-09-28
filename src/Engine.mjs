import SocketServer from './SocketServer';
import WebServer from './WebServer';
import db from './Database';
import gameloop from 'node-gameloop';

export default class Engine {
    constructor(){
        this.socket_server = new SocketServer();
        this.web_server = new WebServer();
        this.gameloop = gameloop.setGameLoop(this.tick.bind(this), 5000);
    }

    start() {
        db.ensureValidSchema().then(() => {
            console.log("Starting Socket Server...");
            this.socket_server.run();
            console.log("Starting API Server");
            this.web_server.run();
            console.log("Clay is up and running!");
        });
    }

    tick(){
        this.socket_server.broadcast("Tick!");
    }

    in(time, action) {

    }
}