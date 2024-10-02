import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosIstance from "../axiosConfig";

export const uploadFile = createAsyncThunk(
  "fileUpload/uploadFile",
  async (file, thunkAPI) => {
    try {
      const formData = new FormData();
      const token = localStorage.getItem("token");
      formData.append("file", file);

      const response = await axiosIstance.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Response from server:", response);
      return response.data;
    } catch (error) {
      console.error("Error from server:", error.response); // Tambahkan log ini
      return thunkAPI.rejectWithValue(
        error.response?.data || "Error uploading file"
      );
    }
  }
);

const fileUploadSlice = createSlice({
  name: "fileUpload",
  initialState: {
    uploading: false,
    success: false,
    error: null,
    uploadedFileName: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadFile.pending, (state) => {
        state.uploading = true;
        state.success = false;
        state.error = null;
        state.uploadedFileName = null; // Reset nama file saat upload dimulai
      })
      .addCase(uploadFile.fulfilled, (state, action) => {
        console.log("Payload received:", action.payload);
        state.uploading = false;
        state.success = true;
        state.error = null;
        state.uploadedFileName = action.payload.filename; // Sesuaikan jika server mengirim nama file langsung
      })
      .addCase(uploadFile.rejected, (state, action) => {
        state.uploading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export default fileUploadSlice.reducer;
