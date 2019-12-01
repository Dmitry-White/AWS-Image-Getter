import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import {
  homePageHandler,
  subscriptionPageHandler,
  getHandler,
  postHandler,
  deleteHandler,
  listHandler,
  randomHandler,
  subscribeHandler,
} from './handlers/index.js';
import {
  PUBLIC_PATH,
  ROUTES,
  MESSAGES,
} from './core/constants.js';

const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static(PUBLIC_PATH));
app.use(bodyParser.urlencoded({ extended: true }));

// Web Routes
app.get(ROUTES.WEB.HOME, homePageHandler);
app.get(ROUTES.WEB.IMAGE, getHandler);
app.post(ROUTES.WEB.IMAGE, postHandler);
app.get(ROUTES.WEB.SUBSCRIPTION, subscriptionPageHandler);
app.get(ROUTES.WEB.SUBSCRIBE, subscribeHandler);

// API Routes
app.get(ROUTES.API.LIST, listHandler);
app.get(ROUTES.API.RANDOM, randomHandler);
app.delete(ROUTES.API.DELETE, deleteHandler);

app.listen(PORT, () => console.log(MESSAGES.SERVER, PORT));
