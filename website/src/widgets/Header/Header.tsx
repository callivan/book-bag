import { IPopuRefProps } from '@entities';
import { Filters } from '@features';
import { Img } from '@shared/ui';
import { useMatchMedia } from '@shared/utils';
import classNames from 'classnames';
import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Popup = lazy(() => import('../../entities/Popup'));

export function Header() {
  const { pathname } = useLocation();

  const { mobileSmall, mobileBig } = useMatchMedia({
    sizeNames: ['mobileSmall', 'mobileBig'],
    queries: ['(max-width: 320px)', '(max-width: 595px)'],
  });

  const [headerHeight, setHeaderHeight] = useState<number>(0);

  const popupRef = useRef<IPopuRefProps | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const { height } = containerRef.current.getBoundingClientRect();

    setHeaderHeight(height + (mobileSmall ? 16 : 32));
  }, [containerRef.current, mobileSmall]);

  return (
    <header
      ref={containerRef}
      className={classNames(
        //Flex
        'flex items-stretch justify-center gap-1',
        //Mobile big
        's:items-center',
      )}
    >
      <Img
        src="/logo/logo.png"
        placeholder="/logo/logo-preview.png"
        alt="Logo"
        responsive={[
          { url: '/logo/logo-sm.png', viewSize: 300 },
          { url: '/logo/logo.png', viewSize: 595 },
        ]}
        className={classNames(
          //Size
          'w-[82px] h-[54px]',
          //Mobile big
          's:w-[62px] s:h-[40px]',

          //Flex
          'flex-shrink-0',
        )}
      />

      {!pathname.replace(/\//gi, '') ? (
        <>
          <Filters className="s:hidden" />

          <Suspense>
            <Popup
              ref={popupRef}
              buttonProps={{
                className: classNames(
                  //Visibility
                  'hidden',
                  //Mobile big
                  's:block',

                  //Indent
                  'ml-auto',
                ),
              }}
              portalProps={{
                id: 'popup-portal',
                styles: `display: ${
                  mobileSmall || mobileBig ? 'block;' : 'none;'
                } padding: ${headerHeight}px ${mobileSmall ? 8 : 16}px ${mobileSmall ? 8 : 16}px ${
                  mobileSmall ? 8 : 16
                }px`,
              }}
            >
              <div
                className={classNames(
                  //Flex
                  'flex flex-col gap-4',

                  //Color
                  'bg-gray-bg',

                  //Size
                  'w-full h-full',

                  //Indent
                  'py-2',
                )}
              >
                <Filters />
              </div>
            </Popup>
          </Suspense>
        </>
      ) : null}
    </header>
  );
}
