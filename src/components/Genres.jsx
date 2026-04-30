import { getByGenre } from "../services/api";

const genres = [
  { id: 28, name: "Action" },
  { id: 35, name: "Comedy" },
  { id: 18, name: "Drama" },
  { id: 27, name: "Horror" },
];

export default function Genres({ setMovies }) {
  const handleClick = async (id) => {
    const data = await getByGenre(id);
    setMovies(data.results);
  };

  return (
    <div className="genre-container">
      {genres.map((g) => (
        <button key={g.id} onClick={() => handleClick(g.id)}>
          {g.name}
        </button>
      ))}
    </div>
  );
}