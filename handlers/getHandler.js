import { getSpecificImage } from '../services/local/index.js';
import { getFromS3, getFromRDS } from '../services/aws/index.js';
import { VIEWS } from '../core/constants.js';

const getHandler = (req, res) => {
  const input = req.query.image;

  const templateVariables = getSpecificImage(input);
  getFromS3(input);
  getFromRDS(input);
  res.render(VIEWS.INDEX, templateVariables);
};

export default getHandler;
