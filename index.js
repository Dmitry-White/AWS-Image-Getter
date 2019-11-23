import express from 'express';
import morgan from 'morgan';

const PORT = 3000;
const app = express();

app.use(morgan('dev'));

app.get('/:name', (req, res) => res.send(`${req.params.name} Image!`));
app.post('/', (req, res) => res.send('Post Image!'));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
