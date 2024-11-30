import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;

const app = express();

app.use(express.json());

app.listen(port!, () => {
    console.log("The port is listening at ", port);
});