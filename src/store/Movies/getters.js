export default {
  movies(state) {
    return state.movies.filter(({ backdrop_path }) => !!backdrop_path);
  },
};
