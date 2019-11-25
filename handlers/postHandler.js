import { uploadImage } from '../services/index.js'

const postHandler = (req, res) => {
  uploadImage(req, res, (err) => {
    if(err) {
      res.render('index', {
        uploadedMessage: err
      });
    } else {
      console.log(req.file);
      res.send('Image Uploaded');
    }
  });
};

export default postHandler;
