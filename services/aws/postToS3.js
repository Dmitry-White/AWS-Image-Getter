import AWS from 'aws-sdk';
import fs from 'fs';

import { AWS_CREDENTIALS, MESSAGES } from '../../core/constants.js';

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
  });
};

const postToS3 = (file) => {
  s3Bucket.createBucket(() => uploadToBucket(file));
};

export default postToS3;
