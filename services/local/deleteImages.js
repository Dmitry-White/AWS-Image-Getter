import { deleteFromS3 } from '../aws/index.js';

const deleteImages = () => {
  const deleteLocal = () => {
    console.log('Delete from Local');
  };
  deleteFromS3(deleteLocal);
};

export default deleteImages;
