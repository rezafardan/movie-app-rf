import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "", title: "", year: "", cast: [], genres: [], href: "", extract: "" },
];

const apiSlice = createSlice({
  name: "tes",
  initialState,
  reducers: {},
});

export default apiSlice.reducer;
