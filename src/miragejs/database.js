import { Model } from "miragejs";

export const database = {
  models: {
    movie: Model,
  },
  seeds(server) {
    server.createList("movie", 100);
  },
};
