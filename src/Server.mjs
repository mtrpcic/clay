import WebSocket from 'ws';

class Server {
    constructor(){
        this.wss = null;
    }

    run() {
        this.wss = new WebSocket.Server({port: 8080});
        console.log("Running!");
    }
}

export default Server;
