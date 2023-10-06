import classNames from 'classnames';
import Skeleton from 'react-loading-skeleton';

export function ContentLoading() {
  return (
    <div
      className={classNames(
        //Size
        'w-full min-h-full max-h-max',

        //Grid
        'grid grid-cols-book grid-rows-book gap-4',
        //Mobile tablet small
        'md:gap-2',
      )}
    >
      <div
        className={classNames(
          //Size
          'w-full h-[50px]',
          //Mobile big
          's:h-[28px]',

          //Grid
          'col-span-1',
        )}
      >
        <Skeleton width="100%" height="100%" />
      </div>

      <div
        className={classNames(
          //Size
          'w-full max-w-[1020px]',

          //Indent
          'mx-auto',

          //Grid
          'col-span-1',
        )}
      >
        <Skeleton width="100%" height="100%" />
      </div>

      <div
        className={classNames(
          //Grid
          'col-span-1',

          //Size
          'w-full h-full',

          //Flex
          'flex items-stretch justify-center gap-3',
          //Mobile tablet small
          'md:gap-2',
          //Mobile big
          's:flex-wrap',
        )}
      >
        <div
          className={classNames(
            //Size
            'max-w-[700px] min-w-[300px] w-full h-[500px]',
            //Mobile big
            's:min-w-full',
          )}
        >
          <Skeleton width="100%" height="100%" />
        </div>

        <div
          className={classNames(
            //Size
            'w-full max-w-[800px] h-full',
            //Mobile big
            's:h-max',

            //Flex
            'flex flex-col gap-2 items-center justify-between',

            //Indent
            'pb-3 pr-1',
          )}
        >
          <div
            className={classNames(
              //Size
              'w-full h-full',

              //Indent
              'mb-auto',
            )}
          >
            <Skeleton width="100%" height="100%" />
          </div>

          <div
            className={classNames(
              //Size
              'w-[84px] h-[40px]',
              //Mobile big
              'w-[54px] h-[30px]',

              //Indent
              'ml-auto',
            )}
          >
            <Skeleton width="100%" height="100%" />
          </div>
        </div>
      </div>
    </div>
  );
}
