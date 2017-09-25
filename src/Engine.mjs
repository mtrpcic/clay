import Server from './Server';
import gameloop from 'node-gameloop';

export default class Engine {
    constructor(){
        this.server = new Server();
        this.gameloop = gameloop.setGameLoop(this.tick.bind(this), 1000);
    }

    start() {
        this.server.run();
    }

    tick(){
        this.server.broadcast("Tick!");
    }

    in() {

    }
}