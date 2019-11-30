import { VIEWS, randomObject } from '../../core/constants.js';
import listImages from './listImages.js';
import getSpecificImage from './getSpecificImage.js';

const selectRandom = (files, res) => {
  const file = randomObject(files);
  const templateVariables = getSpecificImage(file);

  res.render(VIEWS.INDEX, templateVariables);
}

const getRandomImage = (res) => {
  listImages((files) => selectRandom(files, res));
};

export default getRandomImage;
