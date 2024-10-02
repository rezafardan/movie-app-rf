import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null, // State untuk menyimpan data pengguna
  reducers: {
    setUser(state, action) {
      return action.payload; // Set data pengguna
    },
    clearUser(state) {
      return null; // Hapus data pengguna
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
