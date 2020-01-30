import 'dotenv/config'
import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes';
import { setupWebSocket } from './websocket';

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

export default server;
