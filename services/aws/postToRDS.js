import mysql from 'mysql';

import { AWS_CREDENTIALS, MESSAGES } from '../../core/constants.js';
import { showContentQuery } from '../../db/migrations.js';
import { insertQuery } from '../../db/populations.js';

const postToRDS = (data) => {
  const params = {
    host: AWS_CREDENTIALS.DB_HOST,
    user: AWS_CREDENTIALS.DB_USER,
    password: AWS_CREDENTIALS.DB_PASSWORD,
    database: AWS_CREDENTIALS.DB_NAME,
  };

  const connection = mysql.createConnection(params);

  connection.connect((err, res) => {
    if (err) {
      console.log(`Connect ${MESSAGES.QUERY_FAIL}, `, err);
    } else {
      console.log(`Connect ${MESSAGES.QUERY_SUCCESS}, `, res);
    }
  });

  // connection.query(createQuery, (err, res, fields) => {
  //   if (err) {
  //     console.log(`Create ${MESSAGES.QUERY_FAIL}, `, err);
  //   } else {
  //     console.log(`Create ${MESSAGES.QUERY_SUCCESS}, `, res);
  //   }
  // });

  connection.query(insertQuery, [[data]], (err, res) => {
    if (err) {
      console.log(`Insert ${MESSAGES.QUERY_FAIL}, `, err);
    } else {
      console.log(`Insert ${MESSAGES.QUERY_SUCCESS}, `, res);
    }
  });

  connection.query(showContentQuery, (err, res) => {
    if (err) {
      console.log(`Content ${MESSAGES.QUERY_FAIL}, `, err);
    } else {
      console.log(`Content ${MESSAGES.QUERY_SUCCESS}, `, res);
    }
  });

  connection.end();
};

export default postToRDS;
