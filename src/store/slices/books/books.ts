import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBookAttributes } from '@types';

import { IInitialState } from './types';

const initialState: IInitialState = {
  books: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setBooks: (state, action: PayloadAction<IBookAttributes[]>) => {
      state.books = action.payload;
    },
  },
});

export const { setBooks } = booksSlice.actions;

export const booksReducer = booksSlice.reducer;
