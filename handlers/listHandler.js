import { listImages } from '../services/local/index.js';

const listHandler = (req, res) => {
  listImages((files) => res.send(files));
};

export default listHandler;
