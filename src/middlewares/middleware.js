import { createRouter } from 'next-connect';
import database from './database';
import responseTime from './responseTime';

const middleware = createRouter();

middleware.use(database);
middleware.use(responseTime);

export default middleware;
