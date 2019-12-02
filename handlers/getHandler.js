import { getSpecificImage, getRandomImage } from '../services/local/index.js';
import {
  getFromS3,
  getFromRDS,
  getRandomFromS3,
  getRandomFromRDS,
} from '../services/aws/index.js';
import { VIEWS } from '../core/constants.js';

const getHandler = (req, res) => {
  const input = req.query.image;

  if (input === 'random') {
    getRandomImage(res);
    getRandomFromS3();
    getRandomFromRDS();
  } else {
    const templateVariables = getSpecificImage(input);
    getFromS3(input);
    getFromRDS(input);

    res.render(VIEWS.INDEX, templateVariables);
  }
};

export default getHandler;
