import { Img } from '@shared/ui';
import { Header } from '@widgets';
import classNames from 'classnames';
import { Outlet } from 'react-router-dom';

import { Wrapper } from './components';

export function Layout() {
  return (
    <div
      className={classNames(
        //Position
        'relative',

        //Flex
        'flex flex-col',

        //Size
        'w-screen h-screen',
      )}
    >
      <div
        className={classNames(
          //Position
          'absolute top-[0px] left-[0px]',

          //Size
          'w-full h-full',
        )}
      >
        <Img
          src="/bg/bg-preview.png"
          placeholder="/bg/bg-preview.png"
          responsive={[
            { url: '/bg/bg-mobile.png', viewSize: 595 },
            { url: '/bg/bg-tablet.png', viewSize: 1024 },
            { url: '/bg/bg-desktop.png', viewSize: 1440 },
          ]}
          className={classNames(
            //Size
            'w-full h-full',
          )}
        />
      </div>

      <div
        className={classNames(
          //Flex
          'flex-shrink-0',

          //Size
          'w-full h-max',

          //Effect
          'backdrop-blur-custom',

          //Color
          'bg-gray-bg',

          //Indent
          'px-3 py-2',
          //Mobile big
          's:px-2',
          //Mobile small
          'xs:px-1 xs:py-1',
        )}
      >
        <Header />
      </div>

      <Wrapper>
        <Outlet />
      </Wrapper>

      <div
        className={classNames(
          //Size
          `w-full h-3`,
          //Mobile big
          's:h-2',
          //Mobile small
          'xs:h-1',

          //Flex
          'flex-shrink-0',

          //Effect
          'backdrop-blur-custom',

          //Color
          'bg-gray-bg',
        )}
      />
    </div>
  );
}
