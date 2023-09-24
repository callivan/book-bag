import { IconArrow } from '@shared/icons';
import { Button, Img, Text } from '@shared/ui';

import { Info } from './components';
import styles from './styles.module.scss';
import { IContentProps } from './types/component';

export default function Content({ book: { volumeInfo }, onBack }: IContentProps) {
  return (
    <div className={styles.content}>
      <Text as="h1" className={styles.content__title}>
        {volumeInfo.title}
      </Text>

      <Text as="p" className={styles.content__description}>
        {volumeInfo.description}
      </Text>

      <div className={styles.content__wrapper}>
        <Img
          src={volumeInfo.imageLinks?.thumbnail ?? '/book/default-desktop.png'}
          placeholder={volumeInfo.imageLinks?.smallThumbnail ?? '/book/default-preview.png'}
          responsive={[
            {
              url: volumeInfo.imageLinks?.thumbnail ?? '/book/default-thumbnail.png',
              viewSize: 128,
            },
            {
              url: volumeInfo.imageLinks?.thumbnail ?? '/book/default-mobile.png',
              viewSize: 395,
            },
            {
              url: volumeInfo.imageLinks?.thumbnail ?? '/book/default-tablet.png',
              viewSize: 1024,
            },
            {
              url: volumeInfo.imageLinks?.thumbnail ?? '/book/default-desktop.png',
              viewSize: 1440,
            },
          ]}
          alt={`Book ${volumeInfo.title}`}
          className={styles.content__img}
        />

        <div className={styles['content__info-wrapper']}>
          <Info categories={volumeInfo.categories ?? []} authors={volumeInfo.authors ?? []} />

          <Button
            textSide="right"
            icon={<IconArrow width="100%" height="100%" className="rotate-[135deg]" />}
            className={styles['content__back-md']}
            onClick={onBack}
          >
            Back
          </Button>

          <Button
            textSide="right"
            size="sm"
            icon={<IconArrow width="100%" height="100%" className="rotate-[135deg]" />}
            className={styles['content__back-sm']}
            onClick={onBack}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
}
