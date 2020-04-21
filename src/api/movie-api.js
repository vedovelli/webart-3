import { API_KEY, http } from "./http";

export const fetchMovies = async (term) => {
  return http.get(`movie?api_key=${API_KEY}&query=${term}`);
};
