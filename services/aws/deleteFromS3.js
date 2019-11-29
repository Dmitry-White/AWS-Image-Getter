import deleteFromRDS from './deleteFromRDS.js';

const deleteFromS3 = (localCB) => {
  console.log('Delete from S3');
  deleteFromRDS();
  localCB();
};

export default deleteFromS3;
