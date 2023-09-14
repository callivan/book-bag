import { IBookAttributes } from '@types';

export interface IContentProps {
  book: IBookAttributes;
  onBack: () => void;
}
