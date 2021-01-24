import { createSlice } from '@reduxjs/toolkit';

import data from '../data';

export const slice = createSlice({
  name: 'products',

  initialState: {
    data: data,
    isLoading: false,
  },

  reducers: {
    setItem: (state, action) => {
      state.products = action.payload;
    },

    isSuccess: state => {
      state.isLoading = false;
    },
  },
});

export default slice.reducer;

export const {setItem, isSuccess} = slice.actions;

export const getProducts = (state) => state.products.data;
export const getProductsId = (state, id) => state.products.data.find(item => item.id === id);
