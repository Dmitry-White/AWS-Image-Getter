import { uploadImage } from '../services/index.js';

const postHandler = (req, res) => {
  uploadImage(req, res, (err) => {
    if (err) {
      const templateVariables = {
        uploadedMessage: err,
      };

      console.log(templateVariables);
      res.render('index', templateVariables);
    } else {
      const dataForRDS = req.file;

      console.log(dataForRDS);
      res.send(`${dataForRDS.originalname} Uploaded`);
    }
  });
};

export default postHandler;
