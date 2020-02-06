const expreess = require('express');
const routes = require('./routes');


class App {
  constructor() {
    this.server = expreess();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(expreess.json());
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;