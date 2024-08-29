import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} from "./movieService";

// initial state : state awal yang berupa array kosong yang nantinya akan diisi dengan data API
const initialState = {
  movies: [],
  currentMovie: null,
  status: "idle",
  error: null,
};

// Thunks ~ ambil data API (async)
export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await getMovies();
  return response;
});

export const fetchMovieById = createAsyncThunk(
  "movies/fetchMovieById",
  async (id) => {
    const response = await getMovieById(id);
    return response;
  }
);

export const addMovie = createAsyncThunk(
  "movies/addMovie",
  async (movieData) => {
    const response = await createMovie(movieData);
    return response;
  }
);

export const editMovie = createAsyncThunk(
  "movies/editMovie",
  async ({ id, updateData }) => {
    const response = await updateMovie(id, updateData);
    return response;
  }
);

export const removeMovie = createAsyncThunk("movie/removeMovie", async (id) => {
  await deleteMovie(id);
  return id;
});

// Slice ~ menangani pengelolaan state
const movieSlice = createSlice({
  name: "movies",
  initialState,
  // reducer untuk data API : reducer untuk menangani data hasil dari API dan menyimpannya ke dalam state global
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload; // payload isi array data API
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
