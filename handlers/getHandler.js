import { getSpecificImage, getRandomImage, listImages } from '../services/local/index.js';
// import { getFromS3 } from '../services/aws/index.js';
import { FULL_PATH, ROUTES } from '../core/constants.js';

const getHandler = (req, res) => {
  const param = req.params.name;
  const config = { root: FULL_PATH };

  if (param === ROUTES.RANDOM) {
    getRandomImage((image) => res.sendFile(image, config));
  } else if (param === ROUTES.LIST) {
    listImages((files) => res.send(files));
  } else {
    // getFromS3((image) => res.sendFile(image, config));
    getSpecificImage((image) => res.sendFile(image, config));
  }
};

export default getHandler;
