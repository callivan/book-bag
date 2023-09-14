import { configureStore } from '@reduxjs/toolkit';

import { booksReducer, booksSlice, queryReducer } from './slices';

export const store = configureStore({
  reducer: {
    query: queryReducer,
    books: booksReducer,
    [booksSlice.reducerPath]: booksSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(booksSlice.middleware),
});
