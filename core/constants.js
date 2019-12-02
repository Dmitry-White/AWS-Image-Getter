import AWS from 'aws-sdk';
import https from 'https';

const AWS_CREDENTIALS = {
  BUCKET_NAME: process.env.BUCKET_NAME || '',
  IAM_USER_KEY: process.env.IAM_USER_KEY || '',
  IAM_USER_SECRET: process.env.IAM_USER_SECRET || '',
  DB_NAME: process.env.DB_NAME || '',
  DB_HOST: process.env.DB_HOST || '',
  DB_USER: process.env.DB_USER || '',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
  SNS_TOPIC: process.env.SNS_TOPIC || '',
  CREATE_BUCKET_API: process.env.CREATE_BUCKET_API || '',
};

const DB_PARAMS = {
  host: AWS_CREDENTIALS.DB_HOST,
  user: AWS_CREDENTIALS.DB_USER,
  password: AWS_CREDENTIALS.DB_PASSWORD,
  database: AWS_CREDENTIALS.DB_NAME,
};

const S3_PARAMS = {
  accessKeyId: AWS_CREDENTIALS.IAM_USER_KEY,
  secretAccessKey: AWS_CREDENTIALS.IAM_USER_SECRET,
  Bucket: AWS_CREDENTIALS.BUCKET_NAME,
};

const SNS_PARAMS = {
  region: 'eu-central-1',
  accessKeyId: AWS_CREDENTIALS.IAM_USER_KEY,
  secretAccessKey: AWS_CREDENTIALS.IAM_USER_SECRET,
};

const PUBLIC_PATH = 'public';
const IMAGE_PATH = 'images';

const FULL_PATH = `${PUBLIC_PATH}/${IMAGE_PATH}`;

const IMAGE_PREFIX = 'uploadImage';

const MESSAGES = {
  SUCCESS: 'Image Uploaded!',
  FAIL: 'Image was not Uploaded!',
  DOWNLOADED: 'Image Downloaded!',
  CON_SUCCESS: 'Connection success',
  CON_FAIL: 'Connection fail',
  QUERY_SUCCESS: 'Query success',
  QUERY_FAIL: 'Query fail',
  NOT_SELECTED: 'No Image Selected!',
  IMAGE_ONLY: 'Images Only!',
  NO_LIST: 'Unable to list images!',
  SERVER: 'Example app listening on port ',
  DELETE_SUCCESS: 'Delete success',
  DELETE_FAIL: 'Delelte fail',
  SUBSCRIPTION_FAIL: 'Subscription Update fail',
  SUBSCRIPTION_SUCCESS: 'Subscription Update success',
  NO_EMAIL: 'No email entered!',
  BUCKET_CREATED: 'Bucket created, proceeding...',
  BUCKET_EXISTS: 'Bucket exists, proceeding...',
  NO_BUCKET: 'Bucket does not exist, creating...',
};

const VIEWS = {
  INDEX: 'index',
  SUBSCRIPTION: 'subscription',
};

const ROUTES = {
  WEB: {
    HOME: '/',
    IMAGE: '/web',
    SUBSCRIPTION: '/subscription',
    SUBSCRIBE: '/web/subscription',
  },
  API: {
    LIST: '/api/list',
    RANDOM: '/api/random',
    DELETE: '/api/delete',
  },
};

const S3_BUCKET = new AWS.S3(S3_PARAMS);
const SNS = new AWS.SNS(SNS_PARAMS);

const randomObject = (list) => list[Math.floor(Math.random() * list.length)];

S3_BUCKET.headBucket({ Bucket: S3_PARAMS.Bucket }, (err) => {
  const { CREATE_BUCKET_API } = AWS_CREDENTIALS;
  const { Bucket } = S3_PARAMS;
  if (err) {
    console.log('Bucket does not exist, creating...');
    https.get(`${CREATE_BUCKET_API}?bucketName=${Bucket}`, (res) => {
      console.log('Bucket created, proceeding...');
    }).on('error', (e) => {
      console.error(e);
    });
  } else {
    console.log('Bucket exists, proceeding...');
  }
});

export {
  AWS_CREDENTIALS,
  DB_PARAMS,
  S3_BUCKET,
  SNS,
  PUBLIC_PATH,
  IMAGE_PATH,
  FULL_PATH,
  IMAGE_PREFIX,
  MESSAGES,
  VIEWS,
  ROUTES,
  randomObject,
};
