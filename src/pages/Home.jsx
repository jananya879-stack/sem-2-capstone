import { useEffect, useState } from "react";
import { getTrending } from "../services/api";
import Search from "../components/Search";
import Genres from "../components/Genres";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending().then((data) => setMovies(data.results));
  }, []);

  return (
  <div className="app-container">
    <h1 className="app-title">🎬 CineScope</h1>

    <Search setMovies={setMovies} />
    <Genres setMovies={setMovies} />

    <div className="grid">
      {movies.map((m) => (
        <MovieCard key={m.id} movie={m} />
      ))}
    </div>
  </div>
);
}