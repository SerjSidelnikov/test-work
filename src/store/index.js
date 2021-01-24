import {configureStore} from '@reduxjs/toolkit';

import reducer from './productsSlice';

export default configureStore({
  reducer: {
    products: reducer,
  },
});
