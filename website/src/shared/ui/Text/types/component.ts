import { ComponentPropsWithRef, ElementType } from 'react';

export type TElements = 'span' | 'p' | 'h1' | 'h2' | 'h3';

interface ITextOwnProps<T extends ElementType = ElementType> {
  children: string;
  as?: T;
}

export type TTextProps<T extends ElementType = ElementType> = Omit<
  ComponentPropsWithRef<T>,
  keyof ITextOwnProps<T>
> &
  ITextOwnProps<T>;
