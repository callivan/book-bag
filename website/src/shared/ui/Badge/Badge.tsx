import classNames from 'classnames';

import { INadgeProps } from './types/component';

export function Badge({ label, size = 'md', className, ...props }: INadgeProps) {
  const sizeMd = size === 'md';

  return (
    <div
      className={classNames(
        //Custom class name
        className,

        //Flex
        'flex items-center',

        //Color
        'bg-gray-medium',

        //Border
        'rounded-full',

        //Indent
        sizeMd ? 'px-2 py-1' : 'px-1 py-[4px]',

        //Size
        'max-w-max w-full h-max',
        sizeMd ? 'min-w-[38px] min-h-[38px]' : 'min-w-[24px] min-h-[24px]',
      )}
      {...props}
    >
      <span
        className={classNames(
          //Font
          sizeMd
            ? 'font-regular text-body1 text-center break-words whitespace-pre-wrap'
            : 'font-regular text-caption1 text-center break-words whitespace-pre-wrap',

          //Color
          'text-black-medium',

          //Size
          'w-full',
        )}
      >
        {label}
      </span>
    </div>
  );
}
