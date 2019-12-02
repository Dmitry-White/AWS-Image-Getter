import { subscribeEmail } from '../services/aws/index.js';
import { MESSAGES, VIEWS } from '../core/constants.js';

const subscribeHandler = (req, res) => {
  const input = req.query.email;

  const templateVariables = {
    subscribeMessage: '',
  };

  if (input === undefined) {
    templateVariables.subscribeMessage = MESSAGES.NO_EMAIL;
    return res.render(VIEWS.SUBSCRIPTION, templateVariables);
  }

  subscribeEmail(input, (err) => {
    if (err) {
      templateVariables.subscribeMessage = MESSAGES.SUBSCRIPTION_FAIL;
    } else {
      templateVariables.subscribeMessage = MESSAGES.SUBSCRIPTION_SUCCESS;
    }

    res.render(VIEWS.SUBSCRIPTION, templateVariables);
  });
};

export default subscribeHandler;
