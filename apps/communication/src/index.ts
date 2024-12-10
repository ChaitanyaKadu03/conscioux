import { WebSocket, WebSocketServer } from 'ws';
import { redis } from '@repo/redisdb/redis';

const wss = new WebSocketServer({ port: 8080 });

let servers: Array<WebSocket> = [];

wss.on('connection', function connection(ws) {

    ws.on('error', console.error);

    ws.on('message', async function message(data) {

        // @yet-to-implement -> Make sure is string is passed and a argument and not a valid json then the server should not crash
        const message = JSON.parse(data.toString("utf-8"));

        switch (message.type) {
            // @yet-to-implement -> Logic to leave the room and much more
            case "join-room": {
                servers.push(ws);
                break;
            }
            case "chat": {
                // @yet-to-implement -> Logic to filter inappropiate chats =>>> Google Perspective API
                servers.map((server) => {
                    server.send(message.chat);
                })
                break;
            }
            default: {
                ws.send("YET TO IMPLEMENT")
            }
        }
    });

    ws.send('something');
});
