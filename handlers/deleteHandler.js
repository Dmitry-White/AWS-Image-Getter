import { deleteImages } from '../services/local/index.js';
import { MESSAGES } from '../core/constants.js';

const deleteHandler = (_, res) => {
  deleteImages(() => res.send(MESSAGES.DELETE_SUCCESS));
};

export default deleteHandler;
