import mysql from 'mysql';

import { MESSAGES, DB_PARAMS } from '../../core/constants.js';
import { getQuery } from '../../db/populations.js'

const getFromRDS = (input) => {
  const connection = mysql.createConnection(DB_PARAMS);

  connection.connect((err, res) => {
    if (err) {
      console.log(`Connect ${MESSAGES.QUERY_FAIL}, `, err);
    } else {
      console.log(`Connect ${MESSAGES.QUERY_SUCCESS}, `, res);
    }
  });

  connection.query(getQuery, [[input]], (err, res) => {
    if (err) {
      console.log(`Get ${MESSAGES.QUERY_FAIL}, `, err);
    } else {
      console.log(`Get ${MESSAGES.QUERY_SUCCESS}, `, res);
    }
  });

  connection.end();
};

export default getFromRDS;
