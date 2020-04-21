import { SET_MOVIES, RESET_MOVIES } from "./types";

export default {
  [SET_MOVIES](state, { movies }) {
    state.movies = movies;
    state.wasSearched = true;
  },
  [RESET_MOVIES](state) {
    state.movies = [];
    state.wasSearched = false;
  },
};
