const AWS_CREDENTIALS = {
  BUCKET_NAME: process.env.BUCKET_NAME || '',
  IAM_USER_KEY: process.env.IAM_USER_KEY || '',
  IAM_USER_SECRET: process.env.IAM_USER_SECRET || '',
  DB_NAME: process.env.DB_NAME || '',
  DB_HOST: process.env.DB_HOST || '',
  DB_USER: process.env.DB_USER || '',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
};

const PUBLIC_PATH = 'public';
const IMAGE_PATH = 'images';

const FULL_PATH = `${PUBLIC_PATH}/${IMAGE_PATH}`;

const IMAGE_PREFIX = 'uploadImage';

const MESSAGES = {
  SUCCESS: 'Image Uploaded!',
  FAIL: 'Image was not Uploaded!',
  NOT_SELECTED: 'No Image Selected!',
  IMAGE_ONLY: 'Images Only!',
  NO_LIST: 'Unable to list images!',
  SERVER: 'Example app listening on port ',
};

const VIEWS = {
  INDEX: 'index',
};

const ROUTES = {
  HOME: '/',
  NAMED: '/:name',
  LIST: 'list',
  RANDOM: 'random',
};

export {
  AWS_CREDENTIALS,
  PUBLIC_PATH,
  IMAGE_PATH,
  FULL_PATH,
  IMAGE_PREFIX,
  MESSAGES,
  VIEWS,
  ROUTES,
};
