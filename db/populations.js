import { IMAGE_PATH } from '../core/constants.js';

const insertDummyQuery = `
INSERT INTO
  ${IMAGE_PATH} (
    id,
    fieldname,
    originalname,
    filename,
    size,
    encoding,
    mimetype,
    Bucket,
    Location,
    created_at,
    updated_at
  )
VALUES
  (
    UUID(),
    'uploadImage',
    '1-10.jpg',
    'uploadImage-1576239373251.jpg',
    66125,
    '7bit',
    'image/jpeg',
    'dima.static.website',
    'https://s3.eu-central-1.amazonaws.com/dima.static.website/uploadImage-1576239373251.jpg',
    NOW(),
    NOW()
  );
`;

const insertQuery = `
INSERT INTO
  ${IMAGE_PATH} (
    id,
    fieldname,
    originalname,
    filename,
    size,
    encoding,
    mimetype,
    Bucket,
    Location,
    created_at,
    updated_at
  )
VALUES ?`;

const getQuery = `
    SELECT * FROM ${IMAGE_PATH}
    WHERE filename = ?
`;

export {
  insertDummyQuery,
  insertQuery,
  getQuery,
};
