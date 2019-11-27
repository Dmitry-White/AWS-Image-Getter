import { getSpecificImage, getRandomImage, listImages } from '../services/index.js';
import { FULL_PATH } from '../core/constants.js';

const getHandler = async (req, res) => {
  const param = req.params.name;
  const config = { root: FULL_PATH };

  if (param === 'random') {
    getRandomImage((image) => res.sendFile(image, config));
  } else if (param === 'list') {
    listImages((files) => res.send(files));
  } else {
    getSpecificImage((image) => res.sendFile(image, config));
  }
};

export default getHandler;
