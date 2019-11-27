import path from 'path';
import fs from 'fs';

import { MESSAGES, FULL_PATH } from '../../core/constants.js';

const dirPath = path.join(path.resolve(), FULL_PATH);

const listImages = (cb) => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return cb(MESSAGES.NO_LIST);
    }

    return cb(files);
  });
};

export default listImages;
