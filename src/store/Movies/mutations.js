import { SET_MOVIES, RESET_MOVIES, SET_ERROR } from './types';

export default {
  [SET_MOVIES](state, { movies }) {
    state.movies = movies;
    state.wasSearched = true;
  },
  [RESET_MOVIES](state) {
    state.movies = [];
    state.wasSearched = false;
  },
  [SET_ERROR](state) {
    state.movies = [];
    state.wasSearched = false;
    state.error = 'O servidor foi hospitalizado';
  },
};
