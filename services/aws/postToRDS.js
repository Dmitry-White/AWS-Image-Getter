import mysql from 'mysql';

import { AWS_CREDENTIALS } from '../../core/constants.js';

const postToRDS = (file) => {
  console.log(file);
  const params = {
    host: AWS_CREDENTIALS.DB_HOST,
    user: AWS_CREDENTIALS.DB_USER,
    password: AWS_CREDENTIALS.DB_PASSWORD,
    database: AWS_CREDENTIALS.DB_NAME,
  };

  const connection = mysql.createConnection(params);

  connection.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Connection successful');
    }
  });

  connection.end();
};

export default postToRDS;
