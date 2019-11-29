import AWS from 'aws-sdk';
import fs from 'fs';
import uuidv4 from 'uuid/v4.js';

import { AWS_CREDENTIALS, MESSAGES } from '../../core/constants.js';
import postToRDS from './postToRDS.js';

const s3Bucket = new AWS.S3({
  accessKeyId: AWS_CREDENTIALS.IAM_USER_KEY,
  secretAccessKey: AWS_CREDENTIALS.IAM_USER_SECRET,
  Bucket: AWS_CREDENTIALS.BUCKET_NAME,
});

const uploadToBucket = (file) => {
  console.log(file);
  const params = {
    Bucket: AWS_CREDENTIALS.BUCKET_NAME,
    Key: file.filename,
    Body: fs.createReadStream(file.path),
  };

  s3Bucket.upload(params, (err, data) => {
    if (err) {
      console.log(MESSAGES.FAIL);
      console.log(err);
    }
    console.log(MESSAGES.SUCCESS);
    console.log(data);

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
  });
};

const postToS3 = (file) => {
  s3Bucket.createBucket(() => uploadToBucket(file));
};

export default postToS3;
