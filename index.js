import express from 'express';
import morgan from 'morgan';
import multer from 'multer';

import { getHandler, postHandler } from './handlers/index.js';

const PORT = 3000;

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static('public'));

const upload = multer({ dest: 'public/images/' });

app.get('/', (req, res) => res.render('index'));
app.get('/:name', getHandler);
app.post('/', upload.any(), postHandler);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
