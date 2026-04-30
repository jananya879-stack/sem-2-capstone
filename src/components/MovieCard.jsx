import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="card">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        />
        <h3>{movie.title}</h3>
      </div>
    </Link>
  );
}