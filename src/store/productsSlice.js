import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('products/fetchData', async () => {
  const response = await fetch('http://localhost:3001/products');
  return response.json();
});

export const slice = createSlice({
  name: 'products',

  initialState: {
    data: null,
    isLoading: true,
  },

  extraReducers: {
    [fetchData.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    }
  }
});

export default slice.reducer;

export const getIsLoading = (state) => state.products.isLoading;
export const getProducts = (state) => state.products.data;
export const getProductsId = (state, id) => state.products.data.find(item => item.id === id);
