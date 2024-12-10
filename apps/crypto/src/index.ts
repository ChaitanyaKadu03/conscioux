import { schedule } from "node-cron";
import { WebSocketServer } from 'ws';
import { marketAll } from "./tasks/sendAll";

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {

    ws.on('error', console.error);

    ws.on('message', async function message(data) {

        // @yet-to-implement -> Make sure is string is passed and a argument and not a valid json then the server should not crash
        const message = JSON.parse(data.toString("utf-8"));

        switch (message.type) {

            case "getAllmarket": {
                const value = await marketAll();
                ws.send(value);
            }
            default: {
                ws.send("LOL!!");
            }
        }
    });

    ws.send('something');
});