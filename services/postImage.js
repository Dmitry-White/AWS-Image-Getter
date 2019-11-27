import multer from 'multer';
import path from 'path';

import {
  MESSAGES,
  IMAGE_PATH,
  FULL_PATH,
  IMAGE_PREFIX,
} from '../core/constants.js';

const oneMegabyte = 1000000;

const getFileName = (fileName) => path.extname(fileName);

const generateName = (req, file, cb) => {
  const inputName = getFileName(file.originalname);
  const outputName = `${file.fieldname}-${Date.now()}${inputName}`;

  cb(null, outputName);
};

const checkFileType = (file, cb) => {
  const fileTypes = /jpeg|jpg|png|gif/;
  const inputName = getFileName(file.originalname);
  const mimeType = file.mimetype;

  const isAllowedExt = fileTypes.test(inputName.toLowerCase());
  const isAllowedMimeType = fileTypes.test(mimeType);

  if (isAllowedExt && isAllowedMimeType) {
    return cb(null, true);
  }
  return cb(MESSAGES.IMAGE_ONLY);
};

const getTemplateVariables = (err, data) => {
  const templateVariables = {
    uploadedMessage: '',
    IMAGE_PREFIX,
  };

  if (err) {
    templateVariables.uploadedMessage = err;
  } else {
    if (data === undefined) {
      templateVariables.uploadedMessage = MESSAGES.NOT_SELECTED;
    } else {
      templateVariables.uploadedMessage = MESSAGES.SUCCESS;
      templateVariables.serverFile = `${IMAGE_PATH}/${data.filename}`;
    }

    console.log(data);
  }

  return templateVariables;
};

const storage = multer.diskStorage({
  destination: FULL_PATH,
  filename: generateName,
});

const upload = multer({
  storage,
  limits: {
    fileSize: oneMegabyte,
  },
  fileFilter: (_, file, cb) => checkFileType(file, cb),
});

const uploadImage = upload.single(IMAGE_PREFIX);

export {
  uploadImage,
  getTemplateVariables,
};
