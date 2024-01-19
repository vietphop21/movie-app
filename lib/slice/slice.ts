import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '@/constant';

const initialState = {
  listMovie: [],
  loadingListMovie: false,
};

export const getMovieApi = createAsyncThunk('getMovie', async (params: any) => {
  try {
    const response = await fetch(API_URL(params));
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData.message || 'Unknown error'}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching movie:', error);
    throw error;
  }
});

export const getMovie = createSlice({
  name: 'getMovie',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMovieApi.pending, (state) => {
        state.loadingListMovie = true;
      })
      .addCase(getMovieApi.fulfilled, (state, action) => {
        state.loadingListMovie = false;
        state.listMovie = action.payload;
      })
      .addCase(getMovieApi.rejected, (state) => {
        state.loadingListMovie = true;
      });
  },
});

export const { actions } = getMovie;
export const getMovieData = (state:any) => state.getMovie;
export default getMovie.reducer;
