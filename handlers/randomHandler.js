import { getRandomImage } from '../services/local/index.js';
import { FULL_PATH } from '../core/constants.js';

const randomHandler = (req, res) => {
  const config = { root: FULL_PATH };

  getRandomImage((image) => res.sendFile(image, config));
};

export default randomHandler;
