import { useState, useEffect } from "react";
import { searchMovies } from "../services/api";

export default function Search({ setMovies }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const delay = setTimeout(async () => {
      if (query.trim()) {
        const data = await searchMovies(query);
        setMovies(data.results);
      }
    }, 500);

    return () => clearTimeout(delay);
  }, [query]);

  return (
    <input
      className="search-box"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}