import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import {
  getHandler, postHandler, deleteHandler, listHandler, randomHandler,
} from './handlers/index.js';
import {
  PUBLIC_PATH,
  VIEWS,
  ROUTES,
  MESSAGES,
  IMAGE_PREFIX,
} from './core/constants.js';

const PORT = process.env.PORT || 3000;

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static(PUBLIC_PATH));
app.use(bodyParser.urlencoded({ extended: true }));

app.get(ROUTES.HOME, (req, res) => res.render(VIEWS.INDEX, { IMAGE_PREFIX }));
app.get(ROUTES.NAMED, getHandler);
app.post(ROUTES.NAMED, postHandler);
app.get(ROUTES.LIST, listHandler);
app.get(ROUTES.RANDOM, randomHandler);
app.delete(ROUTES.DELETE, deleteHandler);

app.listen(PORT, () => console.log(MESSAGES.SERVER, PORT));
