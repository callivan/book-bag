import { Card } from '@entities';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { IListProps } from './types/component';

export default function List({ items }: IListProps) {
  return (
    <ul
      className={classNames(
        //Grid
        'grid grid-cols-list auto-rows-list place-content-around gap-3',
        //Tablet small
        'md:gap-2',

        //Size
        'w-full min-h-full max-h-max',
      )}
    >
      {items.map(({ id, volumeInfo: { imageLinks, title, authors, categories } }, index) => (
        <li
          className={classNames(
            //Size
            'w-full h-full',

            //Color
            //Action
            'group',
            //Transition
            'transition-transform duration-200',
            //Hover
            'hover:scale-[0.99]',
            //Active
            'active:scale-[0.98]',
          )}
          key={id + index}
        >
          <Link to={`/${id}`}>
            <Card
              img={{
                basic: imageLinks?.thumbnail ?? '/book/default-thumbnail.png',
                placeholder: imageLinks?.smallThumbnail ?? '/book/default-preview.png',
              }}
              title={title}
              authors={authors}
              category={categories && categories[0]}
              className={classNames(
                //Color
                //Transition
                'transition-color duration-200',
                //Hover
                'group-hover:bg-gray-dark',
              )}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
