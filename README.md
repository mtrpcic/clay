The Server class starts the websocket server loop and handles basic connections. When a client connects, a Client object is created for them and added to the Server to be managed. 

Clients handle the logic for what happens when data comes across the wire and adding that data to the game loop.