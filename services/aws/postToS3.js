import fs from 'fs';
import uuidv4 from 'uuid/v4.js';

import {
  AWS_CREDENTIALS, MESSAGES, S3_BUCKET, IMAGE_PATH,
} from '../../core/constants.js';
import postToRDS from './postToRDS.js';
import publishToSNS from './publishToSNS.js';

const uploadToBucket = (file) => {
  const params = {
    Bucket: AWS_CREDENTIALS.BUCKET_NAME,
    Key: `${IMAGE_PATH}/${file.filename}`,
    Body: fs.createReadStream(file.path),
  };

  S3_BUCKET.upload(params, (err, data) => {
    if (err) {
      console.log(MESSAGES.FAIL, err);
    } else {
      console.log(MESSAGES.SUCCESS);

      const dataForRDS = [
        uuidv4(),
        file.fieldname,
        file.originalname,
        file.filename,
        file.size,
        file.encoding,
        file.mimetype,
        data.Bucket,
        data.Location,
        Date.now(),
        Date.now(),
      ];

      postToRDS(dataForRDS);
      publishToSNS(file.filename);
    }
  });
};

const postToS3 = (file) => {
  S3_BUCKET.createBucket(() => uploadToBucket(file));
};

export default postToS3;
