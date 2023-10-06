import { Card } from '@entities';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';
import { IListProps } from './types/component';

export default function List({ items }: IListProps) {
  return (
    <ul className={styles.list}>
      {items.map(({ id, volumeInfo: { imageLinks, title, authors, categories } }, index) => (
        <li className={styles.item} key={id + index}>
          <Link to={`/${id}`}>
            <Card
              img={{
                basic: imageLinks?.thumbnail ?? '/book/default-thumbnail.png',
                placeholder: imageLinks?.smallThumbnail ?? '/book/default-preview.png',
              }}
              title={title}
              authors={authors}
              category={categories && categories[0]}
              className={styles.card}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
