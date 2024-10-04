import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { uploadFileService } from "../services/uploadService";

export const uploadFile = createAsyncThunk(
  "fileUpload/uploadFile",
  async (file, thunkAPI) => {
    try {
      const response = await uploadFileService(file);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Kesalahan mengirim file"
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
        state.uploadedFileName = null;
      })
      .addCase(uploadFile.fulfilled, (state, action) => {
        state.uploading = false;
        state.success = true;
        state.error = null;
        state.uploadedFileName = action.payload.filename;
      })
      .addCase(uploadFile.rejected, (state, action) => {
        state.uploading = false;
        state.success = false;
        state.error = action.payload;
      });
  },
});

export default fileUploadSlice.reducer;
