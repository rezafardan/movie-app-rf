import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} from "../services/movieService";

const initialState = {
  movies: [],
  currentMovie: null,
  status: "idle",
  error: null,
};

const token = localStorage.getItem("token");

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async ({ title = "", years = "", sortBy = "", order = "" } = {}) => {
    const token = localStorage.getItem("token");
    let query = "/movies";
    const queryParams = [];

    if (title) {
      queryParams.push(`title=${title}`);
    }

    if (years) {
      queryParams.push(`years=${years}`);
    }

    if (sortBy && order) {
      queryParams.push(`_sort=${sortBy}&_order=${order}`);
    }

    if (queryParams.length > 0) {
      query += `?${queryParams.join("&")}`;
    }

    const response = await getMovies(query, token);
    return response;
  }
);

export const fetchMovieById = createAsyncThunk(
  "movie/fetchMovieById",
  async (id) => {
    const response = await getMovieById(id, token);
    return response;
  }
);

export const addMovie = createAsyncThunk(
  "movie/addMovie",
  async (movieData) => {
    const response = await createMovie(movieData, token);
    return response;
  }
);

export const editMovie = createAsyncThunk(
  "movie/editMovie",
  async ({ id, updateData }) => {
    const response = await updateMovie(id, updateData, token);
    return response;
  }
);

export const removeMovie = createAsyncThunk("movie/removeMovie", async (id) => {
  await deleteMovie(id, token);
  return id;
});

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
      })
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.currentMovie = action.payload;
      })
      .addCase(addMovie.fulfilled, (state, action) => {
        state.movies.push(action.payload);
      })
      .addCase(editMovie.fulfilled, (state, action) => {
        const index = state.movies.findIndex(
          (movie) => movie.id === action.payload.id
        );
        if (index !== -1) {
          state.movies[index] = action.payload;
        }
      })
      .addCase(removeMovie.fulfilled, (state, action) => {
        state.movies = state.movies.filter(
          (movie) => movie.id !== action.payload
        );
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(fetchMovieById.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(addMovie.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(editMovie.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(removeMovie.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;
