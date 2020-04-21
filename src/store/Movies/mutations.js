import { SET_MOVIES, RESET_MOVIES } from "./types";

export default {
  [SET_MOVIES](state, { movies }) {
    state.movies = movies;
  },
  [RESET_MOVIES](state) {
    state.movies = [];
  },
};
