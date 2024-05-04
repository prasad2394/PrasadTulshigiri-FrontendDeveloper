// store.js

import { configureStore } from '@reduxjs/toolkit';
import foodReducers from '../reducers/foodReducers';

const store = configureStore({
  reducer: {
    food: foodReducers,
  },
});

export default store;
