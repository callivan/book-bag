import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ECategories, ESorting } from '@types';

import { IInitialState } from './types';

const initialState: IInitialState = {
  search: '',
  category: ECategories.ALL,
  sorting: ESorting.RELEVANCE,
  page: 0,
  total: 0,
};

const querySlice = createSlice({
  name: 'query',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setCategory: (state, action: PayloadAction<ECategories>) => {
      state.category = action.payload;
    },
    setSorting: (state, action: PayloadAction<ESorting>) => {
      state.sorting = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
  },
});

export const { setSearch, setCategory, setSorting, setPage, setTotal } = querySlice.actions;

export const queryReducer = querySlice.reducer;
