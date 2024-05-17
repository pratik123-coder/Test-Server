import express from 'express';
import getRoutes from "./routes/get.routes.js";

const app = express();

app.use(express.json());

app.use('/', getRoutes);

app.get('/', (req, res) => {
    res.send('Hello from backend 2!');
});

app.listen(4000, () => {
    console.log('Server listening on port 4000');
});