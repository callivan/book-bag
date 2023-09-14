import { ECategories, ESorting } from '@types';

export interface IInitialState {
  search: string;
  category: ECategories;
  sorting: ESorting;
  page: number;
  total: number;
}
