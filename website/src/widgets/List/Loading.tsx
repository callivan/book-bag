import classNames from 'classnames';
import Skeleton from 'react-loading-skeleton';

export function ListLoading({ length }: { length: number }) {
  const items = Array.from({ length }, (_, i) => <Skeleton key={i} width="100%" height="100%" />);

  return (
    <div
      className={classNames(
        //Grid
        'grid grid-cols-list auto-rows-list place-content-around gap-3',
        //Tablet small
        'md:gap-2',

        //Size
        'w-full min-h-full max-h-max',
      )}
    >
      {items}
    </div>
  );
}
