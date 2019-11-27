const AWS = {
  BUCKET_NAME: '',
  IAM_USER_KEY: '',
  IAM_USER_SECRET: '',
};

const PUBLIC_PATH = 'public';
const IMAGE_PATH = 'images';

const FULL_PATH = `${PUBLIC_PATH}/${IMAGE_PATH}`;

const IMAGE_PREFIX = 'uploadImage';

const MESSAGES = {
  SUCCESS: 'Image Uploaded!',
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
  AWS,
  PUBLIC_PATH,
  IMAGE_PATH,
  FULL_PATH,
  IMAGE_PREFIX,
  MESSAGES,
  VIEWS,
  ROUTES,
};
