import mysql from 'mysql';

import { MESSAGES, DB_PARAMS } from '../../core/constants.js';
import { showContentQuery } from '../../db/migrations.js';
import { insertQuery } from '../../db/populations.js';

const postToRDS = (data) => {
  const connection = mysql.createConnection(DB_PARAMS);

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
