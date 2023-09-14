import classNames from 'classnames';
import Skeleton from 'react-loading-skeleton';

import { Wrapper } from './components';

export function ErrorLoading() {
  return (
    <Wrapper>
      <div
        className={classNames(
          //Size
          'w-full h-full',

          //Flex
          'flex flex-col gap-2 items-center justify-center',

          //Indent
          'p-2',

          //Visibility
          'overflow-hidden',
        )}
      >
        <div
          className={classNames(
            //Size
            'w-[82px] h-[54px]',
            //Mobile big
            's:w-[62px] s:h-[40px]',

            //Indent
            'mb-auto',
          )}
        >
          <Skeleton width="100%" height="100%" />
        </div>

        <Skeleton width={130} height={28} />
        <Skeleton width={150} height={28} />

        <div
          className={classNames(
            //Indent
            'mt-auto',
          )}
        >
          <div
            className={classNames(
              //Visibility
              //Mobile big
              's:hidden',
            )}
          >
            <Skeleton width={150} height={40} />
          </div>

          <div
            className={classNames(
              //Visibility
              'hidden',
              //Mobile big
              's:block',
            )}
          >
            <Skeleton width={80} height={30} />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
