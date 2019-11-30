import {
  AWS_CREDENTIALS,
  S3_BUCKET,
  IMAGE_PATH,
  randomObject,
} from '../../core/constants.js';
import getFromS3 from './getFromS3.js'

const getRandomFromS3 = () => {
  const paramsList = {
    Bucket: AWS_CREDENTIALS.BUCKET_NAME,
    Prefix: IMAGE_PATH,
  };

  S3_BUCKET.listObjects(paramsList, (err, data) => {
    if (err) return console.log('S3 List error: ', err);

    const Objects = data.Contents.map(({ Key }) => ({ Key }));

    const object = randomObject(Objects);
    const input = object.Key.replace(`${IMAGE_PATH}/`, '');

    getFromS3(input);
  });
}

export default getRandomFromS3;
