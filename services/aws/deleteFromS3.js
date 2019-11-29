import {
  AWS_CREDENTIALS, MESSAGES, S3_BUCKET, IMAGE_PATH,
} from '../../core/constants.js';
import deleteFromRDS from './deleteFromRDS.js';

const deleteImage = (params) => {
  S3_BUCKET.deleteObjects(params, (err, data) => {
    if (err) console.log(MESSAGES.DELETE_FAIL, err);
    else console.log(MESSAGES.DELETE_SUCCESS, data);
  });
};

const deleteFromS3 = (localCB) => {
  const paramsList = {
    Bucket: AWS_CREDENTIALS.BUCKET_NAME,
    Prefix: IMAGE_PATH,
  };

  S3_BUCKET.listObjects(paramsList, (err, data) => {
    if (err) return console.log('S3 List error: ', err);

    const Objects = data.Contents.map(({ Key }) => ({ Key }));

    const paramsObjects = {
      Bucket: AWS_CREDENTIALS.BUCKET_NAME,
      Delete: {
        Objects,
      },
    };
    console.log(paramsObjects);

    deleteImage(paramsObjects);
    return console.log('S3 List success');
  });

  deleteFromRDS();
  localCB();
};

export default deleteFromS3;
