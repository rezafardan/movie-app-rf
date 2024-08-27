import { useDispatch, useSelector } from "react-redux";
import {
  fetchMovies,
  addMovie,
  editMovie,
  removeMovie,
} from "../services/movieSlice";
import { useEffect } from "react";

// custom Hooks
const useMovie = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const addNewMovie = async (movieData) => {
    try {
      await dispatch(addMovie(movieData)).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  const updateMovie = async (id, updatedData) => {
    try {
      await dispatch(editMovie({ id, updatedData })).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMovie = async (id) => {
    try {
      await dispatch(removeMovie(id)).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  return {
    movies,
    loading,
    error,
    addMovie: addNewMovie,
    editMovie: updateMovie,
    removeMovie: deleteMovie,
  };
};

export default useMovie;
