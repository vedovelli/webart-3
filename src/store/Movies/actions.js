import { SET_MOVIES, RESET_MOVIES } from "./types";
import { fetchMovies as apiFetchMovies } from "@/api/movie-api";

export const fetchMovies = async ({ dispatch }, term) => {
  const {
    data: { movies },
  } = await apiFetchMovies(term);

  dispatch(SET_MOVIES, { movies });
};

export const resetMovies = ({ dispatch }) => {
  dispatch(RESET_MOVIES);
};

export default { fetchMovies, resetMovies };
