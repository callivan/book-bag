import Skeleton from 'react-loading-skeleton';

import styles from './loading.module.scss';

export function FooterLoading() {
  return (
    <footer className={styles.loading}>
      <div className={styles.loading__counter}>
        <Skeleton width="100%" height="100%" />
      </div>

      <div className={styles['loading__load-more']}>
        <Skeleton width="100%" height="100%" />
      </div>
    </footer>
  );
}
