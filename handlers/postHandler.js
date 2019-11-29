import { uploadImage } from '../services/local/index.js';
import { postToS3 } from '../services/aws/index.js';

import {
  VIEWS, IMAGE_PREFIX, MESSAGES, IMAGE_PATH,
} from '../core/constants.js';

const postHandler = (req, res) => {
  uploadImage(req, res, (err) => {
    const fileData = req.file;
    const templateVariables = {
      uploadedMessage: '',
      IMAGE_PREFIX,
    };

    if (err) {
      templateVariables.uploadedMessage = err;
    } else {
      if (fileData === undefined) {
        templateVariables.uploadedMessage = MESSAGES.NOT_SELECTED;
      } else {
        templateVariables.uploadedMessage = MESSAGES.SUCCESS;
        templateVariables.serverFile = `${IMAGE_PATH}/${fileData.filename}`;
        postToS3(fileData);
      }

      console.log(fileData);
    }
    res.render(VIEWS.INDEX, templateVariables);
  });
};

export default postHandler;
