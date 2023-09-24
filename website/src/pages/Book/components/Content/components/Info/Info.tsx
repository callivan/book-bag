import { Badge, Text } from '@shared/ui';

import styles from './styles.module.scss';
import { IInfoProps } from './types/component';

export function Info({ authors, categories }: IInfoProps) {
  return (
    <div className={styles.info}>
      <div className={styles.written}>
        <Text className={styles.written__title}>Written by:</Text>

        <div className={styles.written__authors}>
          {authors.map((author, index) => (
            <Text key={index} className={styles.written__author}>
              {author}
            </Text>
          ))}
        </div>
      </div>
      <div className={styles.categories}>
        <Text className={styles.categories__title}>Categories:</Text>

        <div className={styles.categories__wrapper}>
          {categories.map((category, index) => (
            <Badge key={index} size="sm" label={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
