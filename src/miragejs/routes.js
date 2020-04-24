import { Response } from 'miragejs';

export function routes() {
  this.urlPrefix = 'https://api.themoviedb.org';
  this.namespace = '/3/search';

  this.get('/movie', () => new Response(500, {}, 'Servidor foi hospitalizado'));

  // this.get("/movie", (schema, { queryParams: { query: title } }) => {
  //   return {
  //     results: schema.movies.where({ title }).models.map(({ attrs }) => attrs),
  //   };
  // });
}
