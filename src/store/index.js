import { createSlice } from '@reduxjs/toolkit';

import data from '../data';

export const slice = createSlice({
  name: 'products',
  initialState: {
    products: data,
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

const initialState = {
  products: data,
  isLoading: false,
};

const ActionType = {
  FETCH_ITEMS: 'FETCH_ITEMS',
  SET_ITEMS: 'SET_ITEMS',
  IS_SUCCESS: 'IS_SUCCESS',
};

const ActionCreator = {
  fetchItem: () => ({
    type: ActionType.FETCH_ITEMS,
  }),

  setItems: data => ({
    type: ActionType.SET_ITEMS,
    payload: data,
  }),

  isSuccess: () => ({
    type: ActionType.IS_SUCCESS,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_ITEMS: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ActionType.SET_ITEMS: {
      return {
        ...state,
        products: action.payload,
      };
    }

    case ActionType.IS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
      };
    }

    default:
      return state;
  }
};

export { reducer, ActionType, ActionCreator };
