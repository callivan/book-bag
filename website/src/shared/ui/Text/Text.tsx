import classNames from 'classnames';
import { ElementType } from 'react';

import { TElements, TTextProps } from './types/component';

export function Text<T extends ElementType = TElements>({
  children,
  as,
  className,
  ...props
}: TTextProps<T>) {
  const Tag = as || 'span';
  return (
    <Tag
      className={classNames(
        //Custom class name
        className,

        //Font
        'font-sans text-body1 break-words whitespace-pre-wrap',

        //Color
        'text-gray-medium',
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
