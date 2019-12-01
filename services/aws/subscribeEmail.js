import { AWS_CREDENTIALS, SNS } from '../../core/constants.js';

const subscribeEmail = (input, cb) => {
  console.log('Email: ', input);

  const params = {
    Protocol: 'email',
    TopicArn: AWS_CREDENTIALS.SNS_TOPIC,
    Endpoint: input,
  };

  SNS.subscribe(params, (err, data) => {
    if (err) {
      console.log(err, err.stack);
      cb(err);
    }
    else {
      console.log(data);
      cb();
    }
  });
}

export default subscribeEmail;