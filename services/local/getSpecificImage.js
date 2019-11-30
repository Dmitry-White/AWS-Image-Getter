import {
  MESSAGES,
  IMAGE_PATH,
  IMAGE_PREFIX,
} from '../../core/constants.js';

const getSpecificImage = (input, err) => {
  const templateVariables = {
    downloadedMessage: '',
    IMAGE_PREFIX,
  };

  if (err) {
    templateVariables.downloadedMessage = err;
  } else if (input === undefined) {
    templateVariables.downloadedMessage = MESSAGES.NOT_SELECTED;
  } else {
    templateVariables.downloadedMessage = MESSAGES.DOWNLOADED;
    templateVariables.getFile = `../${IMAGE_PATH}/${input}`;
  }
  return templateVariables;
};

export default getSpecificImage;
