import { ECategories, ESorting, IBookAttributes } from '@types';

export interface IBooksQueryProps {
  search: string;
  category?: ECategories;
  orderBy?: ESorting;
  startIndex?: number;
}

export interface IBooksResponseAttributes {
  items: IBookAttributes[];
  totalItems: number;
}

export interface IInitialState {
  books: IBookAttributes[];
}
