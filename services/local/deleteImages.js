import { deleteFromS3 } from '../aws/index.js';

const deleteImages = () => {
  // delete function local
  deleteFromS3();
};

export default deleteImages;
