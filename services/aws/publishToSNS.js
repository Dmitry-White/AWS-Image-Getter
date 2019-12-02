import { AWS_CREDENTIALS, SNS } from '../../core/constants.js';

const publishToSNS = (image) => {
  const params = {
    TopicArn: AWS_CREDENTIALS.SNS_TOPIC,
    Message: `New Image Uploaded: ${image}`,
    Subject: 'Dmitry Images Service',
  };

  SNS.publish(params, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log('SNS publish: ', data);
    }
  });
};

export default publishToSNS;
