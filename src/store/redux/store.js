import { configureStore } from "@reduxjs/toolkit";
// setelah itu daftarkan reducer yang dibuat ke dalam store.js
import movieReducer from "../../services/movieSlice";

const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});

export default store;
