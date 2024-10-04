import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../../slices/movieSlice";
import fileUploadReducer from "../../slices/fileUploadSlice";
import userReducer from "../../slices/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    fileUpload: fileUploadReducer,
  },
});

export default store;
