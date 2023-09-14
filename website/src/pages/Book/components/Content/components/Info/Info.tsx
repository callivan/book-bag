import { Badge, Text } from '@shared/ui';
import classNames from 'classnames';

import { IInfoProps } from './types/component';

export function Info({ authors, categories }: IInfoProps) {
  return (
    <div
      className={classNames(
        //Size
        'w-full h-max',

        //Flex
        'flex flex-wrap gap-3',

        //Indent
        'mb-auto',
      )}
    >
      <div
        className={classNames(
          //Size
          'min-w-[200px] h-max',

          //Flex
          'flex-grow-[3] flex-shrink flex flex-col gap-2',
        )}
      >
        <Text
          className={classNames(
            //Font
            'text-h3',
            //Tablet small
            'md:text-center',

            //Size
            'w-full',
          )}
        >
          Written by:
        </Text>

        <div
          className={classNames(
            //Flex
            'flex items-center flex-wrap gap-1',
            //Tablet small
            'md:justify-center',

            //Size
            'w-full',
          )}
        >
          {authors.map((author, index) => (
            <Text key={index} className="md:text-center">
              {author}
            </Text>
          ))}
        </div>
      </div>
      <div
        className={classNames(
          //Size
          'min-w-[200px] h-max',

          //Flex
          'flex-grow flex-shrink flex flex-col items-center gap-2',
        )}
      >
        <Text
          className={classNames(
            //Font
            'text-h3',
            //Tablet small
            'md:text-center',

            //Size
            'w-full',
          )}
        >
          Categories:
        </Text>

        <div
          className={classNames(
            //Flex
            'flex items-center flex-wrap gap-1',
            //Tablet small
            'md:justify-center',

            //Size
            'w-full',
          )}
        >
          {categories.map((category, index) => (
            <Badge key={index} size="sm" label={category} />
          ))}
        </div>
      </div>
    </div>
  );
}
