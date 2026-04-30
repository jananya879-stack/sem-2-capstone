import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../services/api";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(id).then(setMovie);
  }, [id]);

  if (!movie) return <h2 className="loading">Loading...</h2>;

  return (
    <div className="details-page">

      <button className="back-btn" onClick={() => navigate(-1)}>
        ⬅ Back
      </button>

      <div className="details-card">

        <img
          className="details-poster"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />

        <div className="details-content">
          <h1>{movie.title}</h1>

          {movie.tagline && (
            <p className="tagline">{movie.tagline}</p>
          )}

          <p className="rating">⭐ {movie.vote_average}</p>

          <p className="overview">{movie.overview}</p>

          <div className="meta">
            <span>📅 {movie.release_date}</span>
            <span>
              🎭 {movie.genres?.map((g) => g.name).join(", ")}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}