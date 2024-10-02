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

const token = localStorage.getItem("token");

// Thunks ~ ambil data API (async)
export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async ({ title = "", years = "", sortBy = "title", order = "asc" } = {}) => {
    let query = `/movies?`;

    if (title) {
      query += `title=${title}&`;
    }

    if (years) {
      query += `years=${years}&`;
    }

    query += `_sort=${sortBy}&_order=${order}`;

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
        console.log(state);
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
