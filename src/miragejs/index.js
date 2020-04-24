import { Server } from 'miragejs';
import { routes } from './routes';
import { factories } from './factories';
import { database } from './database';

export const makeServer = ({ environment = 'development' } = {}) => {
  const server = new Server({
    environment,
    ...database,
    factories,
    routes,
  });

  return server;
};
