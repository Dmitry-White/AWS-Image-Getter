import mysql from 'mysql';

import { MESSAGES, DB_PARAMS } from '../../core/constants.js';
import { showContentQuery, deleteContentQuery } from '../../db/migrations.js';

const deleteFromRDS = () => {
  const connection = mysql.createConnection(DB_PARAMS);

  connection.connect((err, res) => {
    if (err) {
      console.log(`Connect ${MESSAGES.QUERY_FAIL}, `, err);
    } else {
      console.log(`Connect ${MESSAGES.QUERY_SUCCESS}, `, res);
    }
  });

  connection.query(deleteContentQuery, (err, res) => {
    if (err) {
      console.log(`Delete ${MESSAGES.QUERY_FAIL}, `, err);
    } else {
      console.log(`Delete ${MESSAGES.QUERY_SUCCESS}, `, res);
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
  console.log('Delete from RDS');
};

export default deleteFromRDS;
