
const createQuery = `
CREATE TABLE IF NOT EXISTS images (
  id VARCHAR(36) NOT NULL,
  description TEXT,
  duration VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  thumbnail_url VARCHAR(2083),
  video_url VARCHAR(2083),
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL,
  PRIMARY KEY (id)
);
`;

const imageData = {
  fieldname: 'uploadImage',
  originalname: 'uploadImage-1576171530494.jpg',
  filename: 'uploadImage-1576232621979.jpg',
  size: 66125,
  encoding: '7bit',
  mimetype: 'image/jpeg',
  Bucket: 'dima.static.website',
  Location: 'https://s3.eu-central-1.amazonaws.com/dima.static.website/uploadImage-1576232621979.jpg',
};
