import { getSpecificImage, getRandomImage, listImages } from '../services/index.js';

const getHandler = async (req, res) => {
  const param = req.params.name;
  if (param === 'random') {
    const image = getRandomImage();
    res.sendFile(image, { root: './public/images' });
  } else if (param === 'list') {
    listImages((files) => res.send(files));
  } else {
    const image = getSpecificImage();
    res.sendFile(image, { root: './public/images' });
  }
};

export default getHandler;
