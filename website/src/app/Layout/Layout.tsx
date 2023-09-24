import { Img } from '@shared/ui';
import { Header } from '@widgets';
import { Outlet } from 'react-router-dom';

import { Wrapper } from './components';
import styles from './styles.module.scss';

export function Layout() {
  return (
    <div className={styles.layout}>
      <div className={styles.layout__bg}>
        <Img
          src="/bg/bg-preview.png"
          placeholder="/bg/bg-preview.png"
          responsive={[
            { url: '/bg/bg-mobile.png', viewSize: 595 },
            { url: '/bg/bg-tablet.png', viewSize: 1024 },
            { url: '/bg/bg-desktop.png', viewSize: 1440 },
          ]}
          className={styles.layout__img}
        />
      </div>

      <div className={styles.layout__wrapper}>
        <Header />
      </div>

      <Wrapper>
        <Outlet />
      </Wrapper>

      <div className={styles['layout__blur-footer']} />
    </div>
  );
}
