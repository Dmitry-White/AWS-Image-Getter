import mysql from 'mysql';

import { MESSAGES, DB_PARAMS, randomObject } from '../../core/constants.js';
import { showContentQuery } from '../../db/migrations.js';

const getRandomFromRDS = () => {
  const connection = mysql.createConnection(DB_PARAMS);

  connection.connect((err, res) => {
    if (err) {
      console.log(`Connect ${MESSAGES.QUERY_FAIL}, `, err);
    } else {
      console.log(`Connect ${MESSAGES.QUERY_SUCCESS}, `, res);
    }
  });

  connection.query(showContentQuery, (err, res) => {
    if (err) {
      console.log(`Content ${MESSAGES.QUERY_FAIL}, `, err);
    } else {
      console.log(`Content ${MESSAGES.QUERY_SUCCESS}`);

      const object = randomObject(res);

      console.log('Random From RDS: ', object);
    }
  });

  connection.end();
};

export default getRandomFromRDS;
