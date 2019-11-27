import { uploadImage } from '../services/index.js';

const postHandler = (req, res) => {
  const templateVariables = {
    uploadedMessage: '',
  };

  uploadImage(req, res, (err) => {
    if (err) {
      templateVariables.uploadedMessage = err;

      console.log(templateVariables);
      res.render('index', templateVariables);
    } else {
      const dataForRDS = req.file;

      if (dataForRDS === undefined) {
        templateVariables.uploadedMessage = 'Error: No Image Selected!';
      } else {
        templateVariables.uploadedMessage = `${dataForRDS.originalname} Uploaded`;
      }

      console.log(dataForRDS);
      res.render('index', templateVariables);
    }
  });
};

export default postHandler;
