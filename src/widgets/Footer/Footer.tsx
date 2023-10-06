import { IconArrow } from '@shared/icons';
import { Button, Text } from '@shared/ui';

import styles from './styles.module.scss';
import { IFooterProps } from './types/component';

export default function Footer({ count, isLoad = false, onLoad }: IFooterProps) {
  return (
    <footer className={styles.footer}>
      <Text className={styles.footer__counter}>{`Found ${count} results`}</Text>

      <Button
        data-load={isLoad}
        size="md"
        icon={<IconArrow width="100%" height="100%" className={styles.icon} />}
        onClick={onLoad}
        className={styles['load-more-md']}
      >
        Load more
      </Button>

      <Button
        data-load={isLoad}
        size="sm"
        icon={<IconArrow width="100%" height="100%" className={styles.icon} />}
        onClick={onLoad}
        className={styles['load-more-sm']}
      >
        More
      </Button>
    </footer>
  );
}
