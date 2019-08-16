import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import http from 'http';

import api from './src/api';
import site from './src/site';
// import { error, request } from './src/middlewares';
// import crons from './src/crons';

dotenv.config();
const { PORT = 3000 } = process.env;

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());
// -- Statics
app.use('/assets', express.static('assets'));
app.use(express.static('dist'));
// -- Middlewares
// app.use(request);
// -- Services
app.use(api);
app.use(site);
// -- Error handler
// app.use(error);

const listener = server.listen(PORT, () => {
  console.log(`aprenderblockchain.soyjavi.com is ready on port ${listener.address().port}`);
  // crons.start();
});

['exit', 'SIGINT', 'SIGUSR1', 'SIGUSR2', 'uncaughtException', 'SIGTERM'].forEach((eventType) => {
  process.on(eventType, () => {
    // crons.stop();
    server.close();
    process.exit();
  });
});
