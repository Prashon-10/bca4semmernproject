import express from 'express';
import cors from 'cors';
import Connection from './database/Connection.js';
import router from './router/web.js';
const app = express();

new Connection();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(router);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});