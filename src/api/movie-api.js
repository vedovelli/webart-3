import { API_KEY, http } from "./http";

export const BACKDROP_BASE_URL = "https://image.tmdb.org/t/p/original";

export const fetchMovies = async (term) => {
  return http.get(`movie?api_key=${API_KEY}&query=${term}`);
};
