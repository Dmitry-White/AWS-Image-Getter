import express from 'express';
import morgan from 'morgan';

import { getHandler, postHandler } from './handlers/index.js';
import { PUBLIC_PATH, VIEWS, ROUTES, MESSAGES, IMAGE_PREFIX } from './core/constants.js';

const PORT = 3000;

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static(PUBLIC_PATH));

app.get(ROUTES.HOME, (req, res) => res.render(VIEWS.INDEX, { IMAGE_PREFIX }));
app.post(ROUTES.HOME, postHandler);
app.get(ROUTES.NAMED, getHandler);

app.listen(PORT, () => console.log(MESSAGES.SERVER, PORT));
