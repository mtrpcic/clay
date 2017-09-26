class SocketWrapper {
    constructor(url){
        this.server_url = url;
        this.ws = null;
        this.connected = false;
    }

    connect(){
        this.ws = new WebSocket(this.server_url);
    }

    disconnect(){
        this.ws.onerror = this.ws.onopen = this.ws.onclose = null;
        this.ws.close();
    }

    onError(){

    }

    onDataReceived(){
        return response.ok
        ? response.json().then((data) => JSON.stringify(data, null, 2))
        : Promise.reject(new Error('Unexpected response'));
    }

    sendData(data){
        console.log(data);
        this.ws.send(data);
    }
}

const showMessage = (message) => {
    output.textContent += `\n${message}`;
    output.scrollTop = output.scrollHeight;
};

(() => {
    const output = document.querySelector('#output');
    const sendData = document.querySelector('#sendData');
    const commandInput = document.querySelector('#command');

    let wrap = new SocketWrapper("ws://localhost:8080");
    wrap.connect();
    commandInput.focus();

    sendData.onclick = () => {
        wrap.sendData(commandInput.value);
        commandInput.value = '';
        commandInput.focus();
    };
})();