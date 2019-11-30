import { getSpecificImage } from '../services/local/index.js';
import { getFromS3 } from '../services/aws/index.js';
import {
  MESSAGES,
  IMAGE_PATH,
  IMAGE_PREFIX,
  VIEWS,
} from '../core/constants.js';

const getHandler = (req, res) => {
  const input = req.query.image;

  getSpecificImage((image, err) => {
    const templateVariables = {
      downloadMessage: '',
      IMAGE_PREFIX,
    };

    if (err) {
      templateVariables.downloadMessage = err;
    } else if (image === undefined) {
      templateVariables.downloadMessage = MESSAGES.NOT_SELECTED;
    } else {
      templateVariables.downloadMessage = MESSAGES.SUCCESS;
      templateVariables.getFile = `../${IMAGE_PATH}/${image}`;
      getFromS3(input);
    }

    res.render(VIEWS.INDEX, templateVariables);
  });
};

export default getHandler;
