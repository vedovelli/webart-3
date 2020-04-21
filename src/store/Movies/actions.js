import { SET_MOVIES, RESET_MOVIES } from "./types";
import { fetchMovies as apiFetchMovies } from "@/api/movie-api";

export const fetchMovies = async ({ commit }, term) => {
  const {
    data: { results: movies },
  } = await apiFetchMovies(term);

  commit(SET_MOVIES, { movies });
};

export const resetMovies = ({ commit }) => {
  commit(RESET_MOVIES);
};

export default { fetchMovies, resetMovies };
