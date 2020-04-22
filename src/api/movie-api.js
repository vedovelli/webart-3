import { API_KEY, http } from "./http";

export const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original";

/**
 * Este método consulta a API de filmes e retorna uma lista
 * @param {string} term Um termo para buscar filmes
 * @returns Promise
 */
export const fetchMovies = async (term) => {
  return http.get(`movie?api_key=${API_KEY}&query=${term}`);
};
