import path from 'path';
import fs from 'fs';

const dirPath = path.join(path.resolve(), '/public/images');

const listImages = (cb) => {
  fs.readdir(dirPath, (err, files) => {
    if (err) {
      return console.log(`Unable to scan directory: ${err}`);
    }

    return cb(files);
  });
};

export default listImages;
