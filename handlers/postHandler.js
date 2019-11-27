import { uploadImage, getTemplateVariables } from '../services/index.js';

import { VIEWS } from '../core/constants.js';

const postHandler = (req, res) => {
  uploadImage(req, res, (err) => {
    const templateVariables = getTemplateVariables(err, req.file);

    res.render(VIEWS.INDEX, templateVariables);
  });
};

export default postHandler;
