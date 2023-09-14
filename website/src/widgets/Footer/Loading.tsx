import classNames from 'classnames';
import Skeleton from 'react-loading-skeleton';

export function FooterLoading() {
  return (
    <footer
      className={classNames(
        //Size
        'w-full h-max',

        //Flex
        'flex items-baseline justify-between gap-1',

        //Border
        'border-t border-solid border-gray-clean',

        //Indent
        'pt-2',
      )}
    >
      <div
        className={classNames(
          //Size
          'max-w-[200px] w-full h-[22px]',
          //Mobile big
          's:h-[18px]',
        )}
      >
        <Skeleton width="100%" height="100%" />
      </div>

      <div
        className={classNames(
          //Size
          'max-w-[150px] w-full h-[40px]',
          //Mobile big
          's:h-[30px]',
        )}
      >
        <Skeleton width="100%" height="100%" />
      </div>
    </footer>
  );
}
