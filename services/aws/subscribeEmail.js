import { AWS_CREDENTIALS, SNS } from '../../core/constants.js';

const subscribeNewEmail = (input, cb) => {
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
      console.log('SNS subscribe: ', data);
      cb();
    }
  });
}

const unsubscribeOldEmail = (id, cb) => {
  const params = {
    SubscriptionArn: id
  };

  SNS.unsubscribe(params, (err, data) => {
    if (err) {
      console.log(err);
      cb(err);
    }
    else {
      console.log('SNS unsubscribe: ', data);
      cb();
    }
  });
}

const subscribeEmail = (input, cb) => {
  const params = {
    TopicArn: AWS_CREDENTIALS.SNS_TOPIC,
  }

  SNS.listSubscriptionsByTopic(params, (err, data) => {
    if (err) {
      console.log(err);
      cb(err);
    }
    else {
      const subscription = data.Subscriptions.find(res => res.Endpoint === input);

      if (subscription) {
        console.log('Email already subscribed: ', input);
        unsubscribeOldEmail(subscription.SubscriptionArn, cb);
      } else {
        console.log('Subscribing new email: ', input);
        subscribeNewEmail(input, cb);
      }
    }
  });
}

export default subscribeEmail;