import { uploadImage } from '../services/index.js'

const postHandler = (req, res) => {
  uploadImage(req, res);
  
  res.send('Image Uploaded');
};

export default postHandler;
