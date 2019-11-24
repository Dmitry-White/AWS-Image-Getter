import { getSpecificImage, getRandomImage } from '../services/index.js';

const getHandler = (req, res) => {
  const param = req.params.name;
  if (param === 'random') {
    const image = getRandomImage();
    res.send(`${image} Image!`);
  } else {
    const image = getSpecificImage();
    res.send(`${image} Image!`);
  }
};

export default getHandler;
