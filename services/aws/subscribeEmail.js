import { AWS_CREDENTIALS, SNS } from '../../core/constants.js';

const subscribeNewEmail = (input, cb) => {
  console.log('Subscribing new email: ', input);

  const params = {
    Protocol: 'email',
    TopicArn: AWS_CREDENTIALS.SNS_TOPIC,
    Endpoint: input,
  };

  SNS.subscribe(params, (err, data) => {
    if (err) {
      console.log(err);
      cb(err);
    }
    else {
      console.log('SNS data: ', data);
      cb();
    }
  });
}

const subscribeEmail = (input, cb) => {
  console.log('Email: ', input);

  const params = {
    TopicArn: AWS_CREDENTIALS.SNS_TOPIC,
  }

  SNS.listSubscriptionsByTopic(params, (err, data) => {
    if (err) {
      console.log(err);
      cb(err);
    }
    else {
      const emailList = data.Subscriptions.map(({ Endpoint }) => Endpoint);
      const isSubscribed = emailList.includes(input);

      if (isSubscribed) {
        console.log('Email already subscribed!');
        cb();
      } else {
        subscribeNewEmail(input, cb);
      }
    }
  });
}

export default subscribeEmail;