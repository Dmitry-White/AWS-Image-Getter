import mysql from 'mysql';

import { AWS_CREDENTIALS } from '../../core/constants.js';
import { showContentQuery } from '../../db/migrations.js';
import { insertQuery } from '../../db/populations.js';

const postToRDS = (data) => {
  console.log(data);
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

  // connection.query(createQuery, (err, res, fields) => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log('Creation successful: ', res, fields);
  //   }
  // });

  connection.query(insertQuery, [[data]], (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Insertion successful: ', res);
    }
  });

  connection.query(showContentQuery, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log('In images table: ', res);
    }
  });

  connection.end();
};

export default postToRDS;
