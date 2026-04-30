const API_KEY = "1bfa913a5db7cb52bb250c02e405b026";
const BASE = "https://api.themoviedb.org/3";

export const getTrending = async () => {
  const res = await fetch(`${BASE}/trending/movie/day?api_key=${API_KEY}`);
  return res.json();
};

export const searchMovies = async (query) => {
  const res = await fetch(
    `${BASE}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return res.json();
};

export const getByGenre = async (genreId) => {
  const res = await fetch(
    `${BASE}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`
  );
  return res.json();
};

export const getMovieDetails = async (id) => {
  const res = await fetch(`${BASE}/movie/${id}?api_key=${API_KEY}`);
  return res.json();
};