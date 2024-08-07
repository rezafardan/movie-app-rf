import React from "react";
import { Link } from "react-router-dom";
import useMovie from "../../hooks/useMovie";

const MovieList = () => {
  const { movies, loading, error, removeMovie } = useMovie();

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Movie Lists</h1>
      <Link to="/add-movie">Add New Movie</Link>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.title} ({movie.year}) - {movie.href}
            <button onClick={() => removeMovie(movie.id)}>Delete</button>
            <Link to={`/edit-movie/${movie.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
