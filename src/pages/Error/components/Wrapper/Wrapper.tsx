import { Img } from '@shared/ui';

import styles from './styles.module.scss';

export function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bg}>
        <Img src="/bg/bg-desktop.png" className={styles.bg__img} />
      </div>

      <div className={styles.container}>{children}</div>
    </div>
  );
}
