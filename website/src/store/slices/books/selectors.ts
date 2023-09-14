import { useSelectorTyped } from '../../types';

export const useGetBooks = () => useSelectorTyped((state) => state.books.books);
