import fs from 'fs';
import path from 'path';

import { MESSAGES } from '../../core/constants.js';
import { deleteFromS3 } from '../aws/index.js';
import listImages from './listImages.js';

const deleteAllImages = (files, dirPath) => {
  files.forEach((file) => {
    fs.unlink(path.join(dirPath, file), (err) => {
      if (err) console.log(MESSAGES.DELETE_FAIL, err);
    });
  });
};

const deleteImages = () => {
  const deleteLocal = () => {
    listImages((files, dirPath) => deleteAllImages(files, dirPath));
    console.log('Delete from Local');
  };
  deleteFromS3(deleteLocal);
};

export default deleteImages;
