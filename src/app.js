import expreess from 'express';
import path from 'path';
import routes from './routes';

import './database';

class App {
  constructor() {
    this.server = expreess();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(expreess.json());
    this.server.use(
      '/files',
      expreess.static(path.resolve(__dirname, '..', 'tmp', 'uploads')))
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
