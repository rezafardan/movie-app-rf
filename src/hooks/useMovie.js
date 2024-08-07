import { useState, useEffect } from "react";
import {
  getMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} from "../services/movieService";

const useMovie = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const data = await getMovies();
        setMovies(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const addMovie = async (movieData) => {
    try {
      const newMovie = await createMovie(movieData);
      setMovies([...movies, newMovie]);
    } catch (err) {
      setError(err);
    }
  };

  const editMovie = async (id, updatedData) => {
    try {
      const updateMovie = await updateMovie(id, updatedData);
      setMovies(movies.map((movie) => (movie.id === id ? updateMovie : movie)));
    } catch (err) {
      setError(err);
    }
  };

  const removeMovie = async (id) => {
    try {
      await deleteMovie(id);
      setMovies(movies.filter((movie) => movie.id !== id));
    } catch (err) {
      setError(err);
    }
  };

  return {
    movies,
    loading,
    error,
    addMovie,
    editMovie,
    removeMovie,
    getMovieById,
  };
};

export default useMovie;
