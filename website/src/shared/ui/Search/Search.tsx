import classNames from 'classnames';
import { useRef } from 'react';

import { TSearchProps } from './types/component';

export function Search({ iconSearch, className, onSubmit, cleaner, ...props }: TSearchProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputRef.current) return;

    const value = inputRef.current.value;

    if (!value) return;

    onSubmit && onSubmit(value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={classNames(
        //Custom class name
        className,

        //Flex
        'flex items-center gap-1',

        //Size
        'h-max',

        //Color
        'bg-gray-medium',
        //Transition
        'transition-colors duration-200',
        //Hover
        'hover:bg-gray-light',
        //Focus
        'focus-within:bg-gray-light',

        //Border
        'rounded-full',

        //Indent
        'px-2 py-1',
      )}
    >
      <button
        className={classNames(
          //Color
          'stroke-black-medium',
          //Transition
          'transition-colors duration-200',
          //Hover
          'hover:stroke-black-dark',
        )}
        type="submit"
      >
        {iconSearch}
      </button>

      <input
        ref={inputRef}
        className={classNames(
          //Font
          'font-regular text-body2',

          //Color
          'text-black-medium',
          'placeholder:text-black-medium',
          //Transition
          'transition-colors duration-200',
          //Hover
          'hover:text-black-dark',
          'hover:placeholder:text-black-dark',
          //Focus
          'focus:text-black-dark',
          'focus:placeholder:text-black-dark',

          //Size
          'w-full h-max',

          //Transition cross button
          'peer',
        )}
        {...props}
      />

      {cleaner && (
        <button
          className={classNames(
            //Color
            'stroke-black-medium',
            //Transition
            'transition-colors duration-200',
            //Hover
            'hover:stroke-black-dark',

            //Effect
            'peer-placeholder-shown:opacity-0',
            //Transition
            'transition-opacity duration-200',

            //Visibility
            'peer-placeholder-shown:pointer-events-none',
          )}
          type="button"
          onClick={cleaner.onClean}
        >
          {cleaner.iconCross}
        </button>
      )}
    </form>
  );
}
