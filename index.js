import express from 'express';
import morgan from 'morgan';

import { getHandler, postHandler } from './handlers/index.js';

const PORT = 3000;
const app = express();

app.use(morgan('dev'));

app.get('/:name', getHandler);
app.post('/', postHandler);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
