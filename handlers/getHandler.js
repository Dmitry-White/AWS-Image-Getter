import { getSpecificImage, getRandomImage } from '../services/index.js';

const getHandler = (req, res) => {
  const param = req.params.name;
  if (param === 'random') {
    const image = getRandomImage();
    res.sendFile(image, { root: './assets' });
  } else {
    const image = getSpecificImage();
    res.sendFile(image, { root: './assets' });
  }
};

export default getHandler;
