import classNames from 'classnames';

import { TButtonProps } from './types/component';

export function Button({
  icon,
  className,
  textSide = 'left',
  size = 'md',
  children,
  ...props
}: TButtonProps) {
  const sizeMd = size === 'md';
  const isTextRight = textSide === 'right';

  return (
    <button
      className={classNames(
        //Custom class name
        className,

        //Position
        'relative isolate',

        //Flex
        'flex items-center gap-1',
        isTextRight && 'flex-row-reverse',

        //Font
        'font-regular tracking-[5%]',
        sizeMd ? 'text-body1' : 'text-body3',

        //Color
        'text-gray-medium stroke-black-medium',
        //Transition
        'transition-colors duration-200',
        'group',
        //Hover
        'hover:text-gray-light hover:stroke-black-dark',

        //Size
        'max-w-max w-full h-max',
      )}
      {...props}
    >
      {children && (
        <span
          className={classNames(
            //Font
            'break-words whitespace-pre-wrap',
          )}
        >
          {children}
        </span>
      )}

      <div
        className={classNames(
          //Position
          'relative',

          //Flex
          'shrink-0 flex items-center justify-center',

          //Color
          'bg-gray-medium',
          //Transition
          'transition-colors duration-200',
          //Hover
          'group-hover:bg-gray-light',

          //Border
          'rounded-full',

          //Size
          sizeMd ? 'w-[40px] h-[40px]' : 'w-[30px] h-[30px]',

          //Indent
          sizeMd ? 'p-1' : 'p-[6px]',
        )}
      >
        <div
          className={classNames(
            //Position
            'absolute top-[0px] left-[0px]',

            //Size
            'w-full h-full',

            //Color
            'bg-gray-medium',

            //Border
            'rounded-full',

            //Animation
            'group-hover:animate-[ping_1s_ease-in-out_infinite]',

            //Layers
            'z-[-1]',
          )}
        />
        {icon}
      </div>
    </button>
  );
}
