import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('products/fetchData', async () => {
  const response = await fetch('http://localhost:3001/products');
  return response.json();
});

export const slice = createSlice({
  name: 'products',

  initialState: {
    data: null,
    isLoading: true,
    vendor: null,
    minPrice: 0,
    maxPrice: null,
  },

  reducers: {
    setVendor: (state, action) => {
      state.vendor = action.payload;
    },

    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },

    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
  },

  extraReducers: {
    [fetchData.pending]: state => {
      state.isLoading = true;
    },
    [fetchData.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
  },
});

export default slice.reducer;

export const { setVendor, setMinPrice, setMaxPrice } = slice.actions;

export const getIsLoading = state => state.products.isLoading;
export const getProducts = state => state.products.data;
export const getVendor = state => state.products.vendor;
export const getMinPrice = state => state.products.minPrice;
export const getMaxPrice = state => state.products.maxPrice;
export const getProductsId = (state, id) => state.products.data.find(item => item.id === id);

export const filterByVendor = createSelector([getProducts, getVendor], (products, vendor) => {
  if (vendor) {
    return products.filter(item => item.vendor.toLowerCase().includes(vendor.toLowerCase()));
  }

  return products;
});

export const filterByMinPrice = createSelector(
  [filterByVendor, getMinPrice],
  (products, minPrice) => {
    const price = parseInt(minPrice, 10);

    if (price) {
      return products.filter(item => item.price >= price);
    }

    return products;
  },
);

export const filteredProducts = createSelector(
  [filterByMinPrice, getMaxPrice],
  (products, maxPrice) => {
    const price = parseInt(maxPrice, 10);

    if (price) {
      return products.filter(item => item.price <= price);
    }

    return products;
  },
);
