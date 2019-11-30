import {
  AWS_CREDENTIALS,
  S3_BUCKET,
  IMAGE_PATH,
} from '../../core/constants.js';

const getFromS3 = (input) => {
  console.log('Key: ', input);

  const params = {
    Bucket: AWS_CREDENTIALS.BUCKET_NAME,
    Key: `${IMAGE_PATH}/${input}`,
  };

  S3_BUCKET.getObject(params, (err, data) => {
    if (err) return console.log('S3 Get error: ', err);

    const imageData = data.Body;
    console.log(imageData);
    return imageData;
  });
};

export default getFromS3;
