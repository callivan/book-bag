import classNames from 'classnames';
import { useRef } from 'react';

import styles from './styles.module.scss';
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

        styles.search,
      )}
    >
      <button className={styles.search__button} type="submit">
        {iconSearch}
      </button>

      <input ref={inputRef} className={styles.search__input} {...props} />

      {cleaner && (
        <button className={styles['search__button-cross']} type="button" onClick={cleaner.onClean}>
          {cleaner.iconCross}
        </button>
      )}
    </form>
  );
}
