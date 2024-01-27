import express, { Express, Request, Response } from "express";
import env from 'dotenv';

env.config()

const app: Express = express();
const port: string = process.env.PORT || '3000';

app.get('/', (req, res) => {
    res.send("<h1>hello Donald, summary is ready with SimpleMind Pro</h1>")
})

app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
})