import { listImages } from '../services/index.js';

const getHandler = (req, res) => {
  const templateVariables = {};

  const list = listImages();

  templateVariables.imageList = list;
  res.render('index', templateVariables);
};

export default getHandler;
