import { Badge, Img, Scroll, Text } from '@shared/ui';
import classNames from 'classnames';

import styles from './styles.module.scss';
import { TCardProps } from './types/component';

export function Card({ img, title, authors, category, className, ...props }: TCardProps) {
  return (
    <div
      className={classNames(
        //Custom class name
        className,

        styles.card,
      )}
      {...props}
    >
      <Img src={img.basic} placeholder={img.placeholder} alt="Book" className={styles.card__img} />

      <div className={styles.card__wrapper}>
        <Text as="h3" className={styles.card__title}>
          {title}
        </Text>

        <div className={styles.card__info}>
          {authors && (
            <div className={styles.card__written}>
              <Text className={styles['card__written-title']}>Written by:</Text>

              <Scroll className={styles['card__written-authors']}>
                <>
                  {authors.map((author, index) => (
                    <Text className={styles['card__written-text']} key={index}>
                      {author}
                    </Text>
                  ))}
                </>
              </Scroll>
            </div>
          )}

          {category && <Badge size="sm" label={category} className={styles.card__category} />}
        </div>
      </div>
    </div>
  );
}
