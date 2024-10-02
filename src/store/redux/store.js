import { configureStore } from "@reduxjs/toolkit";
// setelah itu daftarkan reducer yang dibuat ke dalam store.js
import movieReducer from "../../services/movieSlice";
import fileUploadReducer from "../../services/fileUploadSlice";
import userReducer from "../../services/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    fileUpload: fileUploadReducer,
  },
});

export default store;
