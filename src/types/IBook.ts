import { IImageAttributes } from './IImage';

export interface IBookAttributes {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    description: string;
    categories?: string[];
    imageLinks?: IImageAttributes;
  };
}
