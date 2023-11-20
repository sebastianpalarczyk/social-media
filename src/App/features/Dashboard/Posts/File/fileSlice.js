import { createSlice } from '@reduxjs/toolkit';

const fileSlice = createSlice({
  name: 'file',
  initialState: {
    fileData: null,
    loading: false,
    error: null,
  },
  reducers: {
    fetchFileStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchFileSuccess(state, action) {
      state.loading = false;
      state.fileData = action.payload;
    },
    fetchFileFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const fetchFiles = () => ({
    type: 'files/fetchFiles',
  });

export const { fetchFileStart, fetchFileSuccess, fetchFileFailure } = fileSlice.actions;
export default fileSlice.reducer;