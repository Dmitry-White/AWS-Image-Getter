import { deleteFromS3 } from '../aws/index.js';

const deleteImages = (cb) => {
  // delete function local
  deleteFromS3(cb);
};

export default deleteImages;
