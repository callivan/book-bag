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
          src={
            volumeInfo.imageLinks?.thumbnail.replace(/http/gi, 'https') ??
            '/book/default-desktop.png'
          }
          placeholder={
            volumeInfo.imageLinks?.smallThumbnail.replace(/http/gi, 'https') ??
            '/book/default-preview.png'
          }
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
