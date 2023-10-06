import { Text } from '@shared/ui';

import styles from './styles.module.scss';

export function Empty({ text }: { text: string }) {
  return (
    <div className={styles.empty}>
      <Text className={styles.empty__text}>{text}</Text>
    </div>
  );
}
