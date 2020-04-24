import { SET_MOVIES, RESET_MOVIES, SET_ERROR } from './types';
import { fetchMovies as apiFetchMovies } from '@/api/movie-api';

export const fetchMovies = async ({ commit }, term) => {
  try {
    const {
      data: { results: movies },
    } = await apiFetchMovies(term);

    commit(SET_MOVIES, { movies });
  } catch (error) {
    commit(SET_ERROR);
  }
};

export const resetMovies = ({ commit }) => {
  commit(RESET_MOVIES);
};

export default { fetchMovies, resetMovies };
