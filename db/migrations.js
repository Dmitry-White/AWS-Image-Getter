import { IMAGE_PATH } from '../core/constants.js';

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS ${IMAGE_PATH} (
    id VARCHAR(36) NOT NULL,
    fieldname VARCHAR(36) NOT NULL,
    originalname VARCHAR(255) NOT NULL,
    filename VARCHAR(255) NOT NULL,
    size VARCHAR(36) NOT NULL,
    encoding VARCHAR(36) NOT NULL,
    mimetype VARCHAR(36) NOT NULL,
    Bucket VARCHAR(36) NOT NULL,
    Location VARCHAR(2083) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    PRIMARY KEY (id)
  );
`;

const showContentQuery = `
  SELECT * FROM ${IMAGE_PATH};
`;

const deleteContentQuery = `
  DELETE FROM ${IMAGE_PATH};
`;

export {
  createTableQuery,
  showContentQuery,
  deleteContentQuery,
};
