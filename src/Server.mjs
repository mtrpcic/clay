import WebSocket from 'ws';
import Client from './Client';

class Server {
    constructor(){
        this.wss = null;
        this.clients = {};
    }

    run() {
        this.wss = new WebSocket.Server({port: 8080});
        this.wss.on('connection', this.onClientConnect.bind(this));
    }

    onClientConnect(ws) {
        let client = new Client(ws);
        this.clients[client.identifier()] = client;
        client.send("Connected");
    }

    onClientDisconnect() {
    
    }

    broadcast(data) {
        Object.keys(this.clients).forEach(key => {
            this.clients[key].send(data);
        });
    }
}

export default Server;
