import Skeleton from 'react-loading-skeleton';

import styles from './loading.module.scss';

export function ListLoading({ length }: { length: number }) {
  const items = Array.from({ length }, (_, i) => <Skeleton key={i} width="100%" height="100%" />);

  return <div className={styles.loading}>{items}</div>;
}
