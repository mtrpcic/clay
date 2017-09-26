import SocketServer from './SocketServer';
import WebServer from './WebServer';
import gameloop from 'node-gameloop';

export default class Engine {
    constructor(){
        this.socket_server = new SocketServer();
        this.web_server = new WebServer();
        this.gameloop = gameloop.setGameLoop(this.tick.bind(this), 1000);
    }

    start() {
        this.socket_server.run();
        this.web_server.run();
    }

    tick(){
        this.socket_server.broadcast("Tick!");
    }

    in(time, action) {

    }
}