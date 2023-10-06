import { IPopuRefProps } from '@entities';
import { Filters } from '@features';
import { Img } from '@shared/ui';
import { useMatchMedia } from '@shared/utils';
import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import styles from './styles.module.scss';

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
    <header ref={containerRef} className={styles.header}>
      <Img
        src="/logo/logo.png"
        placeholder="/logo/logo-preview.png"
        alt="Logo"
        responsive={[
          { url: '/logo/logo-sm.png', viewSize: 300 },
          { url: '/logo/logo.png', viewSize: 595 },
        ]}
        className={styles.header__logo}
      />

      {!pathname.replace(/\//gi, '') ? (
        <>
          <Filters className={styles.header__filter} />

          <Suspense>
            <Popup
              ref={popupRef}
              buttonProps={{
                className: styles.header__popup,
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
              <div className={styles['header__popu-content']}>
                <Filters />
              </div>
            </Popup>
          </Suspense>
        </>
      ) : null}
    </header>
  );
}
