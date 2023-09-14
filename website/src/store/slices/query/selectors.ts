import { useSelectorTyped } from '../../types';

export const useGetSearch = () => useSelectorTyped((state) => state.query.search);
export const useGetCategory = () => useSelectorTyped((state) => state.query.category);
export const useGetSorting = () => useSelectorTyped((state) => state.query.sorting);
export const useGetPage = () => useSelectorTyped((state) => state.query.page);
export const useGetToral = () => useSelectorTyped((state) => state.query.total);
