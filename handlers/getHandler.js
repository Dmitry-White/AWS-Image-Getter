import { getSpecificImage, getRandomImage } from '../services/index.js';

const getHandler = (req, res) => {
  const param = req.params.name;
  if (param === 'random') {
    const image = getRandomImage();
    res.sendFile(image, { root: './public/images' });
  } else {
    const image = getSpecificImage();
    res.sendFile(image, { root: './public/images' });
  }
};

export default getHandler;
